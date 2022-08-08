'use strict';


class AnalyticsSchemaColumn {

        /**
        * The name of the alias defined for the column in the query or null if none is defined.
        */
    'aliasName'?: string;

        /**
        * The name of the column in the table or null if this is a synthetic column which is the result of some SQL expression.
        */
    'columnName'?: string;

        /**
        * A human readable description of the property contained in this column or null if this is a synthetic column which is the result of some SQL expression.
        */
    'description'?: { [key: string]: string; };

        /**
        * The precision (maximal number of digits) for decimal data types, otherwise 0.
        */
    'precision'?: number;

        /**
        * The name of the referenced table if this column represents a foreign-key relation to the IDs of another table, otherwise null.
        */
    'referencedTable'?: string;

        /**
        * The scale (maximal number number of digits in the fractional part) in case of a decimal data type, otherwise 0.
        */
    'scale'?: number;

        /**
        * The name of the table which defines this column.
        */
    'tableName'?: string;

        /**
        * The ORC data type of the column value.
        */
    'type'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "aliasName",
        "baseName": "aliasName",
        "type": "string"
        },
        
        {
        "name": "columnName",
        "baseName": "columnName",
        "type": "string"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "precision",
        "baseName": "precision",
        "type": "number"
        },
        
        {
        "name": "referencedTable",
        "baseName": "referencedTable",
        "type": "string"
        },
        
        {
        "name": "scale",
        "baseName": "scale",
        "type": "number"
        },
        
        {
        "name": "tableName",
        "baseName": "tableName",
        "type": "string"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AnalyticsSchemaColumn.attributeTypeMap;
    }
}

export { AnalyticsSchemaColumn }
