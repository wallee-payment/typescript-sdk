'use strict';


class UserSpaceRole {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The role that is assigned to the user.
        */
    'role'?: number;

        /**
        * The space in which the role is assigned to the user.
        */
    'space'?: number;

        /**
        * The user whose role this defines.
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
