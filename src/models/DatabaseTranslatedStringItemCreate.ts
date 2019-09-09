'use strict';


class DatabaseTranslatedStringItemCreate {

        /**
        * 
        */
    'language': string;

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
        "name": "translation",
        "baseName": "translation",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return DatabaseTranslatedStringItemCreate.attributeTypeMap;
    }
}

export { DatabaseTranslatedStringItemCreate }
