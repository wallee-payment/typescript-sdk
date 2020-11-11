'use strict';
import { ShopifySubscriptionAddressCreate } from "./ShopifySubscriptionAddressCreate";


class ShopifySubscriptionUpdateAddressesRequest {

        /**
        * 
        */
    'billingAddress'?: ShopifySubscriptionAddressCreate;

        /**
        * 
        */
    'id'?: number;

        /**
        * 
        */
    'shippingAddress'?: ShopifySubscriptionAddressCreate;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddressCreate"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddressCreate"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionUpdateAddressesRequest.attributeTypeMap;
    }
}

export { ShopifySubscriptionUpdateAddressesRequest }
