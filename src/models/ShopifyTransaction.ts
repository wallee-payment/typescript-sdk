'use strict';
import { ShopifyIntegration } from "./ShopifyIntegration";
import { ShopifyTransactionState } from "./ShopifyTransactionState";
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
    'integration'?: ShopifyIntegration;

        /**
        * 
        */
    'orderId'?: string;

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
        "name": "integration",
        "baseName": "integration",
        "type": "ShopifyIntegration"
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
