'use strict';
import { BankTransaction } from "./BankTransaction";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ChargeBankTransaction extends TransactionAwareEntity {

        /**
        * 
        */
    'bankTransaction'?: BankTransaction;

        /**
        * 
        */
    'completion'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * Specify the posting amount in the transaction's currency.
        */
    'transactionCurrencyAmount'?: number;

        /**
        * 
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
        "name": "language",
        "baseName": "language",
        "type": "string"
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
        return super.getAttributeTypeMap().concat(ChargeBankTransaction.attributeTypeMap);
    }
}

export { ChargeBankTransaction }
