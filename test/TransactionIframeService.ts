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
let transactionIframeService: Wallee.api.TransactionIframeService = new Wallee.api.TransactionIframeService(config);
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

describe('TransactionIframeService', () => {

    /**
    * This operation creates the URL which can be used to embed the JavaScript for handling the iFrame checkout flow.
    * @summary Build JavaScript URL
    * @param spaceId 
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    describe('javascriptUrl', () => {
        it('javascriptUrl successful', () => {
            transactionService.create(config.space_id, getTransactionPayload())
            .then((response: { response: http.IncomingMessage, body: Wallee.model.Transaction }) => {
                let transaction: Wallee.model.Transaction = response.body;
                return transactionIframeService.javascriptUrl(config.space_id, <number>transaction.id);
            })
            .done((response: { response: http.IncomingMessage, body: string }) => {
                let javascriptUrl: string = response.body;
                expect(javascriptUrl).to.be.a('string');
                expect(javascriptUrl).to.include('https://');
            });
        });
    });
});
