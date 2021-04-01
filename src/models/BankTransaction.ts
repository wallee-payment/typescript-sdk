'use strict';
import { BankTransactionFlowDirection } from "./BankTransactionFlowDirection";
import { BankTransactionState } from "./BankTransactionState";
import { CurrencyBankAccount } from "./CurrencyBankAccount";
import { PaymentAdjustment } from "./PaymentAdjustment";


class BankTransaction {

        /**
        * The adjustments applied on this bank transaction.
        */
    'adjustments'?: Array<PaymentAdjustment>;

        /**
        * The created by indicates the user which has created the bank transaction.
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The currency bank account which is used to handle money flow.
        */
    'currencyBankAccount'?: CurrencyBankAccount;

        /**
        * 
        */
    'externalId'?: string;

        /**
        * 
        */
    'flowDirection'?: BankTransactionFlowDirection;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The posting amount indicates the amount including adjustments.
        */
    'postingAmount'?: number;

        /**
        * 
        */
    'reference'?: string;

        /**
        * 
        */
    'source'?: number;

        /**
        * 
        */
    'state'?: BankTransactionState;

        /**
        * 
        */
    'totalAdjustmentAmountIncludingTax'?: number;

        /**
        * 
        */
    'type'?: number;

        /**
        * 
        */
    'valueAmount'?: number;

        /**
        * The value date describes the date the amount is effective on the account.
        */
    'valueDate'?: Date;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "adjustments",
        "baseName": "adjustments",
        "type": "Array<PaymentAdjustment>"
        },
        
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
        "name": "currencyBankAccount",
        "baseName": "currencyBankAccount",
        "type": "CurrencyBankAccount"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "flowDirection",
        "baseName": "flowDirection",
        "type": "BankTransactionFlowDirection"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "postingAmount",
        "baseName": "postingAmount",
        "type": "number"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "source",
        "baseName": "source",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "BankTransactionState"
        },
        
        {
        "name": "totalAdjustmentAmountIncludingTax",
        "baseName": "totalAdjustmentAmountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        },
        
        {
        "name": "valueAmount",
        "baseName": "valueAmount",
        "type": "number"
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
        return BankTransaction.attributeTypeMap;
    }
}

export { BankTransaction }
