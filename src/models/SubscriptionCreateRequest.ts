'use strict';
import { SubscriptionProductComponentReference } from "./SubscriptionProductComponentReference";


class SubscriptionCreateRequest {

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
    'subscription': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionCreateRequest.attributeTypeMap;
    }
}

export { SubscriptionCreateRequest }