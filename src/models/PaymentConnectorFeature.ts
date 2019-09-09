'use strict';
import { Feature } from "./Feature";


class PaymentConnectorFeature {

        /**
        * 
        */
    'displayName'?: string;

        /**
        * 
        */
    'feature'?: Feature;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
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
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentConnectorFeature.attributeTypeMap;
    }
}

export { PaymentConnectorFeature }
