'use strict';
import { EntityQuery } from "./EntityQuery";


class EntityExportRequest {

        /**
        * The properties is a list of property paths which should be exported.
        */
    'properties': Array<string>;

        /**
        * The query limits the returned entries. The query allows to restrict the entries to return and it allows to control the order of them.
        */
    'query'?: EntityQuery;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<string>"
        },
        
        {
        "name": "query",
        "baseName": "query",
        "type": "EntityQuery"
        }        
    ];

    static getAttributeTypeMap() {
        return EntityExportRequest.attributeTypeMap;
    }
}

export { EntityExportRequest }
