'use strict';
import { Feature } from "./Feature";


class PaymentContractType {

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


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentContractType.attributeTypeMap;
    }
}

export { PaymentContractType }
