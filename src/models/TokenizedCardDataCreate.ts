'use strict';
import { CardCryptogramCreate } from "./CardCryptogramCreate";
import { PanType } from "./PanType";
import { RecurringIndicator } from "./RecurringIndicator";


class TokenizedCardDataCreate {

        /**
        * The name of the cardholder, as printed on the card, identifying the card owner.
        */
    'cardHolderName'?: string;

        /**
        * The security code used to validate the card during transactions.
        */
    'cardVerificationCode'?: string;

        /**
        * An additional authentication value that enhances the security of tokenized card transactions.
        */
    'cryptogram'?: CardCryptogramCreate;

        /**
        * The expiry date of the card, indicating its validity period in yyyy-mm format (e.g., 2023-09).
        */
    'expiryDate'?: string;

        /**
        * The type of PAN or token, indicating the source or security method of the card information.
        */
    'panType'?: PanType;

        /**
        * The card's primary account number (PAN), the unique identifier of the card.
        */
    'primaryAccountNumber': string;

        /**
        * The indicator used to distinguish between recurring and one-time transactions. If omitted, it will be automatically determined based on the transaction's properties.
        */
    'recurringIndicator'?: RecurringIndicator;

        /**
        * A reference specific to the card's transaction within its payment scheme.
        */
    'schemeTransactionReference'?: string;

        /**
        * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
        */
    'tokenRequestorId'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "cardHolderName",
        "baseName": "cardHolderName",
        "type": "string"
        },
        
        {
        "name": "cardVerificationCode",
        "baseName": "cardVerificationCode",
        "type": "string"
        },
        
        {
        "name": "cryptogram",
        "baseName": "cryptogram",
        "type": "CardCryptogramCreate"
        },
        
        {
        "name": "expiryDate",
        "baseName": "expiryDate",
        "type": "string"
        },
        
        {
        "name": "panType",
        "baseName": "panType",
        "type": "PanType"
        },
        
        {
        "name": "primaryAccountNumber",
        "baseName": "primaryAccountNumber",
        "type": "string"
        },
        
        {
        "name": "recurringIndicator",
        "baseName": "recurringIndicator",
        "type": "RecurringIndicator"
        },
        
        {
        "name": "schemeTransactionReference",
        "baseName": "schemeTransactionReference",
        "type": "string"
        },
        
        {
        "name": "tokenRequestorId",
        "baseName": "tokenRequestorId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return TokenizedCardDataCreate.attributeTypeMap;
    }
}

export { TokenizedCardDataCreate }
