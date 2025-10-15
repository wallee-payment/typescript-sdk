'use strict';
import { PaymentInformationHashType } from "./PaymentInformationHashType";


class PaymentInformationHash {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The type specifies the algorithm used for calculating the hash.
        */
    'type'?: PaymentInformationHashType;

        /**
        * The hash value generated based on the specified type.
        */
    'value'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "PaymentInformationHashType"
        },
        
        {
        "name": "value",
        "baseName": "value",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentInformationHash.attributeTypeMap;
    }
}

export { PaymentInformationHash }
