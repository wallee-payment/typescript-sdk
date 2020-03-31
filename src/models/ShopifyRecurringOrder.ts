'use strict';
import { FailureReason } from "./FailureReason";
import { ShopifyRecurringOrderState } from "./ShopifyRecurringOrderState";
import { ShopifySubscriptionVersion } from "./ShopifySubscriptionVersion";
import { ShopifyTransaction } from "./ShopifyTransaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ShopifyRecurringOrder extends TransactionAwareEntity {

        /**
        * 
        */
    'billedOn'?: Date;

        /**
        * 
        */
    'checkoutToken'?: string;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * 
        */
    'orderId'?: string;

        /**
        * 
        */
    'orderName'?: string;

        /**
        * 
        */
    'plannedExecutionDate'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'recurrenceNumber'?: number;

        /**
        * 
        */
    'shop'?: number;

        /**
        * 
        */
    'startedProcessingOn'?: Date;

        /**
        * 
        */
    'state'?: ShopifyRecurringOrderState;

        /**
        * 
        */
    'subscriptionVersion'?: ShopifySubscriptionVersion;

        /**
        * 
        */
    'transaction'?: ShopifyTransaction;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billedOn",
        "baseName": "billedOn",
        "type": "Date"
        },
        
        {
        "name": "checkoutToken",
        "baseName": "checkoutToken",
        "type": "string"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
        },
        
        {
        "name": "orderId",
        "baseName": "orderId",
        "type": "string"
        },
        
        {
        "name": "orderName",
        "baseName": "orderName",
        "type": "string"
        },
        
        {
        "name": "plannedExecutionDate",
        "baseName": "plannedExecutionDate",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "recurrenceNumber",
        "baseName": "recurrenceNumber",
        "type": "number"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "startedProcessingOn",
        "baseName": "startedProcessingOn",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifyRecurringOrderState"
        },
        
        {
        "name": "subscriptionVersion",
        "baseName": "subscriptionVersion",
        "type": "ShopifySubscriptionVersion"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "ShopifyTransaction"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifyRecurringOrder.attributeTypeMap);
    }
}

export { ShopifyRecurringOrder }
