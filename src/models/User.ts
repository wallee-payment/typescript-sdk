'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { UserType } from "./UserType";


class User {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The scope that the user belongs to.
        */
    'scope'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The user's type which defines its role and capabilities.
        */
    'userType'?: UserType;

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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "scope",
        "baseName": "scope",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "userType",
        "baseName": "userType",
        "type": "UserType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export { User }
