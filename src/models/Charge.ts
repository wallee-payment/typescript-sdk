'use strict';
import { ChargeState } from "./ChargeState";
import { ChargeType } from "./ChargeType";
import { FailureReason } from "./FailureReason";
import { Transaction } from "./Transaction";


class Charge {

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The reason for the failure of the charge.
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: ChargeState;

        /**
        * The time zone that this object is associated with.
        */
    'timeZone'?: string;

        /**
        * The date and time when the charge will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The transaction that the charge belongs to.
        */
    'transaction'?: Transaction;

        /**
        * The type specifying how the customer was charged.
        */
    'type'?: ChargeType;

        /**
        * The message that can be displayed to the customer explaining why the charge failed, in the customer's language.
        */
    'userFailureMessage'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
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
        return Charge.attributeTypeMap;
    }
}

export { Charge }
