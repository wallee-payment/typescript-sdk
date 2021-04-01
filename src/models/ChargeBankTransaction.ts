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
        * 
        */
    'language'?: string;

        /**
        * 
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
