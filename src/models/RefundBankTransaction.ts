'use strict';
import { BankTransaction } from "./BankTransaction";
import { Refund } from "./Refund";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class RefundBankTransaction extends TransactionAwareEntity {

        /**
        * 
        */
    'bankTransaction'?: BankTransaction;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * 
        */
    'refund'?: Refund;

        /**
        * Specify the posting amount in the refund's currency.
        */
    'refundCurrencyAmount'?: number;

        /**
        * 
        */
    'refundCurrencyValueAmount'?: number;

        /**
        * 
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
        "name": "language",
        "baseName": "language",
        "type": "string"
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
        return super.getAttributeTypeMap().concat(RefundBankTransaction.attributeTypeMap);
    }
}

export { RefundBankTransaction }
