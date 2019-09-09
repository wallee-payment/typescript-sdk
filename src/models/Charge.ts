'use strict';
import { ChargeState } from "./ChargeState";
import { ChargeType } from "./ChargeType";
import { FailureReason } from "./FailureReason";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class Charge extends TransactionAwareEntity {

        /**
        * The date on which the charge was created on.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * 
        */
    'language'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'state'?: ChargeState;

        /**
        * 
        */
    'timeZone'?: string;

        /**
        * 
        */
    'timeoutOn'?: Date;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * 
        */
    'type'?: ChargeType;

        /**
        * The failure message describes for an end user why the charge is failed in the language of the user. This is only provided when the charge is marked as failed.
        */
    'userFailureMessage'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ChargeState"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
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
        "name": "type",
        "baseName": "type",
        "type": "ChargeType"
        },
        
        {
        "name": "userFailureMessage",
        "baseName": "userFailureMessage",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Charge.attributeTypeMap);
    }
}

export { Charge }
