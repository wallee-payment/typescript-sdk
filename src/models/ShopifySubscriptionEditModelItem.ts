'use strict';
import { ShopifySubscriptionEditModelTaxLine } from "./ShopifySubscriptionEditModelTaxLine";


class ShopifySubscriptionEditModelItem {

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
    'taxLines'?: Array<ShopifySubscriptionEditModelTaxLine>;


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
        "type": "Array<ShopifySubscriptionEditModelTaxLine>"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionEditModelItem.attributeTypeMap;
    }
}

export { ShopifySubscriptionEditModelItem }
