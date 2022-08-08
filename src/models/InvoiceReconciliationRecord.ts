'use strict';
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { FailureReason } from "./FailureReason";
import { InvoiceReconciliationRecordRejectionStatus } from "./InvoiceReconciliationRecordRejectionStatus";
import { InvoiceReconciliationRecordState } from "./InvoiceReconciliationRecordState";
import { InvoiceReconciliationRecordType } from "./InvoiceReconciliationRecordType";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class InvoiceReconciliationRecord extends TransactionAwareEntity {

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
        * The created on date indicates the date on which the entity was stored into the database.
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
        * 
        */
    'lastResolutionFailure'?: FailureReason;

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
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
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
        * 
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
        "name": "lastResolutionFailure",
        "baseName": "lastResolutionFailure",
        "type": "FailureReason"
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
        return super.getAttributeTypeMap().concat(InvoiceReconciliationRecord.attributeTypeMap);
    }
}

export { InvoiceReconciliationRecord }
