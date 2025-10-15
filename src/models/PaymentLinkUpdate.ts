'use strict';
import { LineItemCreate } from "./LineItemCreate";
import { PaymentLinkAddressHandlingMode } from "./PaymentLinkAddressHandlingMode";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";


class PaymentLinkUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The payment method configurations that customers can use for making payments.
        */
    'allowedPaymentMethodConfigurations'?: Array<PaymentMethodConfiguration>;

        /**
        * The domains to which the user is allowed to be redirected after the payment is completed. The following options can be configured: Exact domain: enter a full domain, e.g. (https://example.com). Wildcard domain: use to allow subdomains, e.g. (https://_*.example.com). All domains: use (ALL) to allow redirection to any domain (not recommended for security reasons). No domains : use (NONE) to disallow any redirection. Only one option per line is allowed. Invalid entries will be rejected. 
        */
    'allowedRedirectionDomains'?: Array<string>;

        /**
        * The payment link can be used within a specific space view, which may apply a customized design to the payment page.
        */
    'appliedSpaceView'?: number;

        /**
        * The earliest date the payment link can be used to initiate a transaction. If no date is provided, the link will be available immediately.
        */
    'availableFrom'?: Date;

        /**
        * The latest date the payment link can be used to initiate a transaction. If no date is provided, the link will remain available indefinitely.
        */
    'availableUntil'?: Date;

        /**
        * The handling mode defines whether a billing address is required and specifies how it should be provided.
        */
    'billingAddressHandlingMode'?: PaymentLinkAddressHandlingMode;

        /**
        * The three-letter currency code (ISO 4217). If not specified, it must be provided in the 'currency' request parameter.
        */
    'currency'?: string;

        /**
        * The language for displaying the payment page. If not specified, it can be supplied via the 'language' request parameter.
        */
    'language'?: string;

        /**
        * The line items representing what is being sold. If not specified, they can be supplied via request parameters.
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * The maximum number of transactions that can be initiated using the payment link.
        */
    'maximalNumberOfTransactions'?: number;

        /**
        * The name used to identify the payment link.
        */
    'name'?: string;

        /**
        * The handling mode defines whether a shipping address is required and specifies how it should be provided.
        */
    'shippingAddressHandlingMode'?: PaymentLinkAddressHandlingMode;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "allowedPaymentMethodConfigurations",
        "baseName": "allowedPaymentMethodConfigurations",
        "type": "Array<PaymentMethodConfiguration>"
        },
        
        {
        "name": "allowedRedirectionDomains",
        "baseName": "allowedRedirectionDomains",
        "type": "Array<string>"
        },
        
        {
        "name": "appliedSpaceView",
        "baseName": "appliedSpaceView",
        "type": "number"
        },
        
        {
        "name": "availableFrom",
        "baseName": "availableFrom",
        "type": "Date"
        },
        
        {
        "name": "availableUntil",
        "baseName": "availableUntil",
        "type": "Date"
        },
        
        {
        "name": "billingAddressHandlingMode",
        "baseName": "billingAddressHandlingMode",
        "type": "PaymentLinkAddressHandlingMode"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
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
        "name": "maximalNumberOfTransactions",
        "baseName": "maximalNumberOfTransactions",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "shippingAddressHandlingMode",
        "baseName": "shippingAddressHandlingMode",
        "type": "PaymentLinkAddressHandlingMode"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentLinkUpdate.attributeTypeMap;
    }
}

export { PaymentLinkUpdate }
