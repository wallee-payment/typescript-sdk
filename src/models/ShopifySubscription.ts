'use strict';
import { ShopifySubscriber } from "./ShopifySubscriber";
import { ShopifySubscriptionState } from "./ShopifySubscriptionState";


class ShopifySubscription {

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'initialTransaction'?: number;

        /**
        * 
        */
    'language'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'orderRecurrenceNumber'?: number;

        /**
        * 
        */
    'shop'?: number;

        /**
        * 
        */
    'state'?: ShopifySubscriptionState;

        /**
        * 
        */
    'subscriber'?: ShopifySubscriber;

        /**
        * 
        */
    'terminatedBy'?: number;

        /**
        * 
        */
    'terminatedOn'?: Date;

        /**
        * 
        */
    'terminationRequestDate'?: Date;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initialTransaction",
        "baseName": "initialTransaction",
        "type": "number"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "orderRecurrenceNumber",
        "baseName": "orderRecurrenceNumber",
        "type": "number"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriptionState"
        },
        
        {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "ShopifySubscriber"
        },
        
        {
        "name": "terminatedBy",
        "baseName": "terminatedBy",
        "type": "number"
        },
        
        {
        "name": "terminatedOn",
        "baseName": "terminatedOn",
        "type": "Date"
        },
        
        {
        "name": "terminationRequestDate",
        "baseName": "terminationRequestDate",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscription.attributeTypeMap;
    }
}

export { ShopifySubscription }
