'use strict';


class Tax {

        /**
        * The tax rate to be applied.
        */
    'rate'?: number;

        /**
        * The name of the tax.
        */
    'title'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return Tax.attributeTypeMap;
    }
}

export { Tax }
