'use strict';
import { Subscriber } from "./Subscriber";
import { SubscriptionAffiliate } from "./SubscriptionAffiliate";
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";
import { SubscriptionState } from "./SubscriptionState";
import { Token } from "./Token";


class Subscription {

        /**
        * 
        */
    'activatedOn'?: Date;

        /**
        * 
        */
    'affiliate'?: SubscriptionAffiliate;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'currentProductVersion'?: SubscriptionProductVersion;

        /**
        * 
        */
    'description'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'initializedOn'?: Date;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'plannedTerminationDate'?: Date;

        /**
        * 
        */
    'reference'?: string;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionState;

        /**
        * 
        */
    'subscriber'?: Subscriber;

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
    'terminatingOn'?: Date;

        /**
        * 
        */
    'terminationScheduledOn'?: Date;

        /**
        * 
        */
    'token'?: Token;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "activatedOn",
        "baseName": "activatedOn",
        "type": "Date"
        },
        
        {
        "name": "affiliate",
        "baseName": "affiliate",
        "type": "SubscriptionAffiliate"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currentProductVersion",
        "baseName": "currentProductVersion",
        "type": "SubscriptionProductVersion"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initializedOn",
        "baseName": "initializedOn",
        "type": "Date"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "plannedTerminationDate",
        "baseName": "plannedTerminationDate",
        "type": "Date"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionState"
        },
        
        {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "Subscriber"
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
        "name": "terminatingOn",
        "baseName": "terminatingOn",
        "type": "Date"
        },
        
        {
        "name": "terminationScheduledOn",
        "baseName": "terminationScheduledOn",
        "type": "Date"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "Token"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}

export { Subscription }
