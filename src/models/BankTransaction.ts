'use strict';
import { BankTransactionFlowDirection } from "./BankTransactionFlowDirection";
import { BankTransactionState } from "./BankTransactionState";
import { CurrencyBankAccount } from "./CurrencyBankAccount";
import { PaymentAdjustment } from "./PaymentAdjustment";


class BankTransaction {

        /**
        * Adjustments are changes made to the initial transaction amount, such as fees or corrections.
        */
    'adjustments'?: Array<PaymentAdjustment>;

        /**
        * The ID of the user the bank transaction was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The currency bank account that sends or receives money based on the bank transaction's flow direction.
        */
    'currencyBankAccount'?: CurrencyBankAccount;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * Indicates the direction of a bank transaction, specifying whether the amount flows into or out of the bank account.
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
        * The payment date specifies the date on which the payment was processed.
        */
    'paymentDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The posting amount refers to the monetary value recorded for the bank transaction prior to any adjustments.
        */
    'postingAmount'?: number;

        /**
        * A unique reference to identify the bank transaction.
        */
    'reference'?: string;

        /**
        * The source indicates how the bank transaction was created.
        */
    'source'?: number;

        /**
        * The object's current state.
        */
    'state'?: BankTransactionState;

        /**
        * Represents the total value of all adjustments to the bank transaction, including tax.
        */
    'totalAdjustmentAmountIncludingTax'?: number;

        /**
        * The bank transaction's type.
        */
    'type'?: number;

        /**
        * The value amount represents the net monetary value of the transaction after applicable deductions.
        */
    'valueAmount'?: number;

        /**
        * The value date indicates the date on which the transaction amount becomes effective.
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
        "name": "paymentDate",
        "baseName": "paymentDate",
        "type": "Date"
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
