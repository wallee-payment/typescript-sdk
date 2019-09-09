'use strict';


class Permission {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'feature'?: number;

        /**
        * 
        */
    'group'?: boolean;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'leaf'?: boolean;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'parent'?: number;

        /**
        * 
        */
    'pathToRoot'?: Array<number>;

        /**
        * 
        */
    'title'?: { [key: string]: string; };

        /**
        * 
        */
    'twoFactorRequired'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
        },
        
        {
        "name": "group",
        "baseName": "group",
        "type": "boolean"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "leaf",
        "baseName": "leaf",
        "type": "boolean"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "parent",
        "baseName": "parent",
        "type": "number"
        },
        
        {
        "name": "pathToRoot",
        "baseName": "pathToRoot",
        "type": "Array<number>"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "twoFactorRequired",
        "baseName": "twoFactorRequired",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return Permission.attributeTypeMap;
    }
}

export { Permission }
