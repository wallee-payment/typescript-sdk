'use strict';


class UserSpaceRole {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
