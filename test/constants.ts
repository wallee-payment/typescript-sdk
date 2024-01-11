import { Wallee as Whitelabel } from "../index";
import model = Whitelabel.model;

const { LineItemType } = model;
type TransactionCreate = model.TransactionCreate;
type AuthenticatedCardDataCreate = model.AuthenticatedCardDataCreate;

export const HttpStatus_UnprocessableContent = 442;
export const HttpStatus_Ok = 200;

export const ApiConfig = {
    space_id: 405,
    user_id: 512,
    api_secret: "FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=",
    timeout: 30
};

export function getTransactionCreate(): TransactionCreate {
    const transaction: TransactionCreate = {
        lineItems: [{
            name: "Red T-Shirt",
            uniqueId: "5412",
            type: LineItemType.PRODUCT,
            quantity: 1,
            amountIncludingTax: 29.95,
            sku: "red-t-shirt-123"
        }],
        autoConfirmationEnabled: true,
        currency: "CHF",
        billingAddress: {
            city: "Winterthur",
            country: "CH",
            emailAddress: "test@example.com",
            familyName: "Customer",
            givenName: "Good",
            postcode: "8400",
            postalState: "ZH",
            organizationName: "Test GmbH",
            mobilePhoneNumber: "+41791234567",
            salutation: "Ms"
        }
    };
    transaction.shippingAddress = transaction.billingAddress;

    return transaction;
}

export const FakeCardData: AuthenticatedCardDataCreate = {
    primaryAccountNumber: "4111111111111111",
    expiryDate: "2026-12"
};

export const TestCardPaymentMethodConfigurationId = 1352;
export const TestCustomerId = 7311742;


