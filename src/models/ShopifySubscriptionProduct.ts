'use strict';
import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionProductPricingOption } from "./ShopifySubscriptionProductPricingOption";
import { ShopifySubscriptionProductState } from "./ShopifySubscriptionProductState";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";


class ShopifySubscriptionProduct {

        /**
        * 
        */
    'absolutePriceAdjustment'?: number;

        /**
        * Define the day of the month on which the recurring orders should be created.
        */
    'billingDayOfMonth'?: number;

        /**
        * 
        */
    'billingIntervalAmount'?: number;

        /**
        * Define how frequently recurring orders should be created.
        */
    'billingIntervalUnit'?: ShopifySubscriptionBillingIntervalUnit;

        /**
        * Define the weekday on which the recurring orders should be created.
        */
    'billingWeekday'?: ShopifySubscriptionWeekday;

        /**
        * 
        */
    'fixedPrice'?: number;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * Define the maximum number of orders the subscription will run for.
        */
    'maximalBillingCycles'?: number;

        /**
        * Define the maximum number of orders the subscription can be suspended for at a time.
        */
    'maximalSuspendableCycles'?: number;

        /**
        * Define the minimal number of orders the subscription will run for.
        */
    'minimalBillingCycles'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'pricingOption'?: ShopifySubscriptionProductPricingOption;

        /**
        * The ID of the Shopify product that is enabled to be ordered as subscription.
        */
    'productId'?: string;

        /**
        * 
        */
    'productName'?: string;

        /**
        * 
        */
    'productPrice'?: number;

        /**
        * 
        */
    'productSku'?: string;

        /**
        * 
        */
    'productVariantId'?: string;

        /**
        * 
        */
    'productVariantName'?: string;

        /**
        * 
        */
    'relativePriceAdjustment'?: number;

        /**
        * 
        */
    'shippingRequired'?: boolean;

        /**
        * 
        */
    'shop'?: number;

        /**
        * 
        */
    'state'?: ShopifySubscriptionProductState;

        /**
        * 
        */
    'stockCheckRequired'?: boolean;

        /**
        * Define whether the order confirmation email of the Shopify shop is sent to the customer for recurring orders.
        */
    'storeOrderConfirmationEmailEnabled'?: boolean;

        /**
        * Define whether the customer is allowed to suspend subscriptions.
        */
    'subscriberSuspensionAllowed'?: boolean;

        /**
        * Define the number of orders the subscription will keep running for after its termination has been requested.
        */
    'terminationBillingCycles'?: number;

        /**
        * 
        */
    'updatedAt'?: Date;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "absolutePriceAdjustment",
        "baseName": "absolutePriceAdjustment",
        "type": "number"
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
        "name": "billingWeekday",
        "baseName": "billingWeekday",
        "type": "ShopifySubscriptionWeekday"
        },
        
        {
        "name": "fixedPrice",
        "baseName": "fixedPrice",
        "type": "number"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "pricingOption",
        "baseName": "pricingOption",
        "type": "ShopifySubscriptionProductPricingOption"
        },
        
        {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
        },
        
        {
        "name": "productName",
        "baseName": "productName",
        "type": "string"
        },
        
        {
        "name": "productPrice",
        "baseName": "productPrice",
        "type": "number"
        },
        
        {
        "name": "productSku",
        "baseName": "productSku",
        "type": "string"
        },
        
        {
        "name": "productVariantId",
        "baseName": "productVariantId",
        "type": "string"
        },
        
        {
        "name": "productVariantName",
        "baseName": "productVariantName",
        "type": "string"
        },
        
        {
        "name": "relativePriceAdjustment",
        "baseName": "relativePriceAdjustment",
        "type": "number"
        },
        
        {
        "name": "shippingRequired",
        "baseName": "shippingRequired",
        "type": "boolean"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriptionProductState"
        },
        
        {
        "name": "stockCheckRequired",
        "baseName": "stockCheckRequired",
        "type": "boolean"
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
        "name": "terminationBillingCycles",
        "baseName": "terminationBillingCycles",
        "type": "number"
        },
        
        {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionProduct.attributeTypeMap;
    }
}

export { ShopifySubscriptionProduct }
