'use strict';
import { Subscription } from "./Subscription";
import { SubscriptionComponentConfiguration } from "./SubscriptionComponentConfiguration";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";
import { SubscriptionVersionState } from "./SubscriptionVersionState";


class SubscriptionVersion {

        /**
        * 
        */
    'activatedOn'?: Date;

        /**
        * The subscriber is charged in the billing currency. The billing currency has to be one of the enabled currencies on the subscription product.
        */
    'billingCurrency'?: string;

        /**
        * 
        */
    'componentConfigurations'?: Array<SubscriptionComponentConfiguration>;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * The expected last period end is the date on which the projected end date of the last period is. This is only a projection and as such the actual date may be different.
        */
    'expectedLastPeriodEnd'?: Date;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'language'?: string;

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
    'plannedTerminationDate'?: Date;

        /**
        * 
        */
    'productVersion'?: SubscriptionProductVersion;

        /**
        * 
        */
    'selectedComponents'?: Array<SubscriptionProductComponent>;

        /**
        * 
        */
    'state'?: SubscriptionVersionState;

        /**
        * 
        */
    'subscription'?: Subscription;

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
    'terminationIssuedOn'?: Date;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
        "name": "selectedComponents",
        "baseName": "selectedComponents",
        "type": "Array<SubscriptionProductComponent>"
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
