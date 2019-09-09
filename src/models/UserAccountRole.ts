'use strict';


class UserAccountRole {

        /**
        * 
        */
    'account'?: number;

        /**
        * 
        */
    'appliesOnSubAccount'?: boolean;

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
    'user'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "account",
        "baseName": "account",
        "type": "number"
        },
        
        {
        "name": "appliesOnSubAccount",
        "baseName": "appliesOnSubAccount",
        "type": "boolean"
        },
        
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
        return UserAccountRole.attributeTypeMap;
    }
}

export { UserAccountRole }
