'use strict';


class ShopifyTaxLine {

        /**
        * 
        */
    'fractionRate'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'rate'?: number;

        /**
        * 
        */
    'title'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "fractionRate",
        "baseName": "fractionRate",
        "type": "number"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifyTaxLine.attributeTypeMap;
    }
}

export { ShopifyTaxLine }
