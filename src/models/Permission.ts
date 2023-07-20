'use strict';


class Permission {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * The feature that this permission belongs to.
        */
    'feature'?: number;

        /**
        * Whether this is a permission group.
        */
    'group'?: boolean;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * Whether this is a leaf in the tree of permissions, and not a group.
        */
    'leaf'?: boolean;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The group that this permission belongs to.
        */
    'parent'?: number;

        /**
        * All parents of this permission up to the root of the permission tree.
        */
    'pathToRoot'?: Array<number>;

        /**
        * The localized name of the object.
        */
    'title'?: { [key: string]: string; };

        /**
        * Whether users with this permission are required to enable two-factor authentication.
        */
    'twoFactorRequired'?: boolean;

        /**
        * 
        */
    'webAppEnabled'?: boolean;


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
        },
        
        {
        "name": "webAppEnabled",
        "baseName": "webAppEnabled",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return Permission.attributeTypeMap;
    }
}

export { Permission }
