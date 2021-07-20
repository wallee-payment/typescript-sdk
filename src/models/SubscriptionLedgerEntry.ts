'use strict';
import { SubscriptionLedgerEntryState } from "./SubscriptionLedgerEntryState";
import { Tax } from "./Tax";


class SubscriptionLedgerEntry {

        /**
        * 
        */
    'aggregatedTaxRate'?: number;

        /**
        * 
        */
    'amountExcludingTax'?: number;

        /**
        * 
        */
    'amountIncludingTax'?: number;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'discountIncludingTax'?: number;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'quantity'?: number;

        /**
        * 
        */
    'state'?: SubscriptionLedgerEntryState;

        /**
        * 
        */
    'subscriptionVersion'?: number;

        /**
        * 
        */
    'taxAmount'?: number;

        /**
        * 
        */
    'taxes'?: Array<Tax>;

        /**
        * 
        */
    'title'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "aggregatedTaxRate",
        "baseName": "aggregatedTaxRate",
        "type": "number"
        },
        
        {
        "name": "amountExcludingTax",
        "baseName": "amountExcludingTax",
        "type": "number"
        },
        
        {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
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
        "name": "discountIncludingTax",
        "baseName": "discountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionLedgerEntryState"
        },
        
        {
        "name": "subscriptionVersion",
        "baseName": "subscriptionVersion",
        "type": "number"
        },
        
        {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
        },
        
        {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<Tax>"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionLedgerEntry.attributeTypeMap;
    }
}

export { SubscriptionLedgerEntry }
