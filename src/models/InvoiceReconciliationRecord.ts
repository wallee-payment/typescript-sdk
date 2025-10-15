'use strict';
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { FailureReason } from "./FailureReason";
import { InvoiceReconciliationRecordRejectionStatus } from "./InvoiceReconciliationRecordRejectionStatus";
import { InvoiceReconciliationRecordState } from "./InvoiceReconciliationRecordState";
import { InvoiceReconciliationRecordType } from "./InvoiceReconciliationRecordType";


class InvoiceReconciliationRecord {

        /**
        * 
        */
    'address'?: string;

        /**
        * 
        */
    'amount'?: number;

        /**
        * 
        */
    'city'?: string;

        /**
        * 
        */
    'country'?: string;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'currency'?: string;

        /**
        * 
        */
    'discardedBy'?: number;

        /**
        * The discarded on date indicates when the bank transaction has been discarded.
        */
    'discardedOn'?: Date;

        /**
        * 
        */
    'environment'?: ChargeAttemptEnvironment;

        /**
        * 
        */
    'familyName'?: string;

        /**
        * 
        */
    'givenName'?: string;

        /**
        * 
        */
    'iban'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'lastResolutionFailure'?: FailureReason;

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
    'participantNumber'?: string;

        /**
        * 
        */
    'paymentFeeAmount'?: number;

        /**
        * 
        */
    'paymentFeeCurrency'?: string;

        /**
        * 
        */
    'paymentReason'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'postCode'?: string;

        /**
        * 
        */
    'referenceNumber'?: string;

        /**
        * 
        */
    'rejectionStatus'?: InvoiceReconciliationRecordRejectionStatus;

        /**
        * 
        */
    'resolvedBy'?: number;

        /**
        * The resolved on date indicates when the bank transaction has been resolved.
        */
    'resolvedOn'?: Date;

        /**
        * 
        */
    'senderBankAccount'?: string;

        /**
        * The object's current state.
        */
    'state'?: InvoiceReconciliationRecordState;

        /**
        * 
        */
    'street'?: string;

        /**
        * 
        */
    'type'?: InvoiceReconciliationRecordType;

        /**
        * 
        */
    'uniqueId'?: string;

        /**
        * 
        */
    'valueDate'?: Date;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "address",
        "baseName": "address",
        "type": "string"
        },
        
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "city",
        "baseName": "city",
        "type": "string"
        },
        
        {
        "name": "country",
        "baseName": "country",
        "type": "string"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "discardedBy",
        "baseName": "discardedBy",
        "type": "number"
        },
        
        {
        "name": "discardedOn",
        "baseName": "discardedOn",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
        },
        
        {
        "name": "familyName",
        "baseName": "familyName",
        "type": "string"
        },
        
        {
        "name": "givenName",
        "baseName": "givenName",
        "type": "string"
        },
        
        {
        "name": "iban",
        "baseName": "iban",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "lastResolutionFailure",
        "baseName": "lastResolutionFailure",
        "type": "FailureReason"
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
        "name": "participantNumber",
        "baseName": "participantNumber",
        "type": "string"
        },
        
        {
        "name": "paymentFeeAmount",
        "baseName": "paymentFeeAmount",
        "type": "number"
        },
        
        {
        "name": "paymentFeeCurrency",
        "baseName": "paymentFeeCurrency",
        "type": "string"
        },
        
        {
        "name": "paymentReason",
        "baseName": "paymentReason",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "postCode",
        "baseName": "postCode",
        "type": "string"
        },
        
        {
        "name": "referenceNumber",
        "baseName": "referenceNumber",
        "type": "string"
        },
        
        {
        "name": "rejectionStatus",
        "baseName": "rejectionStatus",
        "type": "InvoiceReconciliationRecordRejectionStatus"
        },
        
        {
        "name": "resolvedBy",
        "baseName": "resolvedBy",
        "type": "number"
        },
        
        {
        "name": "resolvedOn",
        "baseName": "resolvedOn",
        "type": "Date"
        },
        
        {
        "name": "senderBankAccount",
        "baseName": "senderBankAccount",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "InvoiceReconciliationRecordState"
        },
        
        {
        "name": "street",
        "baseName": "street",
        "type": "string"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "InvoiceReconciliationRecordType"
        },
        
        {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
        },
        
        {
        "name": "valueDate",
        "baseName": "valueDate",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return InvoiceReconciliationRecord.attributeTypeMap;
    }
}

export { InvoiceReconciliationRecord }
