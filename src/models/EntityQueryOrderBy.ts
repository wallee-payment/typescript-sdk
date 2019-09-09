'use strict';
import { EntityQueryOrderByType } from "./EntityQueryOrderByType";


class EntityQueryOrderBy {

        /**
        * 
        */
    'fieldName': string;

        /**
        * 
        */
    'sorting': EntityQueryOrderByType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "fieldName",
        "baseName": "fieldName",
        "type": "string"
        },
        
        {
        "name": "sorting",
        "baseName": "sorting",
        "type": "EntityQueryOrderByType"
        }        
    ];

    static getAttributeTypeMap() {
        return EntityQueryOrderBy.attributeTypeMap;
    }
}

export { EntityQueryOrderBy }
