'use strict';
import { DatabaseTranslatedStringItem } from "./DatabaseTranslatedStringItem";


class DatabaseTranslatedString {

        /**
        * 
        */
    'availableLanguages'?: Array<string>;

        /**
        * 
        */
    'displayName'?: string;

        /**
        * 
        */
    'items'?: Array<DatabaseTranslatedStringItem>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "availableLanguages",
        "baseName": "availableLanguages",
        "type": "Array<string>"
        },
        
        {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<DatabaseTranslatedStringItem>"
        }        
    ];

    static getAttributeTypeMap() {
        return DatabaseTranslatedString.attributeTypeMap;
    }
}

export { DatabaseTranslatedString }
