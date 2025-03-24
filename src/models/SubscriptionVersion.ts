'use strict';
import { BillingCycleModel } from "./BillingCycleModel";
import { Subscription } from "./Subscription";
import { SubscriptionComponentConfiguration } from "./SubscriptionComponentConfiguration";
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";
import { SubscriptionVersionState } from "./SubscriptionVersionState";


class SubscriptionVersion {

        /**
        * The date and time when the subscription version was activated.
        */
    'activatedOn'?: Date;

        /**
        * The three-letter code (ISO 4217 format) of the currency used to invoice the customer. Must be one of the currencies supported by the product.
        */
    'billingCurrency'?: string;

        /**
        * 
        */
    'billingCycleModel'?: BillingCycleModel;

        /**
        * The configurations of the subscription's components.
        */
    'componentConfigurations'?: Array<SubscriptionComponentConfiguration>;

        /**
        * The date and time when the subscription version was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time when the last period is expected to end.
        */
    'expectedLastPeriodEnd'?: Date;

        /**
        * The date and time when the subscription version failed.
        */
    'failedOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

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
        * The date and time when the termination of the subscription version is planned.
        */
    'plannedTerminationDate'?: Date;

        /**
        * The product version that is subscribed to.
        */
    'productVersion'?: SubscriptionProductVersion;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionVersionState;

        /**
        * The subscription that this version belongs to.
        */
    'subscription'?: Subscription;

        /**
        * The date and time when the subscription version was terminated.
        */
    'terminatedOn'?: Date;

        /**
        * The date and time when the termination of the subscription version started.
        */
    'terminatingOn'?: Date;

        /**
        * The date and time when the termination of the subscription version was issued.
        */
    'terminationIssuedOn'?: Date;

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
        "name": "billingCurrency",
        "baseName": "billingCurrency",
        "type": "string"
        },
        
        {
        "name": "billingCycleModel",
        "baseName": "billingCycleModel",
        "type": "BillingCycleModel"
        },
        
        {
        "name": "componentConfigurations",
        "baseName": "componentConfigurations",
        "type": "Array<SubscriptionComponentConfiguration>"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "expectedLastPeriodEnd",
        "baseName": "expectedLastPeriodEnd",
        "type": "Date"
        },
        
        {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
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
        "name": "productVersion",
        "baseName": "productVersion",
        "type": "SubscriptionProductVersion"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionVersionState"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "Subscription"
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
        "name": "terminationIssuedOn",
        "baseName": "terminationIssuedOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionVersion.attributeTypeMap;
    }
}

export { SubscriptionVersion }
