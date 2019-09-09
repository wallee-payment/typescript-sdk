'use strict';


class LocalizedString {

        /**
        * 
        */
    'displayName'?: string;

        /**
        * 
        */
    'language'?: string;

        /**
        * 
        */
    'string'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "string",
        "baseName": "string",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return LocalizedString.attributeTypeMap;
    }
}

export { LocalizedString }
