'use strict';
import { Subscriber } from "./Subscriber";
import { SubscriptionAffiliate } from "./SubscriptionAffiliate";
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";
import { SubscriptionState } from "./SubscriptionState";
import { Token } from "./Token";


class Subscription {

        /**
        * The date and time when the subscription was activate.
        */
    'activatedOn'?: Date;

        /**
        * The affiliate that led to the creation of the subscription.
        */
    'affiliate'?: SubscriptionAffiliate;

        /**
        * The date and time when the subscription was created.
        */
    'createdOn'?: Date;

        /**
        * The version of the product that the subscription is currently linked to.
        */
    'currentProductVersion'?: SubscriptionProductVersion;

        /**
        * A description used to identify the subscription.
        */
    'description'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The date and time when the subscription was initialized.
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
        * The date and time when the subscription is planned to be terminated.
        */
    'plannedTerminationDate'?: Date;

        /**
        * The merchant's reference used to identify the subscription.
        */
    'reference'?: string;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionState;

        /**
        * The subscriber that the subscription belongs to.
        */
    'subscriber'?: Subscriber;

        /**
        * The ID of the user the subscription was terminated by.
        */
    'terminatedBy'?: number;

        /**
        * The date and time when the subscription was terminated.
        */
    'terminatedOn'?: Date;

        /**
        * The date and time when the termination of the subscription started.
        */
    'terminatingOn'?: Date;

        /**
        * The date and time when the subscription was scheduled to be terminated.
        */
    'terminationScheduledOn'?: Date;

        /**
        * The payment token that is used to charge the customer.
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
