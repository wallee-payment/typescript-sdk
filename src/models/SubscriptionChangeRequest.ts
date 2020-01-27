'use strict';
import { SubscriptionComponentReferenceConfiguration } from "./SubscriptionComponentReferenceConfiguration";
import { SubscriptionProductComponentReference } from "./SubscriptionProductComponentReference";


class SubscriptionChangeRequest {

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
        * The subscription version may be retired. The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
        */
    'respectTerminationPeriod'?: boolean;

        /**
        * 
        */
    'selectedComponents'?: Array<SubscriptionProductComponentReference>;

        /**
        * 
        */
    'subscription': number;


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
        "name": "respectTerminationPeriod",
        "baseName": "respectTerminationPeriod",
        "type": "boolean"
        },
        
        {
        "name": "selectedComponents",
        "baseName": "selectedComponents",
        "type": "Array<SubscriptionProductComponentReference>"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionChangeRequest.attributeTypeMap;
    }
}

export { SubscriptionChangeRequest }
