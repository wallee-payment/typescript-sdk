'use strict';
import { CardCryptogram } from "./CardCryptogram";
import { RecurringIndicator } from "./RecurringIndicator";


class TokenizedCardData {

        /**
        * The additional authentication value used to secure the tokenized card transactions.
        */
    'cryptogram'?: CardCryptogram;

        /**
        * 
        */
    'recurringIndicator'?: RecurringIndicator;

        /**
        * 
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
