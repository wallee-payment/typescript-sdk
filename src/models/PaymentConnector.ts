'use strict';
import { CustomersPresence } from "./CustomersPresence";
import { DataCollectionType } from "./DataCollectionType";
import { PaymentMethodBrand } from "./PaymentMethodBrand";
import { PaymentPrimaryRiskTaker } from "./PaymentPrimaryRiskTaker";


class PaymentConnector {

        /**
        * The data collection type specifies how the payment information is collected.
        */
    'dataCollectionType'?: DataCollectionType;

        /**
        * Whether the object was deprecated.
        */
    'deprecated'?: boolean;

        /**
        * The deprecation reason describes why the object was deprecated.
        */
    'deprecationReason'?: { [key: string]: string; };

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The payment method that the connector supports.
        */
    'paymentMethod'?: number;

        /**
        * The specific brand that this payment connector supports.
        */
    'paymentMethodBrand'?: PaymentMethodBrand;

        /**
        * The entity that bears the main risk in the event that a contracting party fails to meet its obligations.
        */
    'primaryRiskTaker'?: PaymentPrimaryRiskTaker;

        /**
        * The processor that the connector belongs to.
        */
    'processor'?: number;

        /**
        * The currencies that are supported by the connector.
        */
    'supportedCurrencies'?: Array<string>;

        /**
        * The types of customer's presence that are supported by the connector.
        */
    'supportedCustomersPresences'?: Array<CustomersPresence>;

        /**
        * The features that are supported by the connector.
        */
    'supportedFeatures'?: Array<number>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "dataCollectionType",
        "baseName": "dataCollectionType",
        "type": "DataCollectionType"
        },
        
        {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean"
        },
        
        {
        "name": "deprecationReason",
        "baseName": "deprecationReason",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
        },
        
        {
        "name": "paymentMethodBrand",
        "baseName": "paymentMethodBrand",
        "type": "PaymentMethodBrand"
        },
        
        {
        "name": "primaryRiskTaker",
        "baseName": "primaryRiskTaker",
        "type": "PaymentPrimaryRiskTaker"
        },
        
        {
        "name": "processor",
        "baseName": "processor",
        "type": "number"
        },
        
        {
        "name": "supportedCurrencies",
        "baseName": "supportedCurrencies",
        "type": "Array<string>"
        },
        
        {
        "name": "supportedCustomersPresences",
        "baseName": "supportedCustomersPresences",
        "type": "Array<CustomersPresence>"
        },
        
        {
        "name": "supportedFeatures",
        "baseName": "supportedFeatures",
        "type": "Array<number>"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentConnector.attributeTypeMap;
    }
}

export { PaymentConnector }
