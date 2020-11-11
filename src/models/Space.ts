'use strict';
import { Account } from "./Account";
import { CreationEntityState } from "./CreationEntityState";
import { SpaceAddress } from "./SpaceAddress";
import { TenantDatabase } from "./TenantDatabase";


class Space {

        /**
        * The account to which the space belongs to.
        */
    'account'?: Account;

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
        * The database in which the space's data are stored in.
        */
    'database'?: TenantDatabase;

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
        * The space name is used internally to identify the space in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The address to use in communication with clients for example in email, documents etc.
        */
    'postalAddress'?: SpaceAddress;

        /**
        * This is the currency that is used to display aggregated amounts in the space.
        */
    'primaryCurrency'?: string;

        /**
        * The request limit defines the maximum number of API request accepted within 2 minutes for this space. This limit can only be changed with special privileges.
        */
    'requestLimit'?: number;

        /**
        * Restricted active means that at least one account in the hierarchy is only restricted active, but all are either restricted active or active.
        */
    'restrictedActive'?: boolean;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The email address provided as contact addresses will be informed about technical issues or errors triggered by the space.
        */
    'technicalContactAddresses'?: Array<string>;

        /**
        * The time zone assigned to the space determines the time offset for calculating dates within the space. This is typically used for background processed which needs to be triggered on a specific hour within the day. Changing the space time zone will not change the display of dates.
        */
    'timeZone'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
