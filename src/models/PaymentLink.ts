'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { LineItem } from "./LineItem";
import { PaymentLinkAddressHandlingMode } from "./PaymentLinkAddressHandlingMode";
import { PaymentLinkProtectionMode } from "./PaymentLinkProtectionMode";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";


class PaymentLink {

        /**
        * The allowed payment method configurations restrict the payment methods which can be used with this payment link.
        */
    'allowedPaymentMethodConfigurations'?: Array<PaymentMethodConfiguration>;

        /**
        * The payment link can be conducted in a specific space view. The space view may apply a specific design to the payment page.
        */
    'appliedSpaceView'?: number;

        /**
        * The available from date defines the earliest date on which the payment link can be used. When no date is specified there will be no restriction.
        */
    'availableFrom'?: Date;

        /**
        * The available from date defines the latest date on which the payment link can be used to initialize a transaction. When no date is specified there will be no restriction.
        */
    'availableUntil'?: Date;

        /**
        * The billing address handling mode controls if the address is collected or not and how it is collected.
        */
    'billingAddressHandlingMode'?: PaymentLinkAddressHandlingMode;

        /**
        * The currency defines in which currency the payment is executed in. If no currency is defined it has to be specified within the request parameter 'currency'.
        */
    'currency'?: string;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language defines the language of the payment page. If no language is provided it can be provided through the request parameter.
        */
    'language'?: string;

        /**
        * The line items allows to define the line items for this payment link. When the line items are defined they cannot be overridden through the request parameters.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The maximal number of transactions limits the number of transactions which can be created with this payment link.
        */
    'maximalNumberOfTransactions'?: number;

        /**
        * The payment link name is used internally to identify the payment link. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The protection mode determines if the payment link is protected against tampering and in what way.
        */
    'protectionMode'?: PaymentLinkProtectionMode;

        /**
        * The shipping address handling mode controls if the address is collected or not and how it is collected.
        */
    'shippingAddressHandlingMode'?: PaymentLinkAddressHandlingMode;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The URL defines the URL to which the user has to be forwarded to initialize the payment.
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
