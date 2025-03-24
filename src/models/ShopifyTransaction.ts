'use strict';
import { ShopifyTransactionState } from "./ShopifyTransactionState";
import { ShopifyV1Integration } from "./ShopifyV1Integration";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ShopifyTransaction extends TransactionAwareEntity {

        /**
        * 
        */
    'checkoutId'?: string;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'draftOrderId'?: string;

        /**
        * 
        */
    'draftOrderLegacyId'?: string;

        /**
        * 
        */
    'integration'?: ShopifyV1Integration;

        /**
        * 
        */
    'orderLegacyId'?: string;

        /**
        * 
        */
    'orderName'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: ShopifyTransactionState;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "checkoutId",
        "baseName": "checkoutId",
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
        "name": "draftOrderLegacyId",
        "baseName": "draftOrderLegacyId",
        "type": "string"
        },
        
        {
        "name": "integration",
        "baseName": "integration",
        "type": "ShopifyV1Integration"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifyTransactionState"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifyTransaction.attributeTypeMap);
    }
}

export { ShopifyTransaction }
