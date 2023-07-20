'use strict';
import { Account } from "./Account";
import { CreationEntityState } from "./CreationEntityState";
import { SpaceAddress } from "./SpaceAddress";
import { TenantDatabase } from "./TenantDatabase";


class Space {

        /**
        * The account that the space belongs to.
        */
    'account'?: Account;

        /**
        * Whether this space and all its parent accounts are active.
        */
    'active'?: boolean;

        /**
        * Whether this space and all its parent accounts are active or restricted active.
        */
    'activeOrRestrictedActive'?: boolean;

        /**
        * The ID of the user the space was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the space was created.
        */
    'createdOn'?: Date;

        /**
        * The database the space is connected to and that holds the space's data.
        */
    'database'?: TenantDatabase;

        /**
        * The ID of the user the space was deleted by.
        */
    'deletedBy'?: number;

        /**
        * The date and time when the space was deleted.
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
        * The name used to identify the space.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The address that is used in communication with clients for example in emails, documents, etc.
        */
    'postalAddress'?: SpaceAddress;

        /**
        * The currency that is used to display aggregated amounts in the space.
        */
    'primaryCurrency'?: string;

        /**
        * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
        */
    'requestLimit'?: number;

        /**
        * Whether this space and all its parent accounts are active or restricted active. There is least one parent account that is restricted active.
        */
    'restrictedActive'?: boolean;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The email address that will receive messages about technical issues and errors that occur in the space.
        */
    'technicalContactAddresses'?: Array<string>;

        /**
        * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
        */
    'timeZone'?: string;

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
        "name": "database",
        "baseName": "database",
        "type": "TenantDatabase"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "postalAddress",
        "baseName": "postalAddress",
        "type": "SpaceAddress"
        },
        
        {
        "name": "primaryCurrency",
        "baseName": "primaryCurrency",
        "type": "string"
        },
        
        {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
        },
        
        {
        "name": "restrictedActive",
        "baseName": "restrictedActive",
        "type": "boolean"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "technicalContactAddresses",
        "baseName": "technicalContactAddresses",
        "type": "Array<string>"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Space.attributeTypeMap;
    }
}

export { Space }
