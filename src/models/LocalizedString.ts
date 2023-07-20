'use strict';


class LocalizedString {

        /**
        * The term's language.
        */
    'language'?: string;

        /**
        * The localized term.
        */
    'string'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
