'use strict';


class PaymentConnectorFeature {

        /**
        * The name of the feature.
        */
    'displayName'?: string;

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
