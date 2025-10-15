'use strict';


class CardCryptogramCreate {

        /**
        * The Electronic Commerce Indicator (ECI) represents the authentication level and indicates liability shift during online or card-not-present transactions.
        */
    'eci'?: string;

        /**
        * The cryptogram value used for securing card transactions, format varying based on the PAN type.
        */
    'value': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "eci",
        "baseName": "eci",
        "type": "string"
        },
        
        {
        "name": "value",
        "baseName": "value",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return CardCryptogramCreate.attributeTypeMap;
    }
}

export { CardCryptogramCreate }
