'use strict';
import { FailureReason } from "./FailureReason";
import { ShopifyRecurringOrderState } from "./ShopifyRecurringOrderState";
import { ShopifySubscriptionVersion } from "./ShopifySubscriptionVersion";
import { ShopifyTransaction } from "./ShopifyTransaction";


class ShopifyRecurringOrder {

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
    'draftOrderId'?: string;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * 
        */
    'orderId'?: string;

        /**
        * 
        */
    'orderLegacyId'?: string;

        /**
        * 
        */
    'orderName'?: string;

        /**
        * 
        */
    'plannedExecutionDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
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
        * The object's current state.
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
        "name": "draftOrderId",
        "baseName": "draftOrderId",
        "type": "string"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
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
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "orderId",
        "baseName": "orderId",
        "type": "string"
        },
        
        {
        "name": "orderLegacyId",
        "baseName": "orderLegacyId",
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
        return ShopifyRecurringOrder.attributeTypeMap;
    }
}

export { ShopifyRecurringOrder }
