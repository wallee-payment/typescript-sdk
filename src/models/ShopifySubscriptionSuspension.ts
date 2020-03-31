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
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'initiator'?: ShopifySubscriptionSuspensionInitiator;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
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
        * 
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
