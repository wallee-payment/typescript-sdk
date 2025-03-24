'use strict';
import { BillingConfiguration } from "./BillingConfiguration";
import { Item } from "./Item";


class ShopifySubscriptionUpdateRequest {

        /**
        * 
        */
    'billingConfiguration'?: BillingConfiguration;

        /**
        * 
        */
    'id'?: number;

        /**
        * 
        */
    'items'?: Array<Item>;

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
        "type": "BillingConfiguration"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<Item>"
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
