'use strict';
import { ShopifySubscriberCreation } from "./ShopifySubscriberCreation";
import { ShopifySubscriptionAddressCreate } from "./ShopifySubscriptionAddressCreate";
import { ShopifySubscriptionModelBillingConfiguration } from "./ShopifySubscriptionModelBillingConfiguration";
import { ShopifySubscriptionModelItem } from "./ShopifySubscriptionModelItem";


class ShopifySubscriptionCreationRequest {

        /**
        * 
        */
    'billingAddress': ShopifySubscriptionAddressCreate;

        /**
        * 
        */
    'billingConfiguration'?: ShopifySubscriptionModelBillingConfiguration;

        /**
        * 
        */
    'currency': string;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
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
    'items': Array<ShopifySubscriptionModelItem>;

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
        "type": "ShopifySubscriptionModelBillingConfiguration"
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
        "type": "Array<ShopifySubscriptionModelItem>"
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
