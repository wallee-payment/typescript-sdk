'use strict';
import { ShopifySubscriptionVersionItemPriceStrategy } from "./ShopifySubscriptionVersionItemPriceStrategy";
import { ShopifyTaxLine } from "./ShopifyTaxLine";


class ShopifySubscriptionVersionItem {

        /**
        * 
        */
    'priceIncludingTax'?: number;

        /**
        * 
        */
    'priceStrategy'?: ShopifySubscriptionVersionItemPriceStrategy;

        /**
        * 
        */
    'product'?: number;

        /**
        * 
        */
    'quantity'?: number;

        /**
        * 
        */
    'taxLines'?: Array<ShopifyTaxLine>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "priceIncludingTax",
        "baseName": "priceIncludingTax",
        "type": "number"
        },
        
        {
        "name": "priceStrategy",
        "baseName": "priceStrategy",
        "type": "ShopifySubscriptionVersionItemPriceStrategy"
        },
        
        {
        "name": "product",
        "baseName": "product",
        "type": "number"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "taxLines",
        "baseName": "taxLines",
        "type": "Array<ShopifyTaxLine>"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionVersionItem.attributeTypeMap;
    }
}

export { ShopifySubscriptionVersionItem }
