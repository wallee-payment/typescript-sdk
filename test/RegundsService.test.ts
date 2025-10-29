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
    MOCK_CARD_DATA
} from "./constants";
import {
    RefundsService,
    TransactionsService,
    Transaction,
    TransactionCreate,
    TransactionCompletionState,
    TransactionState,
    RefundCreate,
    RefundState,
    RefundType
} from "../src";
import { TestUtil } from "./TestUtil";

/** Refunds service tests */
describe('RefundsTest — Refunds service tests', function () {
    let refundsService: RefundsService;
    let transactionsService: TransactionsService;

    before(async function () {
        refundsService = new RefundsService(DefaultConfiguration);
        transactionsService = new TransactionsService(DefaultConfiguration);
    });

    /**
     * Refund of fulfilled transaction should be created successfully
     */
    it('shoudl do refund of completed transaction', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const transactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOffline(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(transactionCompletion.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const readTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(readTransaction.state).to.equal(
            TransactionState.Fulfill,
            "Transaction state must be FULFILL"
        );

        const refundCreate = getRefundCreate(transaction);

        const refund = await refundsService.postPaymentRefunds(
            {
                space: SPACE_ID,
                refundCreate: refundCreate
            }
        );

        expect(refund.state).to.equal(
            RefundState.Successful,
            "Refund state must be SUCCESSFUL"
        );
    });

    /**
     * Refund read should return valid data
     */
    it('should return refund data', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        const transactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOffline(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(transactionCompletion.state).to.equal(
            TransactionCompletionState.Successful,
            "Transaction completion state must be SUCCESSFUL"
        );

        const readTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        const refundCreate = getRefundCreate(transaction);

        const refund = await refundsService.postPaymentRefunds(
            {
                space: SPACE_ID,
                refundCreate: refundCreate
            }
        );

        expect(refund.state).to.equal(
            RefundState.Successful,
            "Refund state must be SUCCESSFUL"
        );

        const readRefund = await refundsService.getPaymentRefundsId(
            {
                id: refund.id!,
                space: SPACE_ID
            }
        );

        expect(readRefund.id).to.equal(
            refund.id,
            "Refund ids should match"
        );
    });

    function getRefundCreate(transaction: Transaction): RefundCreate {
        const refundCreate: RefundCreate = {
            transaction: transaction.id!,
            type: RefundType.MerchantInitiatedOffline,
            externalId: crypto.randomUUID(),
            amount: 29.95
        };
        return refundCreate;
    }

    async function create(transactionCreate: TransactionCreate): Promise<Transaction> {
        return await transactionsService.postPaymentTransactions(
            {
                space: SPACE_ID,
                transactionCreate: transactionCreate
            }
        );
    }
});