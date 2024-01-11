"use strict";

import { expect } from "chai";
import http from "http";
import { Wallee as Whitelabel } from "../index";
import model = Whitelabel.model;
import {
    ApiConfig,
    FakeCardData,
    TestCardPaymentMethodConfigurationId,
    getTransactionCreate
} from "./constants";

const { 
    RefundService,
    TransactionCompletionService,
    TransactionService,
    CardProcessingService
} = Whitelabel.api;

const { 
    RefundType, 
    RefundState, 
    EntityQueryFilterType, 
    CriteriaOperator 
} = model;

type RefundCreate = model.RefundCreate;
type Transaction = model.Transaction;
type Refund = model.Refund;
type TransactionCompletion = model.TransactionCompletion;
type EntityQuery = model.EntityQuery;
type EntityQueryFilter = model.EntityQueryFilter;

const refundService = new RefundService(ApiConfig);
const transactionCompletionService = new TransactionCompletionService(ApiConfig);
const transactionService = new TransactionService(ApiConfig);
const cardProcessingService = new CardProcessingService(ApiConfig);

function getRefundCreate(transaction: Transaction): RefundCreate {
    return {
        externalId: transaction.id + "",
        type: RefundType.MERCHANT_INITIATED_ONLINE,
        amount: transaction.authorizationAmount,
        transaction: transaction.id,
        merchantReference: transaction.merchantReference
    };
}

describe("RefundService", () => {
    describe("refund()", () => {
        let transaction: Transaction;

        it("should create a refund for transaction", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return transactionCompletionService.completeOffline(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    return transactionService.read(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return refundService.refund(ApiConfig.space_id, getRefundCreate(transaction));
                })
                .done((response: { response: http.IncomingMessage, body: Refund }) => {
                    const refund = response.body;
                    expect(refund.state).to.equal(RefundState.SUCCESSFUL);
                    done();
                });
        });
    });

    describe("read()", () => {
        let transaction: Transaction;
        let refundId = -1;

        it("should fetch refund details", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return transactionCompletionService.completeOffline(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    return transactionService.read(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return refundService.refund(ApiConfig.space_id, getRefundCreate(transaction));
                })
                .then((response: { response: http.IncomingMessage, body: Refund }) => {
                    const refund = response.body;
                    refundId = refund.id as number;
                    expect(refund.state).to.equal(RefundState.SUCCESSFUL);

                    return refundService.read(ApiConfig.space_id, refundId);
                })
                .done((response: { response: http.IncomingMessage, body: Refund }) => {
                    expect(response.body.id).to.equal(refundId);

                    done();
                });
        });
    });

    describe("search()", () => {
        let transaction: Transaction;
        let refundId = -1;

        it("should find a refund for a given criteria", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return transactionCompletionService.completeOffline(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    return transactionService.read(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return refundService.refund(ApiConfig.space_id, getRefundCreate(transaction));
                })
                .then((response: { response: http.IncomingMessage, body: Refund }) => {
                    const refund = response.body;
                    refundId = refund.id as number;

                    expect(refund.state).to.equal(RefundState.SUCCESSFUL);

                    const criteria: EntityQuery = {
                        filter: {
                            fieldName: "id",
                            value: refund.id,
                            type: EntityQueryFilterType.LEAF,
                            operator: CriteriaOperator.EQUALS
                        }
                    };

                    return refundService.search(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: Array<Refund> }) => {
                    response.body.forEach((entry) => {
                        expect(entry.id).to.equal(refundId);
                    });
                    done();
                });
        });
    });

    describe("count()", () => {
        let transaction: Transaction;
        let refundId = -1;

        it("should count refunds for a given criteria", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return transactionCompletionService.completeOffline(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    return transactionService.read(ApiConfig.space_id, transaction.id as number);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    transaction = response.body;
                    return refundService.refund(ApiConfig.space_id, getRefundCreate(transaction));
                })
                .then((response: { response: http.IncomingMessage, body: Refund }) => {
                    const refund = response.body;
                    refundId = refund.id as number;

                    expect(refund.state).to.equal(RefundState.SUCCESSFUL);

                    const criteria: EntityQueryFilter = {
                        fieldName: "id",
                        value: refund.id,
                        type: EntityQueryFilterType.LEAF,
                        operator: CriteriaOperator.EQUALS
                    };

                    return refundService.count(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: number }) => {
                    expect(response.body).to.equal(1);
                    done();
                });
        });
    });
});
