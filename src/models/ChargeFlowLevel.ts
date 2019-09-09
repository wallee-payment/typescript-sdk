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
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
