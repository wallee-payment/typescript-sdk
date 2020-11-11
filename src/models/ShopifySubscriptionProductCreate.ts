'use strict';
import { AbstractShopifySubscriptionProductUpdate } from "./AbstractShopifySubscriptionProductUpdate";


class ShopifySubscriptionProductCreate extends AbstractShopifySubscriptionProductUpdate {

        /**
        * The ID of the Shopify product that is enabled to be ordered as subscription.
        */
    'productId': string;

        /**
        * 
        */
    'productVariantId': string;

        /**
        * 
        */
    'shop': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
        },
        
        {
        "name": "productVariantId",
        "baseName": "productVariantId",
        "type": "string"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifySubscriptionProductCreate.attributeTypeMap);
    }
}

export { ShopifySubscriptionProductCreate }
