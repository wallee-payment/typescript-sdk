'use strict';
import { ShopifySubscription } from "./ShopifySubscription";
import { ShopifySubscriptionSuspensionInitiator } from "./ShopifySubscriptionSuspensionInitiator";
import { ShopifySubscriptionSuspensionState } from "./ShopifySubscriptionSuspensionState";
import { ShopifySubscriptionSuspensionType } from "./ShopifySubscriptionSuspensionType";


class ShopifySubscriptionSuspension {

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'endedBy'?: number;

        /**
        * 
        */
    'endedOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'initiator'?: ShopifySubscriptionSuspensionInitiator;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'plannedEndDate'?: Date;

        /**
        * 
        */
    'shop'?: number;

        /**
        * The object's current state.
        */
    'state'?: ShopifySubscriptionSuspensionState;

        /**
        * 
        */
    'subscription'?: ShopifySubscription;

        /**
        * 
        */
    'type'?: ShopifySubscriptionSuspensionType;

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
        "name": "endedBy",
        "baseName": "endedBy",
        "type": "number"
        },
        
        {
        "name": "endedOn",
        "baseName": "endedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initiator",
        "baseName": "initiator",
        "type": "ShopifySubscriptionSuspensionInitiator"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "plannedEndDate",
        "baseName": "plannedEndDate",
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
        "type": "ShopifySubscriptionSuspensionState"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "ShopifySubscription"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "ShopifySubscriptionSuspensionType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionSuspension.attributeTypeMap;
    }
}

export { ShopifySubscriptionSuspension }
