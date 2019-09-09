'use strict';
import { DataCollectionType } from "./DataCollectionType";


class PaymentMethod {

        /**
        * 
        */
    'dataCollectionTypes'?: Array<DataCollectionType>;

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'imagePath'?: string;

        /**
        * 
        */
    'merchantDescription'?: { [key: string]: string; };

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'supportedCurrencies'?: Array<string>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "dataCollectionTypes",
        "baseName": "dataCollectionTypes",
        "type": "Array<DataCollectionType>"
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
        "name": "imagePath",
        "baseName": "imagePath",
        "type": "string"
        },
        
        {
        "name": "merchantDescription",
        "baseName": "merchantDescription",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "supportedCurrencies",
        "baseName": "supportedCurrencies",
        "type": "Array<string>"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

export { PaymentMethod }
