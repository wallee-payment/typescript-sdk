'use strict';
import { ShopifySubscriberState } from "./ShopifySubscriberState";


class ShopifySubscriber {

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'emailAddress'?: string;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
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
        * 
        */
    'phoneNumber'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'shop'?: number;

        /**
        * 
        */
    'state'?: ShopifySubscriberState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
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
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriberState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriber.attributeTypeMap;
    }
}

export { ShopifySubscriber }
