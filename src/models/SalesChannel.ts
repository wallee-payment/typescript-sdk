'use strict';


class SalesChannel {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'icon'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
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
