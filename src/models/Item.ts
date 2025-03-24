'use strict';
import { TaxLine } from "./TaxLine";


class Item {

        /**
        * 
        */
    'priceIncludingTax'?: number;

        /**
        * 
        */
    'productId'?: number;

        /**
        * 
        */
    'quantity'?: number;

        /**
        * 
        */
    'recalculatePrice'?: boolean;

        /**
        * 
        */
    'taxLines'?: Array<TaxLine>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "priceIncludingTax",
        "baseName": "priceIncludingTax",
        "type": "number"
        },
        
        {
        "name": "productId",
        "baseName": "productId",
        "type": "number"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "recalculatePrice",
        "baseName": "recalculatePrice",
        "type": "boolean"
        },
        
        {
        "name": "taxLines",
        "baseName": "taxLines",
        "type": "Array<TaxLine>"
        }        
    ];

    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }
}

export { Item }
