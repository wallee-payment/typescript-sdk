'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { LineItem } from "./LineItem";
import { PaymentLinkAddressHandlingMode } from "./PaymentLinkAddressHandlingMode";
import { PaymentLinkProtectionMode } from "./PaymentLinkProtectionMode";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";


class PaymentLink {

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
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language for displaying the payment page. If not specified, it can be supplied via the 'language' request parameter.
        */
    'language'?: string;

        /**
        * The line items representing what is being sold. If not specified, they can be supplied via request parameters.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The maximum number of transactions that can be initiated using the payment link.
        */
    'maximalNumberOfTransactions'?: number;

        /**
        * The name used to identify the payment link.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The protection mode defines whether the payment link is protected against tampering and specifies the protection method.
        */
    'protectionMode'?: PaymentLinkProtectionMode;

        /**
        * The handling mode defines whether a shipping address is required and specifies how it should be provided.
        */
    'shippingAddressHandlingMode'?: PaymentLinkAddressHandlingMode;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The public URL to share with customers for making payments.
        */
    'url'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "protectionMode",
        "baseName": "protectionMode",
        "type": "PaymentLinkProtectionMode"
        },
        
        {
        "name": "shippingAddressHandlingMode",
        "baseName": "shippingAddressHandlingMode",
        "type": "PaymentLinkAddressHandlingMode"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentLink.attributeTypeMap;
    }
}

export { PaymentLink }
