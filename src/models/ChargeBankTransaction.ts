'use strict';
import { BankTransaction } from "./BankTransaction";
import { Transaction } from "./Transaction";


class ChargeBankTransaction {

        /**
        * Provides general information about the bank transaction.
        */
    'bankTransaction'?: BankTransaction;

        /**
        * The transaction completion this bank transaction is belongs to.
        */
    'completion'?: number;

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
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The payment transaction this bank transaction belongs to.
        */
    'transaction'?: Transaction;

        /**
        * The posting amount represents the monetary value of the bank transaction, recorded in the payment transaction's currency, before applying any adjustments.
        */
    'transactionCurrencyAmount'?: number;

        /**
        * The value amount represents the net monetary value of the bank transaction, recorded in the payment transaction's currency, after applicable deductions.
        */
    'transactionCurrencyValueAmount'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "bankTransaction",
        "baseName": "bankTransaction",
        "type": "BankTransaction"
        },
        
        {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
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
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        },
        
        {
        "name": "transactionCurrencyAmount",
        "baseName": "transactionCurrencyAmount",
        "type": "number"
        },
        
        {
        "name": "transactionCurrencyValueAmount",
        "baseName": "transactionCurrencyValueAmount",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ChargeBankTransaction.attributeTypeMap;
    }
}

export { ChargeBankTransaction }
