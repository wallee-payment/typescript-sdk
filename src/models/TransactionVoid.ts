'use strict';
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { Transaction } from "./Transaction";
import { TransactionVoidMode } from "./TransactionVoidMode";
import { TransactionVoidState } from "./TransactionVoidState";


class TransactionVoid {

        /**
        * The ID of the user the transaction void was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time when the transaction void failed.
        */
    'failedOn'?: Date;

        /**
        * The reason for the failure of the transaction void.
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The labels providing additional information about the object.
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The mode of transaction void, such as online or offline, determining how the void process is executed.
        */
    'mode'?: TransactionVoidMode;

        /**
        * The date and time when the next update of the object's state is planned.
        */
    'nextUpdateOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The reference ID provided by the payment processor, used to trace the void through the external payment system.
        */
    'processorReference'?: string;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: TransactionVoidState;

        /**
        * The date and time when the transaction void succeeded.
        */
    'succeededOn'?: Date;

        /**
        * The date and time when the object will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The transaction that the void belongs to.
        */
    'transaction'?: Transaction;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "id",
        "baseName": "id",
        "type": "number"
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
        return TransactionVoid.attributeTypeMap;
    }
}

export { TransactionVoid }
