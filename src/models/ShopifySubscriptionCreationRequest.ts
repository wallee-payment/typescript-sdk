'use strict';
import { BillingConfiguration } from "./BillingConfiguration";
import { Item } from "./Item";
import { ShopifySubscriberCreation } from "./ShopifySubscriberCreation";
import { ShopifySubscriptionAddressCreate } from "./ShopifySubscriptionAddressCreate";


class ShopifySubscriptionCreationRequest {

        /**
        * 
        */
    'billingAddress': ShopifySubscriptionAddressCreate;

        /**
        * 
        */
    'billingConfiguration'?: BillingConfiguration;

        /**
        * 
        */
    'currency': string;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * 
        */
    'initialExecutionDate'?: Date;

        /**
        * 
        */
    'integration': number;

        /**
        * 
        */
    'items': Array<Item>;

        /**
        * 
        */
    'language': string;

        /**
        * 
        */
    'shippingAddress': ShopifySubscriptionAddressCreate;

        /**
        * 
        */
    'shippingMethodName'?: string;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'storeOrderConfirmationEmailEnabled'?: boolean;

        /**
        * 
        */
    'subscriber': ShopifySubscriberCreation;

        /**
        * 
        */
    'subscriberSuspensionAllowed'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddressCreate"
        },
        
        {
        "name": "billingConfiguration",
        "baseName": "billingConfiguration",
        "type": "BillingConfiguration"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "initialExecutionDate",
        "baseName": "initialExecutionDate",
        "type": "Date"
        },
        
        {
        "name": "integration",
        "baseName": "integration",
        "type": "number"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<Item>"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddressCreate"
        },
        
        {
        "name": "shippingMethodName",
        "baseName": "shippingMethodName",
        "type": "string"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "storeOrderConfirmationEmailEnabled",
        "baseName": "storeOrderConfirmationEmailEnabled",
        "type": "boolean"
        },
        
        {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "ShopifySubscriberCreation"
        },
        
        {
        "name": "subscriberSuspensionAllowed",
        "baseName": "subscriberSuspensionAllowed",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionCreationRequest.attributeTypeMap;
    }
}

export { ShopifySubscriptionCreationRequest }
