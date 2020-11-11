'use strict';
import { ShopifySubscriptionModelBillingConfiguration } from "./ShopifySubscriptionModelBillingConfiguration";
import { ShopifySubscriptionModelItem } from "./ShopifySubscriptionModelItem";


class ShopifySubscriptionUpdateRequest {

        /**
        * 
        */
    'billingConfiguration'?: ShopifySubscriptionModelBillingConfiguration;

        /**
        * 
        */
    'id'?: number;

        /**
        * 
        */
    'items'?: Array<ShopifySubscriptionModelItem>;

        /**
        * 
        */
    'storeOrderConfirmationEmailEnabled'?: boolean;

        /**
        * 
        */
    'subscriberSuspensionAllowed'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingConfiguration",
        "baseName": "billingConfiguration",
        "type": "ShopifySubscriptionModelBillingConfiguration"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<ShopifySubscriptionModelItem>"
        },
        
        {
        "name": "storeOrderConfirmationEmailEnabled",
        "baseName": "storeOrderConfirmationEmailEnabled",
        "type": "boolean"
        },
        
        {
        "name": "subscriberSuspensionAllowed",
        "baseName": "subscriberSuspensionAllowed",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionUpdateRequest.attributeTypeMap;
    }
}

export { ShopifySubscriptionUpdateRequest }
