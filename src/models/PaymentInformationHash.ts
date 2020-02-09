'use strict';
import { PaymentInformationHashType } from "./PaymentInformationHashType";


class PaymentInformationHash {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'type'?: PaymentInformationHashType;

        /**
        * 
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
