'use strict';
import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionProductPricingOption } from "./ShopifySubscriptionProductPricingOption";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";


class AbstractShopifySubscriptionProductUpdate {

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
        * 
        */
    'pricingOption'?: ShopifySubscriptionProductPricingOption;

        /**
        * 
        */
    'relativePriceAdjustment'?: number;

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
        "name": "pricingOption",
        "baseName": "pricingOption",
        "type": "ShopifySubscriptionProductPricingOption"
        },
        
        {
        "name": "relativePriceAdjustment",
        "baseName": "relativePriceAdjustment",
        "type": "number"
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
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractShopifySubscriptionProductUpdate.attributeTypeMap;
    }
}

export { AbstractShopifySubscriptionProductUpdate }
