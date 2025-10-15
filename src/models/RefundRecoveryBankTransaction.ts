'use strict';
import { BankTransaction } from "./BankTransaction";
import { LineItem } from "./LineItem";
import { Refund } from "./Refund";


class RefundRecoveryBankTransaction {

        /**
        * Provides general information about the bank transaction.
        */
    'bankTransaction'?: BankTransaction;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The line items that were recovered.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The refund this bank transaction belongs to.
        */
    'refund'?: Refund;

        /**
        * The posting amount represents the monetary value of the bank transaction, recorded in the refund's currency, before applying any adjustments.
        */
    'refundCurrencyAmount'?: number;

        /**
        * The value amount represents the net monetary value of the bank transaction, recorded in the refund's currency, after applicable deductions.
        */
    'refundCurrencyValueAmount'?: number;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

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
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
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
        "name": "refund",
        "baseName": "refund",
        "type": "Refund"
        },
        
        {
        "name": "refundCurrencyAmount",
        "baseName": "refundCurrencyAmount",
        "type": "number"
        },
        
        {
        "name": "refundCurrencyValueAmount",
        "baseName": "refundCurrencyValueAmount",
        "type": "number"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return RefundRecoveryBankTransaction.attributeTypeMap;
    }
}

export { RefundRecoveryBankTransaction }
