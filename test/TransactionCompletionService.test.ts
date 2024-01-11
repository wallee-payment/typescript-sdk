"use strict";

import { expect } from "chai";
import http from "http";
import { Wallee as Whitelabel } from "../index";
import {
    ApiConfig,
    FakeCardData,
    TestCardPaymentMethodConfigurationId,
    getTransactionCreate
} from "./constants";
import model = Whitelabel.model;

const {
    TransactionCompletionService,
    TransactionService,
    CardProcessingService
} = Whitelabel.api;

const {
    TokenizationMode,
    CustomersPresence,
    TransactionCompletionBehavior,
    TransactionState,
    TransactionCompletionState,
    EntityQueryFilterType,
    CriteriaOperator
} = model;

type Transaction = model.Transaction;
type TransactionCompletion = model.TransactionCompletion;
type EntityQuery = model.EntityQuery;
type EntityQueryFilter = model.EntityQueryFilter;

const transactionCompletionService = new TransactionCompletionService(ApiConfig);
const transactionService = new TransactionService(ApiConfig);
const cardProcessingService = new CardProcessingService(ApiConfig);

function getDeferredTrsanctionCreate() {
    const transaction = getTransactionCreate();
    transaction.tokenizationMode = TokenizationMode.FORCE_CREATION;
    transaction.customersPresence = CustomersPresence.NOT_PRESENT;
    transaction.completionBehavior = TransactionCompletionBehavior.COMPLETE_DEFERRED;
    return transaction;
}

describe("TransactionCompletionService", () => {
    describe("completeOffline()", () => {
        it("should complete transaction offline (completion is NOT forwarded to processor)", (done) => {
            const transaction = getDeferredTrsanctionCreate();

            transactionService.create(ApiConfig.space_id, transaction)
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    expect(response.body.state).to.equal(TransactionState.AUTHORIZED);
                    const transactionId = response.body.id as number;
                    return transactionCompletionService.completeOffline(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    const transactionCompletion = response.body;
                    expect(transactionCompletion.state).to.equal(TransactionCompletionState.SUCCESSFUL);
                    done();
                });
        });
    });

    describe("completeOnline()", () => {
        it("should complete transaction online (completion is forwarded to processor)", (done) => {
            transactionService.create(ApiConfig.space_id, getDeferredTrsanctionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    expect(response.body.state).to.equal(TransactionState.AUTHORIZED);

                    const transactionId = response.body.id as number;
                    return transactionCompletionService.completeOnline(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    const transactionCompletion = response.body;
                    expect(transactionCompletion.state).to.equal(TransactionCompletionState.SUCCESSFUL);
                    done();
                });
        });
    });

    describe("read()", () => {
        it("should read details of transaction completion by id", (done) => {
            const transaction = getDeferredTrsanctionCreate();

            let transactionCompletionId = -1;

            transactionService.create(ApiConfig.space_id, transaction)
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    expect(response.body.state).to.equal(TransactionState.AUTHORIZED);
                    const transactionId = response.body.id as number;
                    return transactionCompletionService.completeOnline(ApiConfig.space_id, transactionId);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    transactionCompletionId = response.body.id as number;

                    return transactionCompletionService.read(ApiConfig.space_id, transactionCompletionId);
                })
                .done((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    const transactionCompletion = response.body;

                    expect(transactionCompletion.state).to.equal(TransactionCompletionState.SUCCESSFUL);
                    expect(transactionCompletion.id).to.equal(transactionCompletionId);

                    done();
                });
        });
    });

    describe("count()", () => {
        it("should count transaction completions based on provided criteria", (done) => {
            const transaction = getDeferredTrsanctionCreate();

            let transactionCompletionId = -1;

            transactionService.create(ApiConfig.space_id, transaction)
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    expect(response.body.state).to.equal(TransactionState.AUTHORIZED);
                    const transactionId = response.body.id as number;
                    return transactionCompletionService.completeOnline(ApiConfig.space_id, transactionId);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    transactionCompletionId = response.body.id as number;

                    const criteria: EntityQueryFilter = {
                        fieldName: "id",
                        value: transactionCompletionId,
                        type: EntityQueryFilterType.LEAF,
                        operator: CriteriaOperator.EQUALS
                    };

                    return transactionCompletionService.count(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: number }) => {
                    expect(response.body).to.equal(1);
                    done();
                });
        });
    });

    describe("search()", () => {
        it("should find transaction completions based on provided criteria", (done) => {
            const transaction = getDeferredTrsanctionCreate();

            let transactionCompletionId = -1;

            transactionService.create(ApiConfig.space_id, transaction)
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const processedTransactionId = response.body.id as number;
                    return cardProcessingService.process(ApiConfig.space_id, processedTransactionId,
                        TestCardPaymentMethodConfigurationId,
                        FakeCardData);
                })
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    expect(response.body.state).to.equal(TransactionState.AUTHORIZED);
                    const transactionId = response.body.id as number;
                    return transactionCompletionService.completeOnline(ApiConfig.space_id, transactionId);
                })
                .then((response: { response: http.IncomingMessage, body: TransactionCompletion }) => {
                    transactionCompletionId = response.body.id as number;

                    const criteria: EntityQuery = {
                        filter: {
                            fieldName: "id",
                            value: transactionCompletionId,
                            type: EntityQueryFilterType.LEAF,
                            operator: CriteriaOperator.EQUALS
                        }
                    };
                    return transactionCompletionService.search(ApiConfig.space_id, criteria);
                })
                .done((response: { response: http.IncomingMessage, body: Array<TransactionCompletion> }) => {
                    response.body.forEach((entry) => {
                        expect(entry.id).to.equal(transactionCompletionId);
                    });

                    done();
                });
        });
    });
});
