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

import {
    DefaultConfiguration,
    SPACE_ID,
    MOCK_CARD_DATA
} from "./constants";
import {
    TransactionsService,
    TransactionCompletionsService,
    Transaction,
    TransactionCreate,
    TransactionCompletion,
    TransactionState
} from "../src";
import { TestUtil } from "./TestUtil";

/** Transaction completions service tests */
describe('TransactionCompletionsServiceTest — Transaction completions service tests', function () {
    let transactionsService: TransactionsService;
    let transactionCompletionsService: TransactionCompletionsService;

    before(async function () {
        transactionsService = new TransactionsService(DefaultConfiguration);
        transactionCompletionsService = new TransactionCompletionsService(DefaultConfiguration);
    });

    /**
     * Transaction completion read should return valid data.
     * Ids of transaction linked to Transaction completion and initial transaction should match.
     */
    it('should return completed transaction data', async function () {
        const transaction = await create(TestUtil.getTransactionCreatePayload());

        const processedTransaction = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transaction.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );

        expect(processedTransaction.state).to.equal(
            TransactionState.Fulfill,
            "State must be FULFILL"
        );

        const transactionCompletion = await transactionsService.postPaymentTransactionsIdCompleteOffline(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        const readTransaction = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction.id!,
                space: SPACE_ID
            }
        );

        expect(transactionCompletion.linkedTransaction).to.equal(
            readTransaction.id,
            "Transaction ids must match"
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
});