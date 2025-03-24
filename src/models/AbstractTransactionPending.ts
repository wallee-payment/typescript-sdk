'use strict';
import { AddressCreate } from "./AddressCreate";
import { LineItemCreate } from "./LineItemCreate";
import { TokenizationMode } from "./TokenizationMode";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";


class AbstractTransactionPending {

        /**
        * The payment method brands that can be used to authorize the transaction.
        */
    'allowedPaymentMethodBrands'?: Array<number>;

        /**
        * The payment method configurations that can be used to authorize the transaction.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The address associated with the payment method for invoicing and transaction processing purposes.
        */
    'billingAddress'?: AddressCreate;

        /**
        * The behavior that controls when the transaction is completed.
        */
    'completionBehavior'?: TransactionCompletionBehavior;

        /**
        * The three-letter code (ISO 4217 format) of the transaction's currency.
        */
    'currency'?: string;

        /**
        * The customer's email address.
        */
    'customerEmailAddress'?: string;

        /**
        * The unique identifier of the customer in the external system.
        */
    'customerId'?: string;

        /**
        * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
        */
    'failedUrl'?: string;

        /**
        * The merchant's reference used to identify the invoice.
        */
    'invoiceMerchantReference'?: string;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The line items purchased by the customer.
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * The merchant's reference used to identify the transaction.
        */
    'merchantReference'?: string;

        /**
        * Allow to store additional information about the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The address to where the order will be shipped.
        */
    'shippingAddress'?: AddressCreate;

        /**
        * The name of the shipping method used to ship the products.
        */
    'shippingMethod'?: string;

        /**
        * The URL to redirect the customer back to after they successfully authenticated their payment.
        */
    'successUrl'?: string;

        /**
        * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
        */
    'timeZone'?: string;

        /**
        * The payment token that should be used to charge the customer.
        */
    'token'?: number;

        /**
        * The tokenization mode specifies whether and how the tokenization of payment information is applied to the transaction.
        */
    'tokenizationMode'?: TokenizationMode;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "allowedPaymentMethodBrands",
        "baseName": "allowedPaymentMethodBrands",
        "type": "Array<number>"
        },
        
        {
        "name": "allowedPaymentMethodConfigurations",
        "baseName": "allowedPaymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "AddressCreate"
        },
        
        {
        "name": "completionBehavior",
        "baseName": "completionBehavior",
        "type": "TransactionCompletionBehavior"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "customerEmailAddress",
        "baseName": "customerEmailAddress",
        "type": "string"
        },
        
        {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
        },
        
        {
        "name": "failedUrl",
        "baseName": "failedUrl",
        "type": "string"
        },
        
        {
        "name": "invoiceMerchantReference",
        "baseName": "invoiceMerchantReference",
        "type": "string"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemCreate>"
        },
        
        {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "AddressCreate"
        },
        
        {
        "name": "shippingMethod",
        "baseName": "shippingMethod",
        "type": "string"
        },
        
        {
        "name": "successUrl",
        "baseName": "successUrl",
        "type": "string"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "number"
        },
        
        {
        "name": "tokenizationMode",
        "baseName": "tokenizationMode",
        "type": "TokenizationMode"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractTransactionPending.attributeTypeMap;
    }
}

export { AbstractTransactionPending }
