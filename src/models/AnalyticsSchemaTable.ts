'use strict';
import { AnalyticsSchemaColumn } from "./AnalyticsSchemaColumn";


class AnalyticsSchemaTable {

        /**
        * The schemas of all columns of this table.
        */
    'columns'?: Array<AnalyticsSchemaColumn>;

        /**
        * A human readable description of the entity type contained in this table.
        */
    'description'?: { [key: string]: string; };

        /**
        * The name of this table.
        */
    'tableName'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "columns",
        "baseName": "columns",
        "type": "Array<AnalyticsSchemaColumn>"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "tableName",
        "baseName": "tableName",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AnalyticsSchemaTable.attributeTypeMap;
    }
}

export { AnalyticsSchemaTable }
