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
        * The language defines the language of the payment page. If no language is provided it can be provided through the request parameter.
        */
    'language'?: string;

        /**
        * The line items allows to define the line items for this payment link. When the line items are defined they cannot be overridden through the request parameters. If no amount for the payment link is defined, the additional checkout page to enter the amount is shown to the consumer.
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * The maximal number of transactions limits the number of transactions which can be created with this payment link.
        */
    'maximalNumberOfTransactions'?: number;

        /**
        * The payment link name is used internally to identify the payment link. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The shipping address handling mode controls if the address is collected or not and how it is collected.
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
