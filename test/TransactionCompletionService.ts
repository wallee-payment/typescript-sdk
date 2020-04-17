'use strict';
import { expect } from 'chai';
import { Wallee } from '../index';
import http = require("http");

// config
let config: { space_id: number, user_id: number, api_secret: string } = {
    space_id: 405,
    user_id: 512,
    api_secret: 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ='
};

// Services
let transactionCompletionService: Wallee.api.TransactionCompletionService = new Wallee.api.TransactionCompletionService(config);
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

// Models
let transactionPayload: Wallee.model.TransactionCreate;

/**
 * Get transaction payload
 */
function getTransactionPayload(): Wallee.model.TransactionCreate
{
    if(!transactionPayload) {
        // Line item
        let lineItem: Wallee.model.LineItemCreate = new Wallee.model.LineItemCreate();
        lineItem.name = 'Red T-Shirt';
        lineItem.uniqueId = '5412';
        lineItem.type = Wallee.model.LineItemType.PRODUCT;
        lineItem.quantity = 1;
        lineItem.amountIncludingTax = 29.95;
        lineItem.sku = 'red-t-shirt-123';

        // Customer Billing Address
        let billingAddress: Wallee.model.AddressCreate = new Wallee.model.AddressCreate();
        billingAddress.city = "Winterthur";
        billingAddress.country = "CH";
        billingAddress.emailAddress = "test@example.com";
        billingAddress.familyName = "Customer";
        billingAddress.givenName = "Good";
        billingAddress.postcode = "8400";
        billingAddress.postalState = "ZH";
        billingAddress.organizationName = "Test GmbH";
        billingAddress.mobilePhoneNumber = "+41791234567";
        billingAddress.salutation = "Ms";

        // Payload
        transactionPayload = new Wallee.model.TransactionCreate();
        transactionPayload.lineItems = [lineItem];
        transactionPayload.autoConfirmationEnabled = true;
        transactionPayload.currency = 'CHF';
        transactionPayload.billingAddress = billingAddress;
        transactionPayload.shippingAddress = billingAddress;
    }

    return transactionPayload;
}

describe('TransactionCompletionService', () => {

    /**
    * This operation completes the transaction offline. The completion is not forwarded to the processor. This implies the processor does not do anything. This method is only here to fix manually the transaction state.
    * @summary completeOffline
    * @param spaceId 
    * @param id The id of the transaction which should be completed.
    * @param {*} [options] Override http request options.
    */
    describe('completeOffline', () => {
        it('completeOffline successful', () => {
            let transaction: Wallee.model.Transaction;
            let transactionCompletion: Wallee.model.TransactionCompletion;
            transactionService.create(config.space_id, getTransactionPayload())
            .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                transaction = response.body;
                return transactionService.processWithoutUserInteraction(config.space_id, <number>transaction.id);
            })
            .delay(7500)
            .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                transaction = response.body;
                return transactionCompletionService.completeOffline(config.space_id, <number>transaction.id);
            })
            .delay(7500)
            .done((response: { response: http.IncomingMessage, body: Wallee.model.TransactionCompletion }) => {
                transactionCompletion = response.body;
                expect(transactionCompletion.state).to.equal(Wallee.model.TransactionCompletionState.SUCCESSFUL);
            });
        });
    });

    /**
    * This operation completes the transaction online. The completion is forwarded to the processor. This implies that the processor may take some actions based on the completion.
    * @summary completeOnline
    * @param spaceId 
    * @param id The id of the transaction which should be completed.
    * @param {*} [options] Override http request options.
    */
    describe('completeOnline', () => {
        it('completeOnline successful', () => {
            let transaction: Wallee.model.Transaction;
            let transactionCompletion: Wallee.model.TransactionCompletion;
            transactionService.create(config.space_id, getTransactionPayload())
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    transaction = response.body;
                    return transactionService.processWithoutUserInteraction(config.space_id, <number>transaction.id);
                })
                .delay(7500)
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    transaction = response.body;
                    return transactionCompletionService.completeOnline(config.space_id, <number>transaction.id);
                })
                .delay(7500)
                .done((response: { response: http.IncomingMessage, body: Wallee.model.TransactionCompletion }) => {
                    transactionCompletion = response.body;
                    expect(transactionCompletion.state).to.equal(Wallee.model.TransactionCompletionState.SUCCESSFUL);
                });
        });
    });

    /**
    * This operation can be used to partially complete the transaction offline. The completion is not forwarded to the processor. This implies the processor does not do anything. This method is only here to fix manually the transaction state.
    * @summary completePartiallyOffline
    * @param spaceId 
    * @param completion 
    * @param {*} [options] Override http request options.
    */
    describe('completePartiallyOffline', () => {
        //TODO
    });

    /**
    * This operation can be used to partially complete the transaction online. The completion is forwarded to the processor. This implies that the processor may take some actions based on the completion.
    * @summary completePartiallyOnline
    * @param spaceId 
    * @param completion 
    * @param {*} [options] Override http request options.
    */
    describe('completePartiallyOnline', () => {
        //TODO
    });

    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId 
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    describe('count', () => {
        //TODO
    });

    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId 
    * @param id The id of the transaction completions which should be returned.
    * @param {*} [options] Override http request options.
    */
    describe('read', () => {
        //TODO
    });

    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId 
    * @param query The query restricts the transaction completions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    describe('search', () => {
        //TODO
    });
});
