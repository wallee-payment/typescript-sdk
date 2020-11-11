'use strict';
import { AddressCreate } from "./AddressCreate";
import { LineItemCreate } from "./LineItemCreate";
import { PaymentMethodBrand } from "./PaymentMethodBrand";
import { TokenizationMode } from "./TokenizationMode";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";


class AbstractTransactionPending {

        /**
        * 
        */
    'allowedPaymentMethodBrands'?: Array<PaymentMethodBrand>;

        /**
        * 
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * 
        */
    'billingAddress'?: AddressCreate;

        /**
        * The completion behavior controls when the transaction is completed.
        */
    'completionBehavior'?: TransactionCompletionBehavior;

        /**
        * 
        */
    'currency'?: string;

        /**
        * The customer email address is the email address of the customer. If no email address is provided on the shipping or billing address this address is used.
        */
    'customerEmailAddress'?: string;

        /**
        * 
        */
    'customerId'?: string;

        /**
        * The user will be redirected to failed URL when the transaction could not be authorized or completed. In case no failed URL is specified a default failed page will be displayed.
        */
    'failedUrl'?: string;

        /**
        * 
        */
    'invoiceMerchantReference'?: string;

        /**
        * 
        */
    'language'?: string;

        /**
        * 
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * 
        */
    'merchantReference'?: string;

        /**
        * Meta data allow to store additional data along the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * 
        */
    'shippingAddress'?: AddressCreate;

        /**
        * 
        */
    'shippingMethod'?: string;

        /**
        * The user will be redirected to success URL when the transaction could be authorized or completed. In case no success URL is specified a default success page will be displayed.
        */
    'successUrl'?: string;

        /**
        * The time zone defines in which time zone the customer is located in. The time zone may affects how dates are formatted when interacting with the customer.
        */
    'timeZone'?: string;

        /**
        * 
        */
    'token'?: number;

        /**
        * The tokenization mode controls if and how the tokenization of payment information is applied to the transaction.
        */
    'tokenizationMode'?: TokenizationMode;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "allowedPaymentMethodBrands",
        "baseName": "allowedPaymentMethodBrands",
        "type": "Array<PaymentMethodBrand>"
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
