'use strict';
import { expect } from 'chai';
import { Wallee } from '../index';

let macVersion: number = 1;
let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    mac_version: macVersion,
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Get Transaction
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

// Get PaymentMethod Service
let paymentMethodService: Wallee.api.PaymentMethodService = new Wallee.api.PaymentMethodService(config);

// default line item for tests
let lineItem: Wallee.model.LineItemCreate = new Wallee.model.LineItemCreate();
lineItem.name='Red T-Shirt';
lineItem.uniqueId='5412';
lineItem.sku='red-t-shirt-123';
lineItem.quantity=1;
lineItem.amountIncludingTax=3.50;
lineItem.type=Wallee.model.LineItemType.PRODUCT;

// default transaction for tests
let transaction: Wallee.model.TransactionCreate = new Wallee.model.TransactionCreate();
transaction.lineItems=[lineItem];
transaction.autoConfirmationEnabled=true;
transaction.currency='EUR';

// default transaction id
let globalTransactionId: number = 1;


describe('PaymentMethodServiceTest', () => {
    describe('paymentMethodServiceAllTest', () => {
        it('Should count payment methods to be greater than one', function(done) {
            paymentMethodService.paymentMethodServiceAll().then(function (response) {
                let variable: Array<Wallee.model.PaymentMethod> = response.body;
                expect(variable.length).to.greaterThan(0);
                done();
            });
        });
    });
});

describe('TestTransactionService', () => {

    describe('transactionServiceCount', () => {
        it('Should count 1 transaction', function(done) {
            transactionService.transactionServiceCreate(spaceId, transaction).then(function (response) {
                let transactionCreate: Wallee.model.Transaction = response.body;
                globalTransactionId = <number> transactionCreate.id;
                let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
                entityQueryFilter.fieldName = 'id';
                entityQueryFilter.value = transactionCreate.id;
                entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
                entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
                transactionService.transactionServiceCount(spaceId, entityQueryFilter).then(function (response) {
                    let transactionCount: number = response.body;
                    expect(transactionCount).to.equal(1);
                    done();
                });
            });
        });
    });

    describe('transactionServiceCreate', () => {
        it('transaction.state should be an instance of TransactionState', function(done) {
            transactionService.transactionServiceCreate(spaceId, transaction).then(function (response) {
                let transactionCreate: Wallee.model.Transaction = response.body;
                expect(transactionCreate.state).to.equal(Wallee.model.TransactionState.PENDING);
                done();
            });
        });
    });

    describe('transactionServiceRead', () => {
        it('transaction.state should be an instance of TransactionState', function (done) {
            transactionService.transactionServiceCreate(spaceId, transaction).then(function (response) {
                let transactionCreate: Wallee.model.Transaction = response.body;
                transactionService.transactionServiceRead(spaceId, <number>transactionCreate.id).then(function (response) {
                    let transactionRead = response.body;
                    expect(transactionRead.state).to.equal(Wallee.model.TransactionState.PENDING);
                    done();
                });
            });
        });
    });

    describe('transactionServiceSearch', () => {
        it('transaction.state should be an instance of TransactionState', function (done) {
            transactionService.transactionServiceCreate(spaceId, transaction).then(function (response) {
                let transactionCreate: Wallee.model.Transaction = response.body;
                let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
                entityQueryFilter.fieldName = 'id';
                entityQueryFilter.value = transactionCreate.id;
                entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
                entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
                let entityQuery = new Wallee.model.EntityQuery();
                entityQuery.filter = entityQueryFilter;
                transactionService.transactionServiceSearch(spaceId, entityQuery).then(function (response) {
                    let transactionSearch: Array<Wallee.model.Transaction> = response.body;
                    transactionSearch.forEach(function (entry) {
                        expect(entry.state).to.equal(Wallee.model.TransactionState.PENDING);
                    });
                    done();
                });
            });
        });
    });

    describe('transactionServiceUpdate', () => {
        it('transactionUpdate.language should equal to en-US', function (done) {
            transactionService.transactionServiceCreate(spaceId, transaction).then(function (response) {
                let transactionCreate: Wallee.model.Transaction = response.body;
                transactionCreate.language = 'en-US';
                transactionService.transactionServiceUpdate(spaceId, <Wallee.model.TransactionPending> transactionCreate).then(function (response) {
                    let transactionUpdate: Wallee.model.Transaction = response.body;
                    expect(transactionUpdate.language).to.equal('en-US');
                    done();
                });
            });
        });
    });

});