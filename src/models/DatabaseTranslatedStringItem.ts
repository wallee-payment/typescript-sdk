'use strict';


class DatabaseTranslatedStringItem {

        /**
        * 
        */
    'language'?: string;

        /**
        * 
        */
    'languageCode'?: string;

        /**
        * 
        */
    'translation'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "languageCode",
        "baseName": "languageCode",
        "type": "string"
        },
        
        {
        "name": "translation",
        "baseName": "translation",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return DatabaseTranslatedStringItem.attributeTypeMap;
    }
}

export { DatabaseTranslatedStringItem }
