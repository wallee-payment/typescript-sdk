'use strict';
import { ChargeFlowLevelConfiguration } from "./ChargeFlowLevelConfiguration";
import { ChargeFlowLevelState } from "./ChargeFlowLevelState";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ChargeFlowLevel extends TransactionAwareEntity {

        /**
        * 
        */
    'asynchronousCharge'?: number;

        /**
        * 
        */
    'configuration'?: ChargeFlowLevelConfiguration;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: ChargeFlowLevelState;

        /**
        * 
        */
    'synchronousCharge'?: number;

        /**
        * 
        */
    'timeoutOn'?: Date;

        /**
        * 
        */
    'tokenCharge'?: number;

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
        return super.getAttributeTypeMap().concat(ChargeFlowLevel.attributeTypeMap);
    }
}

export { ChargeFlowLevel }
