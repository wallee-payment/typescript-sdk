'use strict';


class PersistableCurrencyAmountUpdate {

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
        return PersistableCurrencyAmountUpdate.attributeTypeMap;
    }
}

export { PersistableCurrencyAmountUpdate }
