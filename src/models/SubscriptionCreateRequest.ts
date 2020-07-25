'use strict';
import { SubscriptionComponentReferenceConfiguration } from "./SubscriptionComponentReferenceConfiguration";
import { SubscriptionPending } from "./SubscriptionPending";
import { SubscriptionProductComponentReference } from "./SubscriptionProductComponentReference";


class SubscriptionCreateRequest {

        /**
        * 
        */
    'componentConfigurations'?: Array<SubscriptionComponentReferenceConfiguration>;

        /**
        * 
        */
    'currency': string;

        /**
        * The subscription has to be linked with a product.
        */
    'product': number;

        /**
        * 
        */
    'selectedComponents'?: Array<SubscriptionProductComponentReference>;

        /**
        * 
        */
    'subscription': SubscriptionPending;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "componentConfigurations",
        "baseName": "componentConfigurations",
        "type": "Array<SubscriptionComponentReferenceConfiguration>"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "product",
        "baseName": "product",
        "type": "number"
        },
        
        {
        "name": "selectedComponents",
        "baseName": "selectedComponents",
        "type": "Array<SubscriptionProductComponentReference>"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "SubscriptionPending"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionCreateRequest.attributeTypeMap;
    }
}

export { SubscriptionCreateRequest }
