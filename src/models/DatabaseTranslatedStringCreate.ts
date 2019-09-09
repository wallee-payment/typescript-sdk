'use strict';
import { DatabaseTranslatedStringItemCreate } from "./DatabaseTranslatedStringItemCreate";


class DatabaseTranslatedStringCreate {

        /**
        * 
        */
    'items'?: Array<DatabaseTranslatedStringItemCreate>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<DatabaseTranslatedStringItemCreate>"
        }        
    ];

    static getAttributeTypeMap() {
        return DatabaseTranslatedStringCreate.attributeTypeMap;
    }
}

export { DatabaseTranslatedStringCreate }
