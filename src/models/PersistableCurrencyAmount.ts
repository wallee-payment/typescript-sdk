'use strict';


class PersistableCurrencyAmount {

        /**
        * 
        */
    'amount'?: number;

        /**
        * 
        */
    'currency'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PersistableCurrencyAmount.attributeTypeMap;
    }
}

export { PersistableCurrencyAmount }
