'use strict';
import { ChargeFlowLevelConfiguration } from "./ChargeFlowLevelConfiguration";
import { ChargeFlowLevelState } from "./ChargeFlowLevelState";
import { Transaction } from "./Transaction";


class ChargeFlowLevel {

        /**
        * The charge to process the payment asynchronously.
        */
    'asynchronousCharge'?: number;

        /**
        * The configuration that was used for this charge flow level.
        */
    'configuration'?: ChargeFlowLevelConfiguration;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

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
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: ChargeFlowLevelState;

        /**
        * The charge to process the payment synchronously.
        */
    'synchronousCharge'?: number;

        /**
        * The date and time when the charge flow level will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The charge to process the payment using a token.
        */
    'tokenCharge'?: number;

        /**
        * The transaction that the charge flow level belongs to.
        */
    'transaction'?: Transaction;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "asynchronousCharge",
        "baseName": "asynchronousCharge",
        "type": "number"
        },
        
        {
        "name": "configuration",
        "baseName": "configuration",
        "type": "ChargeFlowLevelConfiguration"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ChargeFlowLevelState"
        },
        
        {
        "name": "synchronousCharge",
        "baseName": "synchronousCharge",
        "type": "number"
        },
        
        {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "tokenCharge",
        "baseName": "tokenCharge",
        "type": "number"
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
        return ChargeFlowLevel.attributeTypeMap;
    }
}

export { ChargeFlowLevel }
