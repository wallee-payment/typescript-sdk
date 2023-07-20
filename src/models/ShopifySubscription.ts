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
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'initialExecutionDate'?: Date;

        /**
        * 
        */
    'initialPaymentTransaction'?: number;

        /**
        * 
        */
    'initialShopifyTransaction'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
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
        * The object's current state.
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
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "initialExecutionDate",
        "baseName": "initialExecutionDate",
        "type": "Date"
        },
        
        {
        "name": "initialPaymentTransaction",
        "baseName": "initialPaymentTransaction",
        "type": "number"
        },
        
        {
        "name": "initialShopifyTransaction",
        "baseName": "initialShopifyTransaction",
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
