'use strict';


class ShopifyTaxLine {

        /**
        * 
        */
    'fractionRate'?: number;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
