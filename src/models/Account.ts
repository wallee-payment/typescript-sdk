'use strict';
import { AccountState } from "./AccountState";
import { AccountType } from "./AccountType";


class Account {

        /**
        * Whether this account and all its parent accounts are active.
        */
    'active'?: boolean;

        /**
        * Whether this account and all its parent accounts are active or restricted active.
        */
    'activeOrRestrictedActive'?: boolean;

        /**
        * The ID of the user the account was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the account was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of a user the account was deleted by.
        */
    'deletedBy'?: number;

        /**
        * The date and time when the account was deleted.
        */
    'deletedOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The date and time when the object was last modified.
        */
    'lastModifiedDate'?: Date;

        /**
        * The name used to identify the account.
        */
    'name'?: string;

        /**
        * The parent account responsible for administering this account.
        */
    'parentAccount'?: Account;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Whether this account and all its parent accounts are active or restricted active. There is at least one account that is restricted active.
        */
    'restrictedActive'?: boolean;

        /**
        * The scope that the account belongs to.
        */
    'scope'?: number;

        /**
        * The object's current state.
        */
    'state'?: AccountState;

        /**
        * The number of sub-accounts that can be created within this account.
        */
    'subaccountLimit'?: number;

        /**
        * The account's type which defines its role and capabilities.
        */
    'type'?: AccountType;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
        },
        
        {
        "name": "activeOrRestrictedActive",
        "baseName": "activeOrRestrictedActive",
        "type": "boolean"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "deletedBy",
        "baseName": "deletedBy",
        "type": "number"
        },
        
        {
        "name": "deletedOn",
        "baseName": "deletedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "lastModifiedDate",
        "baseName": "lastModifiedDate",
        "type": "Date"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "parentAccount",
        "baseName": "parentAccount",
        "type": "Account"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "restrictedActive",
        "baseName": "restrictedActive",
        "type": "boolean"
        },
        
        {
        "name": "scope",
        "baseName": "scope",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "AccountState"
        },
        
        {
        "name": "subaccountLimit",
        "baseName": "subaccountLimit",
        "type": "number"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "AccountType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}

export { Account }
