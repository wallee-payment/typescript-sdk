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
    Transaction,
    TransactionSearchResponse,
    TransactionCreate,
    TransactionListResponse,
    TransactionState
} from "../src";
import { TestUtil } from "./TestUtil"
describe('QueryingTest — Api querying features test using transactions service', function () {
    let transactionsService: TransactionsService;
    let transaction1: Transaction;
    let transaction2: Transaction;

    before(async function () {
        transactionsService = new TransactionsService(DefaultConfiguration);

        const transactionBase = await transactionsService.postPaymentTransactions(
            {
                space: SPACE_ID,
                transactionCreate: TestUtil.getTransactionCreatePayload()
            }
        );
        const transactionAuthorized = await transactionsService.postPaymentTransactionsIdProcessCardDetails(
            {
                id: transactionBase.id!,
                space: SPACE_ID,
                authenticatedCardRequest: MOCK_CARD_DATA
            }
        );
        await transactionsService.postPaymentTransactionsIdCompleteOnline(
            {
                id: transactionAuthorized.id!,
                space: SPACE_ID
            }
        );
        transaction1 = await transactionsService.getPaymentTransactionsId(
            {
                id: transactionAuthorized.id!,
                space: SPACE_ID
            }
        );

        const transactionCreateUSD: TransactionCreate = {
            ...TestUtil.getTransactionCreatePayload(),
            currency: 'USD',
            merchantReference: 'Transaction for querying test',
        };
        transaction2 = await transactionsService.postPaymentTransactions(
            {
                space: SPACE_ID,
                transactionCreate: transactionCreateUSD
            }
        );
    });

    /**
     * Transaction search with limit parameter set to 2 items.
     */
    it('should return correct amount of items when search is limited', async function () {
        const resp: TransactionSearchResponse =
            await transactionsService.getPaymentTransactionsSearch(
                {
                    space: SPACE_ID,
                    limit: 2,
                    offset: 0
                }
            );
        expect(resp.data).to.have.lengthOf(2, "Response should contain 2 items (as limited)");
    });

    /**
     * Transaction search with offset parameter.
     */
    it('should return correct response when offset is used', async function () {
        expect(transaction1).to.exist;
        expect(transaction2).to.exist;
        const query = `id:${transaction1.id} OR id:${transaction2.id}`;
        const higherId = Math.max(transaction1.id!, transaction2.id!);

        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 2,
                offset: 1,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data![0].id).to.equal(higherId, "Response offset should be correct");
    });

    /**
     * Transaction search using the 'before' parameter.
     */
    it('should return correct responses when using before parameter', async function () {
        const upper = Math.max(transaction1.id!, transaction2.id!);
        const lower = Math.min(transaction1.id!, transaction2.id!);

        const resp: TransactionListResponse =
            await transactionsService.getPaymentTransactions(
                {
                    space: SPACE_ID,
                    before: upper,
                    limit: 10,
                    order: 'ASC'
                }
            );
        expect(resp.data).to.be.an('array');
        expect(resp.data!.some((t) => t.id === lower)).to.be.true;
    });

    /**
     * Transaction search made with query.
     */
    it('should return valid items for search query', async function () {
        const query = `id:${transaction1.id} OR id:${transaction2.id}`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 4,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data).to.have.lengthOf(2, "Response should contain only 2 items");
    });

    /**
     * Transaction search with quotes in query.
     */
    it('should return valid item for quoted query', async function () {
        const query = `merchantReference:"Transaction for querying test" AND id:${transaction2.id}`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 4,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data).to.have.lengthOf(1, "Response should contain 1 item");
    });

    /**
     * Query with isNull constraint.
     */
    it('should return item for query with isNull constraint', async function () {
        const query = `id:${transaction2.id} AND paymentConnectorConfiguration:*`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 4,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data).to.have.lengthOf(1, "Response should contain only 1 item");
    });

    /**
     * Query with grouping.
     */
    it('should return valid item for grouped query', async function () {
        const query = `id:${transaction1.id} AND (currency:EUR OR currency:CHF)`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 4,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data).to.have.lengthOf(1, "Response should contain only 1 item");
    });

    /**
     * Query with range clause.
     */
    it('should return valid items for range query', async function () {
        const query = `id:>${transaction1.id! - 2} id:<=${transaction1.id! + 2}`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 8,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data!.some((t) => t.id === transaction1.id)).to.be.true;
    });
    /**
     * Query with contains clause.
     */
    it('should return items for contains clause query', async function () {
        const query = 'merchantReference:~querying';
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 2,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data!.length).to.be.greaterThan(0, "Should contain more than 0 items");
    });

    /**
     * Query with negation.
     */
    it('should not return transaction with specific ID in negation query', async function () {
        const query = `id:>${transaction1.id! - 2} id:<=${transaction1.id! + 2} AND -id:${transaction1.id
            }`;
        const resp = await transactionsService.getPaymentTransactionsSearch(
            {
                space: SPACE_ID,
                limit: 8,
                offset: 0,
                order: 'id:ASC',
                query: query
            }
        );
        expect(resp.data!.some((t) => t.id === transaction1.id)).to.be.false;
    });

    /**
     * Order clause test.
     */
    it('should return items sorted descending by ID', async function () {
        const resp = await transactionsService.getPaymentTransactionsSearch({
            space: SPACE_ID,
            limit: 4,
            offset: 0,
            order: 'id:DESC'
        });

        expect(resp).to.exist;
        expect(resp.data, 'Response data should not be null').to.exist;
        expect(resp.data!.length, 'Response should contain at least two transactions').to.be.gte(2);

        const firstId = resp.data![0].id!;
        const lastId = resp.data![resp.data!.length - 1].id!;
        const difference = firstId - lastId;

        expect(difference, 'Response should be sorted descending. First ID should be greater than last ID.').to.be.greaterThan(0);
    });

    /**
     * No expand params.
     */
    it('should return collapsed response when no expand is used', async function () {
        const resp = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction1.id!,
                space: SPACE_ID,
            }
        );
        expect(resp.group).to.exist;
        expect(resp.group!.id).to.exist;
        expect(resp.group!.state).to.be.undefined;
        expect(resp.group!.version).to.be.undefined;
    });

    /**
     * With expand parameters.
     */
    it('should return expanded response with expand parameters', async function () {
        expect(transaction1.state).to.equal(TransactionState.Fulfill);

        const resp = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction1.id!,
                space: SPACE_ID,
                expand: new Set(['group', 'paymentConnectorConfiguration'])
            }
        );
        expect(resp.group).to.exist;
        expect(resp.group!.id).to.exist;
        expect(resp.group!.state).to.exist;
        expect(resp.group!.version).to.exist;

        expect(resp.paymentConnectorConfiguration).to.exist;
        expect(resp.paymentConnectorConfiguration!.processorConfiguration).to.exist;
    });

    /**
     * Nested expand parameter.
     */
    it('should return expanded nested response', async function () {
        expect(transaction1.state).to.equal(TransactionState.Fulfill);

        const resp = await transactionsService.getPaymentTransactionsId(
            {
                id: transaction1.id!,
                space: SPACE_ID,
                expand: new Set(['paymentConnectorConfiguration.processorConfiguration'])
            }
        );
        expect(resp.paymentConnectorConfiguration).to.exist;
        expect(resp.paymentConnectorConfiguration!.processorConfiguration).to.exist;
        expect(
            resp.paymentConnectorConfiguration!.processorConfiguration!.linkedSpaceId
        ).to.exist;
    });
});