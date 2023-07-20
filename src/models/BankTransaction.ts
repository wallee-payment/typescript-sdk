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
        * The date and time when the object was created.
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
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
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
        * The object's current state.
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
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
