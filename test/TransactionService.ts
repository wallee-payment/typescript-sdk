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
let transactionPaymentPageService: Wallee.api.TransactionPaymentPageService = new Wallee.api.TransactionPaymentPageService(config);
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

// Models
let transactionPayload: Wallee.model.TransactionCreate;

/**
 * Get transaction payload
 */
function getTransactionPayload(): Wallee.model.TransactionCreate {
    if (!transactionPayload) {
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

describe('TransactionService', () => {

    /**
     * Exports the transactions into a CSV file. The file will contain the properties defined in the request.
     * @summary Export
     * @param spaceId
     * @param request The request controls the entries which are exported.
     * @param {*} [options] Override http request options.
     */
    describe('_export', () => {

    });

    /**
     * The confirm operation marks the transaction as confirmed. Once the transaction is confirmed no more changes can be applied.
     * @summary Confirm
     * @param spaceId
     * @param transactionModel The transaction JSON object to update and confirm.
     * @param {*} [options] Override http request options.
     */
    describe('confirm', () => {

    });

    /**
     * Counts the number of items in the database as restricted by the given filter.
     * @summary Count
     * @param spaceId
     * @param filter The filter which restricts the entities which are used to calculate the count.
     * @param {*} [options] Override http request options.
     */
    describe('count', () => {
        it('count successful', () => {
            let transaction: Wallee.model.Transaction;
            transactionService.create(config.space_id, getTransactionPayload())
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    transaction = response.body;

                    let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
                    entityQueryFilter.fieldName = 'id';
                    entityQueryFilter.value = transaction.id;
                    entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
                    entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
                    return transactionService.count(config.space_id, entityQueryFilter);
                })
                .done((response: { response: http.IncomingMessage, body: number }) => {
                    let transactionCount: number = response.body;
                    expect(transactionCount).to.equal(1);
                });
        });
    });

    /**
     * Creates the entity with the given properties.
     * @summary Create
     * @param spaceId
     * @param transaction The transaction object which should be created.
     * @param {*} [options] Override http request options.
     */
    describe('create', () => {
        it('create success', () => {
            transactionService.create(config.space_id, getTransactionPayload())
                .done((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    let transaction: Wallee.model.Transaction = response.body;
                    expect(transaction.state).to.equal(Wallee.model.TransactionState.PENDING);
                });
        });
    });

    /**
     * This operation allows to create transaction credentials to delegate temporarily the access to the web service API for this particular transaction.
     * @summary Create Transaction Credentials
     * @param spaceId
     * @param id The id of the transaction which should be returned.
     * @param {*} [options] Override http request options.
     */
    describe('createTransactionCredentials', () => {

    });

    /**
     * This operation removes the given token.
     * @summary Delete One-Click Token with Credentials
     * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
     * @param tokenId The token ID will be used to find the token which should be removed.
     * @param {*} [options] Override http request options.
     */
    describe('deleteOneClickTokenWithCredentials', () => {

    });

    /**
     * This operation returns the token version objects which references the tokens usable as one-click payment tokens for the provided transaction.
     * @summary Fetch One Click Tokens with Credentials
     * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
     * @param {*} [options] Override http request options.
     */
    describe('fetchOneClickTokensWithCredentials', () => {

    });

    /**
     * This operation allows to get the payment method configurations which can be used with the provided transaction.
     * @summary Fetch Possible Payment Methods
     * @param spaceId
     * @param id The id of the transaction which should be returned.
     * @param {*} [options] Override http request options.
     */
    describe('fetchPaymentMethods', () => {
        it('fetchPaymentMethods successful', () => {
            let transaction: Wallee.model.Transaction;
            transactionService.create(config.space_id, getTransactionPayload())
            .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                transaction = response.body;
                return transactionService.fetchPaymentMethods(config.space_id, <number>transaction.id, "payment_page");
            })
            .done((response: { response: http.IncomingMessage, body: Array<Wallee.model.PaymentMethodConfiguration> }) => {
                let paymentMethods: Array<Wallee.model.PaymentMethodConfiguration> = response.body;
                expect(paymentMethods).to.be.an('array');
            });
        });
    });

    /**
     * This operation allows to get the payment method configurations which can be used with the provided transaction.
     * @summary Fetch Possible Payment Methods with Credentials
     * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
     * @param {*} [options] Override http request options.
     */
    describe('fetchPaymentMethodsWithCredentials', () => {

    });

    /**
     * Returns the PDF document for the transaction invoice with given id.
     * @summary getInvoiceDocument
     * @param spaceId
     * @param id The id of the transaction to get the invoice document for.
     * @param {*} [options] Override http request options.
     */
    describe('getInvoiceDocument', () => {

    });

    /**
     *
     * @summary getLatestTransactionLineItemVersion
     * @param spaceId
     * @param id The id of the transaction to get the latest line item version for.
     * @param {*} [options] Override http request options.
     */
    describe('getLatestTransactionLineItemVersion', () => {

    });

    /**
     * Returns the packing slip for the transaction with given id.
     * @summary getPackingSlip
     * @param spaceId
     * @param id The id of the transaction to get the packing slip for.
     * @param {*} [options] Override http request options.
     */
    describe('getPackingSlip', () => {

    });

    /**
     * This operation assigns the given token to the transaction and process it. This method will return an URL where the customer has to be redirect to complete the transaction.
     * @summary Process One-Click Token with Credentials
     * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
     * @param tokenId The token ID is used to load the corresponding token and to process the transaction with it.
     * @param {*} [options] Override http request options.
     */
    describe('processOneClickTokenAndRedirectWithCredentials', () => {

    });

    /**
     * This operation processes the transaction without requiring that the customer is present. Means this operation applies strategies to process the transaction without a direct interaction with the buyer. This operation is suitable for recurring transactions.
     * @summary Process Without User Interaction
     * @param spaceId
     * @param id The id of the transaction which should be processed.
     * @param {*} [options] Override http request options.
     */
    describe('processWithoutUserInteraction', () => {

    });

    /**
     * Reads the entity with the given 'id' and returns it.
     * @summary Read
     * @param spaceId
     * @param id The id of the transaction which should be returned.
     * @param {*} [options] Override http request options.
     */
    describe('read', () => {
        it('read successful', () => {
            transactionService.create(config.space_id, getTransactionPayload())
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    let transaction: Wallee.model.Transaction = response.body;
                    return transactionService.read(config.space_id, <number>transaction.id);
                })
                .done((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    let transaction: Wallee.model.Transaction = response.body;
                    expect(transaction.state).to.equal(Wallee.model.TransactionState.PENDING);
                });
        });
    });

    /**
     * Reads the transaction with the given 'id' and returns it. This method uses the credentials to authenticate and identify the transaction.
     * @summary Read With Credentials
     * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
     * @param {*} [options] Override http request options.
     */
    describe('readWithCredentials', () => {

    });

    /**
     * Searches for the entities as specified by the given query.
     * @summary Search
     * @param spaceId
     * @param query The query restricts the transactions which are returned by the search.
     * @param {*} [options] Override http request options.
     */
    describe('search', () => {
        it('search success', () => {
            let transaction: Wallee.model.Transaction
            transactionService.create(config.space_id, getTransactionPayload())
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    transaction = response.body;
                    let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
                    entityQueryFilter.fieldName = 'id';
                    entityQueryFilter.value = transaction.id;
                    entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
                    entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
                    let entityQuery = new Wallee.model.EntityQuery();
                    entityQuery.filter = entityQueryFilter;
                    return transactionService.search(config.space_id, entityQuery);
                })
                .then((response: { response: http.IncomingMessage, body: Array<Wallee.model.Transaction> }) => {
                    let transactionSearch: Array<Wallee.model.Transaction> = response.body;
                    transactionSearch.forEach((entry) => {
                        expect(entry.id).to.equal(transaction.id);
                    });
                });
        });
    });

    /**
     * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
     * @summary Update
     * @param spaceId
     * @param entity The transaction object with the properties which should be updated.
     * @param {*} [options] Override http request options.
     */
    describe('update', () => {
        it('update success',  () => {
            transactionService.create(config.space_id, getTransactionPayload())
                .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    let transaction: Wallee.model.Transaction = response.body;
                    let transactionPending: Wallee.model.TransactionPending = new Wallee.model.TransactionPending();
                    transactionPending.id = <number> transaction.id;
                    transactionPending.version = <number> transaction.version;
                    transactionPending.language = 'en-US';
                    return transactionService.update(config.space_id, transactionPending);
                })
                .delay(7500)
                .done((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                    let transaction: Wallee.model.Transaction = response.body;
                    expect(transaction.language).to.equal('en-US');
                });
            ;
        });
    });

    /**
     *
     * @summary updateTransactionLineItems
     * @param spaceId
     * @param updateRequest
     * @param {*} [options] Override http request options.
     */
    describe('updateTransactionLineItems', () => {
        // TODO
    });
});
