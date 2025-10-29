/* tslint:disable */
/* eslint-disable */
/**
 * Wallee AG TypeScript SDK
 *
 * This library allows to interact with the Wallee AG payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://en.wallee.com
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { it, describe, before } from "mocha";
import { expect } from "chai";
import * as crypto from "crypto";

import {
    DefaultConfiguration,
    SPACE_ID,
    MOCK_CARD_DATA,
    TEST_CUSTOMER_ID,
    TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID
} from "./constants";
import {
    TransactionsService,
    TokensService,
    Transaction,
    TransactionCreate,
    TransactionPending,
    TransactionState,
    TokenizationMode,
    CustomersPresence,
    TransactionCompletionBehavior,
    TransactionVoidState,
    TransactionCompletionState,
    TransactionCompletionDetails,
    TransactionVoid,
    TransactionCompletion,
    CreationEntityState,
    TokenCreate,
    TokenUpdate,
    ChargeState,
    TokenizedCardDataCreate,
    TokenizedCardRequest,
    TerminalReceiptFormat,
    LineItemCreate,
    LineItemType
} from "../src";
import { TestUtil } from "./TestUtil";

/** API tests for Transactions API Service */
describe('TransactionsServiceTest — Transactions service test', function () {
    const INTEGRATION_MODE = "payment_page";
    let transactionsService: TransactionsService;
    let tokensService: TokensService;

    before(async function () {
        transactionsService = new TransactionsService(DefaultConfiguration);
        tokensService = new TokensService(DefaultConfiguration);
    });

    /**
     * Creates a new transaction.
     *
     * Verifies that:
     * - Transaction state is PENDING
     */
    it('should create and find pending transaction', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const found = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(transaction.state).to.equal(
            TransactionState.Pending,
            "Transaction state must be PENDING"
        );
        expect(found.merchantReference).to.equal(
            transaction.merchantReference,
            "Merchant reference should match."
        );
    });

    /**
     * Confirms a pending transaction.
     *
     * Verifies that:
     * - Transaction state is CONFIRMED
     * - Transaction entity version is correctly incremented
     * - Merchant reference is correctly updated
     */
    it('should make transaction confirmed when confirm is called', async function () {
        const transactionCreate = TestUtil.getTransactionCreatePayload();
        transactionCreate.merchantReference = "Test Initial Confirm";
        const created = await create(transactionCreate);

        const transactionPending: TransactionPending = {
            version: 2,
            merchantReference: "Test Confirm"
        };

        const confirmed = await transactionsService.postPaymentTransactionsIdConfirm(
            {
                id: created.id!,
                space: SPACE_ID,
                transactionPending: transactionPending
            }
        );

        expect(confirmed.state).to.equal(
            TransactionState.Confirmed,
            "Transaction state must be CONFIRMED"
        );
        expect(confirmed.version).to.equal(3, "Version should match.");
        expect(confirmed.merchantReference).to.equal(
            transactionPending.merchantReference,
            "Merchant reference should match."
        );
    });

    /**
     * Processes a deferred transaction.
     *
     * Verifies that:
     * - Transaction state is AUTHORIZED
     */
    it('should make transaction authorized when deferred transaction is processed', async function () {
        const transactionCreate = TestUtil.getTransactionCreatePayload();
        transactionCreate.tokenizationMode = TokenizationMode.ForceCreation;
        transactionCreate.customersPresence = CustomersPresence.NotPresent;
        transactionCreate.completionBehavior = TransactionCompletionBehavior.CompleteDeferred;

        const transaction = await create(transactionCreate);

        const processed = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        expect(processed.state).to.equal(
            TransactionState.Authorized,
            "Transaction state must be AUTHORIZED"
        );
    });

    /**
     * Processes a transaction via charge flow.
     *
     * Verifies that:
     * - Transaction state is PROCESSING
     */
    it('should make transaction processing when processed via charge flow', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processingTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowApply(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(processingTransaction.state).to.equal(
            TransactionState.Processing,
            "Transaction state must be PROCESSING"
        );
    });

    /**
     * Processes and cancels a transaction via charge flow.
     *
     * Verifies that:
     * - Initially, transaction state is PROCESSING
     * - After cancellation, transaction state is FAILED
     */
    it('should make transaction failed when charge flow is cancelled', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processingTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowApply(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(processingTransaction.state).to.equal(
            TransactionState.Processing,
            "Transaction state must be PROCESSING"
        );

        const failedTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowCancel(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(failedTransaction.state).to.equal(
            TransactionState.Failed,
            "Transaction state must be FAILED"
        );
    });

    /**
     * Processes a transaction and retrieves payment page URL.
     *
     * Verifies that:
     * - Retrieved URL contains space ID
     * - Retrieved URL contains transaction ID
     */
    it('should return valid URL when payment page URL is fetched', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processingTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowApply(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        const url = await transactionsService.getPaymentTransactionsIdPaymentPageUrl(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(url).to.include("/s/" + SPACE_ID, "Space id should be present in url");
        expect(url).to.include("securityToken=", "Security token should be present in url");
        expect(url).to.include(processingTransaction.id!.toString(), "Transaction id should be present in url");
    });

    /**
     * Processes a transaction via charge flow and retrieves payment page URL.
     *
     * Verifies that:
     * - Transaction state is PROCESSING
     * - Retrieved URL contains space ID
     * - Retrieved URL contains transaction ID
     */
    it('should return valid URL when charge flow URL is fetched', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processingTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowApply(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(processingTransaction.state).to.equal(
            TransactionState.Processing,
            "Transaction state must be PROCESSING"
        );

        const url = await transactionsService.getPaymentTransactionsIdChargeFlowPaymentPageUrl(
            {
                id: processingTransaction.id!,
                space: SPACE_ID
            }
        );

        expect(url).to.include(SPACE_ID.toString(), "Url must contain space id");
        expect(url).to.include(processingTransaction.id!.toString(), "Url must contain transaction id");
        expect(url).to.include("securityToken=", "Url must contain security token");
    });

    /**
     * Authorizes and completes a transaction online using card details.
     *
     * Verifies that:
     * - Transaction completion state is SUCCESSFUL
     * - Transaction state is FULFILL
     */
    it('should make transaction completion state successful when completed online', async function () {
        const transactionCreate = TestUtil.getTransactionCreatePayload();
        transactionCreate.tokenizationMode = TokenizationMode.ForceCreation;
        transactionCreate.customersPresence = CustomersPresence.NotPresent;
        transactionCreate.completionBehavior = TransactionCompletionBehavior.CompleteImmediately;

        const transaction = await create(transactionCreate);

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID
            }
        );

        expect(processedTransaction.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const completedTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(completedTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILLED"
        );
    });

    /**
     * Authorizes and completes a transaction online partially using card details.
     *
     * Verifies that:
     * - Transaction completion state is SUCCESSFUL
     * - Transaction state is FULFILL
     */
    it('should make transaction completion state successful when completed online partially', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const tcd: TransactionCompletionDetails = {
            externalId: crypto.randomUUID()
        };

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompletePartiallyOnline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID,
                transactionCompletionDetails: tcd
            }
        );

        expect(processedTransaction.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const completedTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(completedTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILLED"
        );
    });

    /**
     * Authorizes and completes a transaction offline using card details.
     *
     * Verifies that:
     * - Transaction completion state is SUCCESSFUL
     * - Transaction state is FULFILL
     */
    it('should make transaction completion state successful when completed offline', async function () {
        const transactionCreate = TestUtil.getTransactionCreatePayload();
        transactionCreate.tokenizationMode = TokenizationMode.ForceCreation;
        transactionCreate.customersPresence = CustomersPresence.NotPresent;
        transactionCreate.completionBehavior = TransactionCompletionBehavior.CompleteImmediately;

        const transaction = await create(transactionCreate);

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompleteOffline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID
            }
        );

        expect(processedTransaction.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const completedTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(completedTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILLED"
        );
    });

    /**
     * Authorizes and completes a transaction offline partially using card details.
     *
     * Verifies that:
     * - Transaction completion state is SUCCESSFUL
     * - Transaction state is FULFILL
     */
    it('should make transaction completion state successful when completed offline partially', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const tcd: TransactionCompletionDetails = {
            externalId: crypto.randomUUID()
        };

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompletePartiallyOffline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID,
                transactionCompletionDetails: tcd
            }
        );

        expect(processedTransaction.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const completedTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(completedTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILLED"
        );
    });

    /**
     * Authorizes and voids a transaction online.
     *
     * Verifies that:
     * - Transaction void state is SUCCESSFUL
     * - Transaction state is VOIDED
     */
    it('should return voided transaction when transaction is voided online', async function () {
        const transactionCreate = TestUtil.getTransactionCreatePayload();
        transactionCreate.tokenizationMode = TokenizationMode.ForceCreation;
        transactionCreate.customersPresence = CustomersPresence.NotPresent;
        transactionCreate.completionBehavior = TransactionCompletionBehavior.CompleteDeferred;

        const transaction = await create(transactionCreate);

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        expect(authorizedTransaction.state).to.equal(
            TransactionState.Authorized,
            "Transaction state should be AUTHORIZED"
        );

        const expand = new Set(["transaction"]);

        const transactionVoid = await transactionsService.postPaymentTransactionsIdVoidOnline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID,
                expand: expand
            }
        );

        expect(transactionVoid.state).to.equal(
            TransactionVoidState.Successful,
            "Transaction void state should be SUCCESSFUL"
        );

        expect(transactionVoid.transaction).to.not.be.null;

        expect(transactionVoid.transaction!.state).to.equal(
            TransactionState.Voided,
            "Transaction state should be VOIDED"
        );
    });

    /**
     * Authorizes and voids a transaction offline.
     *
     * Verifies that:
     * - Transaction void state is SUCCESSFUL
     * - Transaction state is VOIDED
     */
    it('should return voided transaction when voiding transaction offline', async function () {
        const transactionCreate: TransactionCreate = {
            ...TestUtil.getTransactionCreatePayload(),
            tokenizationMode: TokenizationMode.ForceCreation,
            customersPresence: CustomersPresence.NotPresent,
            completionBehavior: TransactionCompletionBehavior.CompleteDeferred
        };

        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate
        });

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails({
            id: transaction.id!,
            space: SPACE_ID,
            authenticatedCardRequest: MOCK_CARD_DATA
        });

        expect(authorizedTransaction.state).to.equal(
            TransactionState.Authorized,
            "Transaction state should be AUTHORIZED"
        );

        const transactionVoid: TransactionVoid = await transactionsService.postPaymentTransactionsIdVoidOffline({
            id: authorizedTransaction.id!,
            space: SPACE_ID,
            expand: new Set(["transaction"])
        });

        expect(transactionVoid.state).to.equal(
            TransactionVoidState.Successful,
            "Transaction void state should be SUCCESSFUL"
        );

        expect(transactionVoid.transaction).to.not.be.null;

        expect(transactionVoid.transaction!.state).to.equal(
            TransactionState.Voided,
            "Transaction state should be VOIDED"
        );
    });

    /**
     * Creates, authorizes and completes a transaction.
     *
     * Verifies that:
     * - It's possible to create a transaction token for the fulfilled transaction
     */
    it('should allow token creation for fulfilled transaction', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails({
            id: transaction.id!,
            space: SPACE_ID,
            authenticatedCardRequest: MOCK_CARD_DATA
        });

        const fulFilledTransactionCompletion: TransactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOnline({
            id: authorizedTransaction.id!,
            space: SPACE_ID
        });

        const fulFilledTransaction = await transactionsService.getPaymentTransactionsId({
            id: transaction.id!,
            space: SPACE_ID
        });

        expect(fulFilledTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILL"
        );

        expect(fulFilledTransactionCompletion.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const tokenCreationPossible = await transactionsService.getPaymentTransactionsIdCheckTokenCreationPossible({
            id: fulFilledTransaction.id!,
            space: SPACE_ID
        });

        expect(tokenCreationPossible).to.be.true;
        expect(tokenCreationPossible, "Should be possible to create token for successful transaction").to.be.true;
    });

    /**
     * Creates, authorizes and voids a transaction.
     *
     * Verifies that:
     * - It's possible to create a transaction token for the voided transaction
     */
    it('should allow token creation for voided transaction', async function () {
        const transactionCreate: TransactionCreate = {
            ...TestUtil.getTransactionCreatePayload(),
            tokenizationMode: TokenizationMode.ForceCreation,
            customersPresence: CustomersPresence.NotPresent,
            completionBehavior: TransactionCompletionBehavior.CompleteDeferred
        };

        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate
        });

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails({
            id: transaction.id!,
            space: SPACE_ID,
            authenticatedCardRequest: MOCK_CARD_DATA
        });

        expect(authorizedTransaction.state).to.equal(
            TransactionState.Authorized,
            "Transaction state should be AUTHORIZED"
        );

        const transactionVoid: TransactionVoid = await transactionsService.postPaymentTransactionsIdVoidOnline({
            id: authorizedTransaction.id!,
            space: SPACE_ID
        });

        const voidedTransaction = await transactionsService.getPaymentTransactionsId({
            id: transaction.id!,
            space: SPACE_ID
        });

        expect(transactionVoid.state).to.equal(
            TransactionVoidState.Successful,
            "Transaction void state should be SUCCESSFUL"
        );

        expect(voidedTransaction.state).to.equal(
            TransactionState.Voided,
            "Transaction state should be VOIDED"
        );

        const tokenCreationPossible = await transactionsService.getPaymentTransactionsIdCheckTokenCreationPossible({
            id: voidedTransaction.id!,
            space: SPACE_ID
        });

        expect(tokenCreationPossible).to.be.true;
        expect(tokenCreationPossible, "Should be possible to create token for voided transaction").to.be.true;
    });

    /**
     * Creates transaction token for a transaction.
     *
     * Verifies that:
     * - Token contains space ID
     * - Token contains transaction ID
     */
    it('should create transaction token with valid credentials', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const credentials = await getCredentials(transaction.id!);

        expect(credentials.startsWith(String(SPACE_ID))).to.be.true;
        expect(credentials, "Transaction credentials token should have valid format").to.satisfy((creds: string) =>
            creds.startsWith(String(SPACE_ID))
        );

        expect(transaction.id).to.not.be.null;

        expect(credentials.includes(transaction.id!.toString())).to.be.true;
        expect(credentials, "Transaction credentials token should contain transaction id").to.include(
            transaction.id!.toString()
        );
    });

    /**
     * Gets IFrame payment URL for transaction.
     *
     * - Retrieves the payment URL for IFrame integration
     */
    it('should return valid iframe url', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const iFrameUrl = await transactionsService.getPaymentTransactionsIdIframeJavascriptUrl({
            id: transaction.id!,
            space: SPACE_ID
        });

        expect(iFrameUrl.includes(SPACE_ID.toString())).to.be.true;
        expect(iFrameUrl, "IFrame JavaScript URL should contain space id").to.include(
            SPACE_ID.toString()
        );

        expect(iFrameUrl.includes(transaction.id!.toString())).to.be.true;
        expect(iFrameUrl, "IFrame JavaScript URL should contain transaction id").to.include(
            transaction.id!.toString()
        );
    });

    /**
     * Gets Lightbox payment URL for transaction.
     *
     * - Retrieves the payment URL for Lightbox integration
     */
    it('should return valid lightbox url', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const lightboxJavascriptUrl = await transactionsService.getPaymentTransactionsIdLightboxJavascriptUrl({
            id: transaction.id!,
            space: SPACE_ID
        });

        expect(lightboxJavascriptUrl.includes(SPACE_ID.toString())).to.be.true;
        expect(lightboxJavascriptUrl, "Lightbox URL should contain space id").to.include(
            SPACE_ID.toString()
        );

        expect(lightboxJavascriptUrl.includes(transaction.id!.toString())).to.be.true;
        expect(lightboxJavascriptUrl, "Lightbox URL should contain transaction id").to.include(
            transaction.id!.toString()
        );
    });

    /**
     * Creates, authorizes, completes transaction and gets invoice file.
     *
     * - Creates, authorizes and completes transaction
     * - Gets transaction invoice file and verifies that:
     *   - File title contains "invoice"
     *   - File mime type is PDF
     */
    it('should return pdf invoice file for completed transaction', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails({
            id: transaction.id!,
            space: SPACE_ID,
            authenticatedCardRequest: MOCK_CARD_DATA
        });

        const fulFilledTransactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOnline({
            id: authorizedTransaction.id!,
            space: SPACE_ID
        });

        const fulFilledTransaction = await transactionsService.getPaymentTransactionsId({
            id: transaction.id!,
            space: SPACE_ID
        });

        const invoice = await transactionsService.getPaymentTransactionsIdInvoiceDocument({
            id: fulFilledTransaction.id!,
            space: SPACE_ID
        });

        expect(invoice.title).to.not.be.null;
        expect(invoice.title!.toLowerCase().includes("invoice")).to.be.true;
        expect(invoice.title, "Invoice title should be present").to.satisfy((title: string) =>
            title.toLowerCase().includes("invoice")
        );

        expect(invoice.mimeType).to.not.be.null;
        expect(invoice.mimeType!.toLowerCase().includes("pdf")).to.be.true;
        expect(invoice.mimeType, "Invoice mimetype should be pdf").to.satisfy((mimeType: string) =>
            mimeType.toLowerCase().includes("pdf")
        );
    });

    /**
     * Creates, authorizes, completes transaction and gets packing slip.
     *
     * - Creates, authorizes and completes transaction
     * - Gets transaction packing slip and verifies that:
     *   - File title contains "packing slip"
     *   - File mime type is PDF
     */
    it('should return pdf packing slip file for completed transaction', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails({
            id: transaction.id!,
            space: SPACE_ID,
            authenticatedCardRequest: MOCK_CARD_DATA
        });

        const fulFilledTransactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOnline({
            id: authorizedTransaction.id!,
            space: SPACE_ID
        });

        const fulFilledTransaction = await transactionsService.getPaymentTransactionsId({
            id: transaction.id!,
            space: SPACE_ID
        });

        const packingSlip = await transactionsService.getPaymentTransactionsIdPackingSlipDocument({
            id: fulFilledTransaction.id!,
            space: SPACE_ID
        });

        expect(packingSlip.title).to.not.be.null;
        expect(packingSlip.title!.toLowerCase().includes("packing slip")).to.be.true;
        expect(packingSlip.title, "Packing slip title should be present").to.satisfy((title: string) =>
            title.toLowerCase().includes("packing slip")
        );

        expect(packingSlip.mimeType).to.not.be.null;
        expect(packingSlip.mimeType!.toLowerCase().includes("pdf")).to.be.true;
        expect(packingSlip.mimeType, "Packing slip mimetype should be pdf").to.satisfy((mimeType: string) =>
            mimeType.toLowerCase().includes("pdf")
        );
    });

    /**
     * Creates transaction and gets payment methods configuration.
     *
     * - Creates transaction
     * - Gets payment methods configuration and verifies that:
     *   - Payment methods are present
     */
    it('should return available payment methods for transaction', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const methodConfigurationListResponse = await transactionsService.getPaymentTransactionsIdPaymentMethodConfigurations({
            id: transaction.id!,
            integrationMode: INTEGRATION_MODE,
            space: SPACE_ID
        });

        expect(methodConfigurationListResponse.data, "The payment method list should be present").to.not.be.null;

        expect(methodConfigurationListResponse.data!.length).to.be.greaterThan(0);
        expect(methodConfigurationListResponse.data, "Payment methods should be configured for a given transaction in test space").to.not.be.empty;
    });

    /**
     * Creates transaction and finds it by credentials.
     *
     * - Creates transaction and gets its credentials
     * - Finds transaction by credentials and verifies that:
     *   - Transaction is present
     */
    it('should return transaction when fetching with valid credentials', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const credentials = await transactionsService.getPaymentTransactionsIdCredentials({
            id: transaction.id!,
            space: SPACE_ID
        });

        const retrievedTransaction = await transactionsService.getPaymentTransactionsByCredentialsCredentials({
            credentials: credentials,
            space: SPACE_ID
        });

        expect(retrievedTransaction, "Transaction must be present").to.not.be.null;
    });

    /**
     * Creates transaction and gets payment methods configuration by credentials.
     *
     * - Creates transaction and gets its credentials
     * - Gets payment methods configuration by credentials and verifies that:
     *   - Payment methods are present
     */
    it('should return available payment methods when fetching with credentials', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const credentials = await getCredentials(transaction.id!);

        const methodConfigurationListResponse = await transactionsService.getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurations({
            credentials: credentials,
            integrationMode: INTEGRATION_MODE,
            space: SPACE_ID
        });

        expect(methodConfigurationListResponse.data).to.not.be.null;
        expect(methodConfigurationListResponse.data, "The payment method list should be present.").to.not.be.null;

        expect(methodConfigurationListResponse.data!.length).to.be.greaterThan(0);
        expect(methodConfigurationListResponse.data, "Payment methods should be configured for a given transaction in test space").to.not.be.empty;
    });

    /**
     * Creates and exports a transaction.
     *
     * - Creates transaction, exports it and verifies that:
     *   - Export file exists
     */
    it('should return export file for transaction', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const fields = new Set(["id"]);

        expect(transaction.id).to.not.be.null;

        const exportTransaction = await transactionsService.getPaymentTransactionsExport({
            space: SPACE_ID,
            fields: fields,
            limit: 1,
            offset: 0,
            order: "id:ASC",
            query: `id:${transaction.id!.toString()}`
        });

        expect(exportTransaction, "Export file should exist").to.not.be.null;
    });

    /**
     * Gets transaction by invalid credentials.
     *
     * - Attempts to retrieve a transaction using invalid credentials
     * - Verifies that the operation fails as expected
     */
    it('should fail when fetching transaction with invalid credentials', async function () {
        try {
            await transactionsService.getPaymentTransactionsByCredentialsCredentials({
                credentials: "bad_credentials",
                space: SPACE_ID
            });
            expect.fail("Bad token should error response");
        } catch (error) {
            expect(error).to.be.instanceOf(Error);
        }
    });

    /**
     * Creates and updates a transaction.
     *
     * - Creates a new transaction
     * - Updates it with new data
     * - Verifies that:
     *   - Update was successful
     *   - Version was incremented correctly
     */
    it('should change transaction data when updating', async function () {
        const transaction = await transactionsService.postPaymentTransactions({
            space: SPACE_ID,
            transactionCreate: TestUtil.getTransactionCreatePayload()
        });

        const update: TransactionPending = {
            language: "en-GB",
            version: 2
        };

        const updatedTransaction = await transactionsService.patchPaymentTransactionsId({
            id: transaction.id!,
            space: SPACE_ID,
            transactionPending: update
        });

        expect(updatedTransaction.language).to.equal("en-GB");
        expect(updatedTransaction.merchantReference, "Merchant reference should match.").to.equal(
            transaction.merchantReference
        );
        expect(updatedTransaction.version, "Version should match").to.equal(2);
    });

    /**
     * Tests one-click token flow: creation, update, usage.
     *
     * - Creates token
     * - Updates token settings (enabling one click payment)
     * - Creates transaction with linked token
     * - Processes and completes transaction
     * - Creates new transaction and completes it using token
     */
    it('should return payment url when processing one click token and redirect with credentials', async function () {
        const tokenCreate: TokenCreate = {
            state: CreationEntityState.Active,
            tokenReference: "testtoken",
            customerId: String(TEST_CUSTOMER_ID),
            externalId: crypto.randomUUID(),
            customerEmailAddress: "test@domain.com"
        };

        const token = await tokensService.postPaymentTokens(
            {
                space: SPACE_ID,
                tokenCreate,

            }
        );

        expect(token.version).to.not.be.null;

        const tokenUpdate: TokenUpdate = {
            version: token.version!,
            enabledForOneClickPayment: true
        };

        const updatedToken = await tokensService.patchPaymentTokensId(
            {
                id: token.id!,
                space: SPACE_ID,
                tokenUpdate,

            }
        );

        const transaction1 = await tokensService.postPaymentTokensIdCreateTransactionForTokenUpdate(
            {
                id: token.id!,
                space: SPACE_ID,

            }
        );

        const lineItem: LineItemCreate = {
            name: "Red T-Shirt",
            uniqueId: "5412",
            type: LineItemType.Product,
            quantity: 1,
            amountIncludingTax: 29.95,
            sku: "red-t-shirt-789"
        };

        const transaction1Pending: TransactionPending = {
            lineItems: [lineItem],
            version: 2,
            currency: "CHF"
        };

        const updatedTransaction1 = await transactionsService.patchPaymentTransactionsId(
            {
                id: transaction1.id!,
                space: SPACE_ID,
                transactionPending: transaction1Pending
            }
        )

        const processedTransaction1 = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction1.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA,

            }
        );

        const transactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: transaction1.id!,
                space: SPACE_ID,

            }
        );

        const transactionCreate2 = TestUtil.getTransactionCreatePayload();
        transactionCreate2.tokenizationMode = TokenizationMode.ForceCreationWithOneClickPayment;
        transactionCreate2.customersPresence = CustomersPresence.NotPresent;
        transactionCreate2.completionBehavior = TransactionCompletionBehavior.CompleteDeferred;
        transactionCreate2.customerId = String(TEST_CUSTOMER_ID);

        const transaction2 = await create(transactionCreate2);

        const credentials1 = await getCredentials(transaction1.id!);
        const credentials2 = await getCredentials(transaction2.id!);

        const paymentUrl2 = await transactionsService.postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcess(
            {
                credentials: credentials2,
                id: updatedToken.id!,
                space: SPACE_ID
            }
        );

        expect(paymentUrl2, "Url should not be null").to.be.not.null;
        expect(paymentUrl2, "Url should not be empty").to.be.not.empty;

        const readTransaction2 = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction2.id!,
                space: SPACE_ID,

            }
        );

        expect(readTransaction2.state).to.not.equal(TransactionState.Failed, "Transaction state should not be FAILED");
        expect(readTransaction2.state).to.not.equal(TransactionState.Pending, "Transaction state should not be PENDING");

        const completedTransaction1 = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: transaction1.id!,
                space: SPACE_ID,

            }
        );

        expect(completedTransaction1.state).to.equal(TransactionCompletionState.Successful, "Transaction completions state should be SUCCESSFUL");
    });

    /**
     * Processes transaction via token
     *
     * - Creates token
     * - Creates transaction with linked token
     * - Processes and completes transaction
     * - Creates new transaction and completes it using token
     */
    it('should process transaction when processing transaction via token', async function () {
        const lineItem: LineItemCreate = {
            name: "Red T-Shirt",
            uniqueId: "5412",
            type: LineItemType.Product,
            quantity: 1,
            amountIncludingTax: 29.95,
            sku: "red-t-shirt-789"
        };

        const tokenCreate: TokenCreate = {
            state: CreationEntityState.Active,
            tokenReference: "testtoken",
            customerId: String(TEST_CUSTOMER_ID),
            externalId: crypto.randomUUID(),
            customerEmailAddress: "test@domain.com"
        };

        const token = await tokensService.postPaymentTokens(
            {
                space: SPACE_ID,
                tokenCreate,

            }
        );

        const transaction = await tokensService.postPaymentTokensIdCreateTransactionForTokenUpdate(
            {
                id: token.id!,
                space: SPACE_ID,

            }
        );

        const transaction1Pending: TransactionPending = {
            lineItems: [lineItem],
            version: 2,
            currency: "CHF"
        }

        const updatedTransaction = await transactionsService.patchPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID,
                transactionPending: transaction1Pending
            }
        )

        const processedTransaction1 = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA,

            }
        );

        const transactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: transaction.id!,
                space: SPACE_ID,

            }
        );

        const transaction2 = await create(TestUtil.getTransactionCreatePayload());
        const transactionPending: TransactionPending = {
            token: token.id!,
            version: transaction2.version!,
            currency: "CHF",
            lineItems: [lineItem]
        };

        const updatedTransaction2 = await transactionsService.patchPaymentTransactionsId(
            {
                id: transaction2.id!,
                space: SPACE_ID,
                transactionPending: transactionPending,

            }
        );

        const charge = await transactionsService.postPaymentTransactionsIdProcessWithToken(
            {
                id: updatedTransaction2.id!,
                space: SPACE_ID,

            }
        );

        expect(charge.state).to.equal(ChargeState.Successful);

        const readTransaction2 = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction2.id!,
                space: SPACE_ID,
            }
        );

        expect(readTransaction2.token!.id).to.equal(token.id);
        expect(readTransaction2.state).to.equal(TransactionState.Fulfill);
    });

    /**
     * Verifies non-interactive transaction processing.
     *
     * - Processes a transaction without user interaction
     * - Verifies that:
     *   - Transaction reaches the AUTHORIZED state
     */
    it('should process transaction properly when processing without user interaction', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processedTransaction = await transactionsService.postPaymentTransactionsIdProcessWithoutInteraction(
            {
                id: transaction.id!,
                space: SPACE_ID,

            }
        );

        expect(processedTransaction.id).to.equal(transaction.id);
        expect(processedTransaction.state).to.equal(TransactionState.Processing);
    });

    /**
     * Retrieves tokens by transaction credentials.
     *
     * - Creates a new transaction
     * - Attempts to retrieve one-click tokens
     * - Verifies that:
     *   - Response data is present
     */
    it('should return response without exception when fetching one click token', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const credentials = await getCredentials(transaction.id!);

        const tokens = await transactionsService.getPaymentTransactionsByCredentialsCredentialsOneClickTokens(
            {
                credentials: credentials,
                space: SPACE_ID,

            }
        );

        expect(tokens).to.not.be.null;
        expect(tokens.data).to.not.be.null;
    });

    /**
     * Processes transaction with 3-D security
     *
     * Creates a new transaction and processes transaction with 3-D security.
     *
     * Verifies that:
     * - Returned url contains space id
     * - Returned url contains securityToken
     * - Transaction state is fulfilled
     */
    it('should fulfill transaction when processing transaction with 3D secure', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const tokenizedCardDataCreate: TokenizedCardDataCreate = {
            expiryDate: MOCK_CARD_DATA.cardData!.expiryDate,
            primaryAccountNumber: MOCK_CARD_DATA.cardData!.primaryAccountNumber
        };

        const tcr: TokenizedCardRequest = {
            cardData: tokenizedCardDataCreate,
            paymentMethodConfiguration: TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID
        };

        const url = await transactionsService.postPaymentTransactionsIdProcessCardDetailsThreed(
            {
                id: transaction.id!,
                space: SPACE_ID,
                tokenizedCardRequest: tcr
            }
        );

        const processed = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID,

            }
        );

        expect(url, "Url should not be null").to.be.not.null;
        expect(url, "Url should not be empty").to.be.not.empty;
        expect(processed.state).to.not.equal(
            TransactionState.Failed,
            "Transaction state should not be FAILED"
        );
        expect(processed.state).to.be.not.equal(
            TransactionState.Pending,
            "Transaction state should not be PENDING"
        );
    });

    /**
     * Gets mobile sdk url by credentials
     *
     * Creates a new transaction and gets mobile sdk url.
     *
     * Verifies that:
     * - Returned url contains space id
     * - Returned url contains securityToken
     */
    it('should return valid url when fetching mobile SDK url by credentials', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const credentials = await getCredentials(transaction.id!);

        const url = await transactionsService.getPaymentTransactionsByCredentialsCredentialsMobileSdkUrl(
            {
                credentials: credentials,
                space: SPACE_ID
            }
        );

        expect(url.includes(`/s/${SPACE_ID}`)).to.be.true;
        expect(url.includes("securityToken=")).to.be.true;
    });

    /**
     * Gets all terminal receipts for transaction. Should return empty list as terminal receipts were
     * not created for this transaction.
     */
    it('should return valid terminal receipts list when fetching terminal receipts', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA,

            }
        );

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID,

            }
        );

        const receiptListResponse = await transactionsService.getPaymentTransactionsIdTerminalReceipts(
            {
                id: transaction.id!,
                format: TerminalReceiptFormat.Txt,
                space: SPACE_ID,
                width: 200
            }
        );

        expect(receiptListResponse).to.not.be.null;
        expect(receiptListResponse.data!.length).to.equal(
            0,
            "Response size should be 0 as no terminal receipts created for this transaction"
        );
    });

    /**
     * Updates charge flow recipient for processing transaction
     */
    it('should not throw exception when updating charge flow recipient', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processingTransaction = await transactionsService.postPaymentTransactionsIdChargeFlowApply(
            {
                id: transaction.id!,
                space: SPACE_ID,

            }
        );

        expect(processingTransaction.state).to.equal(
            TransactionState.Processing,
            "Transaction state should be PROCESSING"
        );

        expect(async () => {
            await transactionsService.postPaymentTransactionsIdChargeFlowUpdateRecipient({
                id: transaction.id!,
                type: 1453447675844,
                recipient: "test2@domain.com",
                space: SPACE_ID
            });
        }).to.not.throw;
    });

    /**
     * Gets last version of line items list
     *
     * Creates a new transaction and gets line items.
     *
     * Verifies that:
     * - Amount is correct
     * - Version is correct
     * - Transaction id is same in transaction and charge
     */
    it('should return latest line items version when fetching line items version', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const authorizedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA,

            }
        );

        const processedTransaction = await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: authorizedTransaction.id!,
                space: SPACE_ID,

            }
        );

        const lineItems = await transactionsService.getPaymentTransactionsIdLatestLineItemVersion(
            {
                id: transaction.id!,
                space: SPACE_ID,

            }
        );

        expect(lineItems.version).to.equal(
            1,
            "Line items version should be 1"
        );
        expect(lineItems.amount).to.equal(
            29.95,
            "Line items amount should be 29.95"
        );
        expect(lineItems.linkedTransaction).to.equal(
            transaction.id,
            "Transaction ids should match"
        );
    });

    async function create(transactionCreate: TransactionCreate): Promise<Transaction> {
        return await transactionsService.postPaymentTransactions(
            {
                space: SPACE_ID,
                transactionCreate: transactionCreate
            }
        );
    }

    async function getCredentials(transactionId: number): Promise<string> {

        return await transactionsService.getPaymentTransactionsIdCredentials(
            {
                space: SPACE_ID,
                id: transactionId
            }
        );
    }
});