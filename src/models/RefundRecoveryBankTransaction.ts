'use strict';
import { BankTransaction } from "./BankTransaction";
import { LineItem } from "./LineItem";
import { Refund } from "./Refund";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class RefundRecoveryBankTransaction extends TransactionAwareEntity {

        /**
        * 
        */
    'bankTransaction'?: BankTransaction;

        /**
        * 
        */
    'language'?: string;

        /**
        * The line items contain the items which could be recovered.
        */
    'lineItems'?: Array<LineItem>;

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
        return super.getAttributeTypeMap().concat(RefundRecoveryBankTransaction.attributeTypeMap);
    }
}

export { RefundRecoveryBankTransaction }
