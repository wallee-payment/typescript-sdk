'use strict';


class UnencryptedCardData {

        /**
        * The card holder name is the name printed onto the card. It identifies the person who owns the card.
        */
    'cardHolderName'?: string;

        /**
        * The card verification code (CVC) is a 3 to 4 digit code typically printed on the back of the card. It helps to ensure that the card holder is authorizing the transaction. For card not-present transactions this field is optional.
        */
    'cardVerificationCode'?: string;

        /**
        * The card expiry date indicates when the card expires. The format is the format yyyy-mm where yyyy is the year (e.g. 2019) and the mm is the month (e.g. 09).
        */
    'expiryDate'?: string;

        /**
        * The primary account number (PAN) identifies the card. The number is numeric and typically printed on the front of the card.
        */
    'primaryAccountNumber'?: string;


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
        "name": "expiryDate",
        "baseName": "expiryDate",
        "type": "string"
        },
        
        {
        "name": "primaryAccountNumber",
        "baseName": "primaryAccountNumber",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return UnencryptedCardData.attributeTypeMap;
    }
}

export { UnencryptedCardData }
