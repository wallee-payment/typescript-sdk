'use strict';
import { AccountState } from "./AccountState";
import { AccountType } from "./AccountType";


class Account {

        /**
        * Active means that this account and all accounts in the hierarchy are active.
        */
    'active'?: boolean;

        /**
        * This property is true when all accounts in the hierarchy are active or restricted active.
        */
    'activeOrRestrictedActive'?: boolean;

        /**
        * The ID of the user who created this entity.
        */
    'createdBy'?: number;

        /**
        * The date and time when this entity was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of a user that deleted this entity.
        */
    'deletedBy'?: number;

        /**
        * The date and time when this entity was deleted.
        */
    'deletedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'lastModifiedDate'?: Date;

        /**
        * The name of the account identifies the account within the administrative interface.
        */
    'name'?: string;

        /**
        * The account which is responsible for administering the account.
        */
    'parentAccount'?: Account;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Restricted active means that at least one account in the hierarchy is only restricted active, but all are either restricted active or active.
        */
    'restrictedActive'?: boolean;

        /**
        * This is the scope to which the account belongs to.
        */
    'scope'?: number;

        /**
        * 
        */
    'state'?: AccountState;

        /**
        * This property restricts the number of subaccounts which can be created within this account.
        */
    'subaccountLimit'?: number;

        /**
        * The account type defines which role and capabilities it has.
        */
    'type'?: AccountType;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
