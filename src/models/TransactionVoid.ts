'use strict';
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionVoidMode } from "./TransactionVoidMode";
import { TransactionVoidState } from "./TransactionVoidState";


class TransactionVoid extends TransactionAwareEntity {

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * 
        */
    'language'?: string;

        /**
        * 
        */
    'mode'?: TransactionVoidMode;

        /**
        * 
        */
    'nextUpdateOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'processorReference'?: string;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'state'?: TransactionVoidState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * 
        */
    'timeoutOn'?: Date;

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
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
        },
        
        {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "mode",
        "baseName": "mode",
        "type": "TransactionVoidMode"
        },
        
        {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processorReference",
        "baseName": "processorReference",
        "type": "string"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "TransactionVoidState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
        },
        
        {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
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
        return super.getAttributeTypeMap().concat(TransactionVoid.attributeTypeMap);
    }
}

export { TransactionVoid }
