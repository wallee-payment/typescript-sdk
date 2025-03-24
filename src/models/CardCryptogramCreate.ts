'use strict';


class CardCryptogramCreate {

        /**
        * 
        */
    'eci'?: string;

        /**
        * 
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
