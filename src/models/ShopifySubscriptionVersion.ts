'use strict';
import { ShopifySubscription } from "./ShopifySubscription";
import { ShopifySubscriptionAddress } from "./ShopifySubscriptionAddress";
import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionVersionItem } from "./ShopifySubscriptionVersionItem";
import { ShopifySubscriptionVersionState } from "./ShopifySubscriptionVersionState";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";


class ShopifySubscriptionVersion {

        /**
        * 
        */
    'billingAddress'?: ShopifySubscriptionAddress;

        /**
        * 
        */
    'billingDayOfMonth'?: number;

        /**
        * 
        */
    'billingIntervalAmount'?: number;

        /**
        * 
        */
    'billingIntervalUnit'?: ShopifySubscriptionBillingIntervalUnit;

        /**
        * 
        */
    'billingReferenceDate'?: Date;

        /**
        * 
        */
    'billingWeekday'?: ShopifySubscriptionWeekday;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'currency'?: string;

        /**
        * 
        */
    'dischargedBy'?: number;

        /**
        * 
        */
    'dischargedOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'items'?: Array<ShopifySubscriptionVersionItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'maximalBillingCycles'?: number;

        /**
        * 
        */
    'maximalSuspendableCycles'?: number;

        /**
        * 
        */
    'minimalBillingCycles'?: number;

        /**
        * 
        */
    'paymentGateway'?: string;

        /**
        * 
        */
    'shippingAddress'?: ShopifySubscriptionAddress;

        /**
        * 
        */
    'shippingRate'?: string;

        /**
        * 
        */
    'shop'?: number;

        /**
        * The object's current state.
        */
    'state'?: ShopifySubscriptionVersionState;

        /**
        * 
        */
    'storeOrderConfirmationEmailEnabled'?: boolean;

        /**
        * 
        */
    'subscriberSuspensionAllowed'?: boolean;

        /**
        * 
        */
    'subscription'?: ShopifySubscription;

        /**
        * 
        */
    'terminationBillingCycles'?: number;

        /**
        * 
        */
    'token'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddress"
        },
        
        {
        "name": "billingDayOfMonth",
        "baseName": "billingDayOfMonth",
        "type": "number"
        },
        
        {
        "name": "billingIntervalAmount",
        "baseName": "billingIntervalAmount",
        "type": "number"
        },
        
        {
        "name": "billingIntervalUnit",
        "baseName": "billingIntervalUnit",
        "type": "ShopifySubscriptionBillingIntervalUnit"
        },
        
        {
        "name": "billingReferenceDate",
        "baseName": "billingReferenceDate",
        "type": "Date"
        },
        
        {
        "name": "billingWeekday",
        "baseName": "billingWeekday",
        "type": "ShopifySubscriptionWeekday"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "dischargedBy",
        "baseName": "dischargedBy",
        "type": "number"
        },
        
        {
        "name": "dischargedOn",
        "baseName": "dischargedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<ShopifySubscriptionVersionItem>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "maximalBillingCycles",
        "baseName": "maximalBillingCycles",
        "type": "number"
        },
        
        {
        "name": "maximalSuspendableCycles",
        "baseName": "maximalSuspendableCycles",
        "type": "number"
        },
        
        {
        "name": "minimalBillingCycles",
        "baseName": "minimalBillingCycles",
        "type": "number"
        },
        
        {
        "name": "paymentGateway",
        "baseName": "paymentGateway",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddress"
        },
        
        {
        "name": "shippingRate",
        "baseName": "shippingRate",
        "type": "string"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriptionVersionState"
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
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "ShopifySubscription"
        },
        
        {
        "name": "terminationBillingCycles",
        "baseName": "terminationBillingCycles",
        "type": "number"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionVersion.attributeTypeMap;
    }
}

export { ShopifySubscriptionVersion }
