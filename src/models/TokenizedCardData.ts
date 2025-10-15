'use strict';
import { CardCryptogram } from "./CardCryptogram";
import { RecurringIndicator } from "./RecurringIndicator";


class TokenizedCardData {

        /**
        * An additional authentication value that enhances the security of tokenized card transactions.
        */
    'cryptogram'?: CardCryptogram;

        /**
        * Whether the transaction is an initial recurring transaction, based on the recurring indicator. This is used to identify the first transaction in a recurring payment setup.
        */
    'initialRecurringTransaction'?: boolean;

        /**
        * The indicator used to distinguish between recurring and one-time transactions. If omitted, it will be automatically determined based on the transaction's properties.
        */
    'recurringIndicator'?: RecurringIndicator;

        /**
        * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
        */
    'tokenRequestorId'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "cryptogram",
        "baseName": "cryptogram",
        "type": "CardCryptogram"
        },
        
        {
        "name": "initialRecurringTransaction",
        "baseName": "initialRecurringTransaction",
        "type": "boolean"
        },
        
        {
        "name": "recurringIndicator",
        "baseName": "recurringIndicator",
        "type": "RecurringIndicator"
        },
        
        {
        "name": "tokenRequestorId",
        "baseName": "tokenRequestorId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return TokenizedCardData.attributeTypeMap;
    }
}

export { TokenizedCardData }
