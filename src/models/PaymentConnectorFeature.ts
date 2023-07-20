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
        * A unique identifier for the object.
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
