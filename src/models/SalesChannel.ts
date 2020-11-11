'use strict';


class SalesChannel {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'icon'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'parent'?: SalesChannel;

        /**
        * 
        */
    'sortOrder'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "parent",
        "baseName": "parent",
        "type": "SalesChannel"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SalesChannel.attributeTypeMap;
    }
}

export { SalesChannel }
