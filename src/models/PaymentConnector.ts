'use strict';
import { CustomersPresence } from "./CustomersPresence";
import { DataCollectionType } from "./DataCollectionType";
import { Feature } from "./Feature";
import { PaymentMethodBrand } from "./PaymentMethodBrand";
import { PaymentPrimaryRiskTaker } from "./PaymentPrimaryRiskTaker";


class PaymentConnector {

        /**
        * 
        */
    'dataCollectionType'?: DataCollectionType;

        /**
        * 
        */
    'deprecated'?: boolean;

        /**
        * 
        */
    'deprecationReason'?: { [key: string]: string; };

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'feature'?: Feature;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'paymentMethod'?: number;

        /**
        * 
        */
    'paymentMethodBrand'?: PaymentMethodBrand;

        /**
        * 
        */
    'primaryRiskTaker'?: PaymentPrimaryRiskTaker;

        /**
        * 
        */
    'processor'?: number;

        /**
        * 
        */
    'supportedCustomersPresences'?: Array<CustomersPresence>;

        /**
        * 
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
        "name": "feature",
        "baseName": "feature",
        "type": "Feature"
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
