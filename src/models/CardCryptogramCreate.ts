'use strict';
import { CardCryptogramType } from "./CardCryptogramType";


class CardCryptogramCreate {

        /**
        * 
        */
    'type': CardCryptogramType;

        /**
        * 
        */
    'value': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "type",
        "baseName": "type",
        "type": "CardCryptogramType"
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
