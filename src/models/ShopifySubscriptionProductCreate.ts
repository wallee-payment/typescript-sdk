'use strict';
import { AbstractShopifySubscriptionProductUpdate } from "./AbstractShopifySubscriptionProductUpdate";


class ShopifySubscriptionProductCreate extends AbstractShopifySubscriptionProductUpdate {

        /**
        * The ID of the Shopify product that is enabled to be ordered as subscription.
        */
    'productId'?: string;

        /**
        * The legacy ID of the Shopify product that is enabled to be ordered as subscription.
        */
    'productLegacyId': string;

        /**
        * 
        */
    'productVariantId'?: string;

        /**
        * 
        */
    'productVariantLegacyId': string;

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
        "name": "productLegacyId",
        "baseName": "productLegacyId",
        "type": "string"
        },
        
        {
        "name": "productVariantId",
        "baseName": "productVariantId",
        "type": "string"
        },
        
        {
        "name": "productVariantLegacyId",
        "baseName": "productVariantLegacyId",
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
