'use strict';
import { CardCryptogramCreate } from "./CardCryptogramCreate";
import { CardholderAuthenticationCreate } from "./CardholderAuthenticationCreate";
import { RecurringIndicator } from "./RecurringIndicator";


class AuthenticatedCardDataCreate {

        /**
        * The card holder name is the name printed onto the card. It identifies the person who owns the card.
        */
    'cardHolderName'?: string;

        /**
        * The card verification code (CVC) is a 3 to 4 digit code typically printed on the back of the card. It helps to ensure that the card holder is authorizing the transaction. For card not-present transactions this field is optional.
        */
    'cardVerificationCode'?: string;

        /**
        * The cardholder authentication information. The authentication is optional and can be provided if the cardholder has been already authenticated (e.g. in 3-D Secure system).
        */
    'cardholderAuthentication'?: CardholderAuthenticationCreate;

        /**
        * The additional authentication value used to secure the tokenized card transactions.
        */
    'cryptogram'?: CardCryptogramCreate;

        /**
        * The card expiry date indicates when the card expires. The format is the format yyyy-mm where yyyy is the year (e.g. 2019) and the mm is the month (e.g. 09).
        */
    'expiryDate'?: string;

        /**
        * The primary account number (PAN) identifies the card. The number is numeric and typically printed on the front of the card.
        */
    'primaryAccountNumber': string;

        /**
        * 
        */
    'recurringIndicator'?: RecurringIndicator;

        /**
        * 
        */
    'schemeTransactionReference'?: string;

        /**
        * 
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
        "name": "cardholderAuthentication",
        "baseName": "cardholderAuthentication",
        "type": "CardholderAuthenticationCreate"
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
        return AuthenticatedCardDataCreate.attributeTypeMap;
    }
}

export { AuthenticatedCardDataCreate }
