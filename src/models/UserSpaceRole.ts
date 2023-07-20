'use strict';


class UserSpaceRole {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'role'?: number;

        /**
        * 
        */
    'space'?: number;

        /**
        * 
        */
    'user'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "role",
        "baseName": "role",
        "type": "number"
        },
        
        {
        "name": "space",
        "baseName": "space",
        "type": "number"
        },
        
        {
        "name": "user",
        "baseName": "user",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return UserSpaceRole.attributeTypeMap;
    }
}

export { UserSpaceRole }
