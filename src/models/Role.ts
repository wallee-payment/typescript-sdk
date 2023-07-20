'use strict';
import { Account } from "./Account";
import { Permission } from "./Permission";
import { RoleState } from "./RoleState";


class Role {

        /**
        * The account the role belongs to. The role can only be assigned within this account.
        */
    'account'?: Account;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The name used to identify the role.
        */
    'name'?: { [key: string]: string; };

        /**
        * The permissions granted to users with this role.
        */
    'permissions'?: Array<Permission>;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: RoleState;

        /**
        * Whether users with this role are required to use two-factor authentication.
        */
    'twoFactorRequired'?: boolean;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "account",
        "baseName": "account",
        "type": "Account"
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
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<Permission>"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "RoleState"
        },
        
        {
        "name": "twoFactorRequired",
        "baseName": "twoFactorRequired",
        "type": "boolean"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Role.attributeTypeMap;
    }
}

export { Role }
