'use strict';
import { ShopifySubscriptionModelTaxLine } from "./ShopifySubscriptionModelTaxLine";


class ShopifySubscriptionModelItem {

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
    'taxLines'?: Array<ShopifySubscriptionModelTaxLine>;


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
        "type": "Array<ShopifySubscriptionModelTaxLine>"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionModelItem.attributeTypeMap;
    }
}

export { ShopifySubscriptionModelItem }
