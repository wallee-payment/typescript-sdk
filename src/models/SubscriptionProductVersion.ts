'use strict';
import { BillingCycleModel } from "./BillingCycleModel";
import { SubscriptionProduct } from "./SubscriptionProduct";
import { SubscriptionProductVersionState } from "./SubscriptionProductVersionState";
import { TaxCalculation } from "./TaxCalculation";


class SubscriptionProductVersion {

        /**
        * The date and time when the product version was activated.
        */
    'activatedOn'?: Date;

        /**
        * The recurring period of time, typically monthly or annually, for which a subscriber is charged.
        */
    'billingCycle'?: string;

        /**
        * 
        */
    'billingCycleModel'?: BillingCycleModel;

        /**
        * A comment that describes the product version and why it was created. It is not disclosed to the subscriber.
        */
    'comment'?: string;

        /**
        * The date and time when the product version was created.
        */
    'createdOn'?: Date;

        /**
        * The three-letter code (ISO 4217 format) of the product version's default currency.
        */
    'defaultCurrency'?: string;

        /**
        * The three-letter codes (ISO 4217 format) of the currencies that the product version supports.
        */
    'enabledCurrencies'?: Array<string>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * Whenever a new version of a product is created, the number is increased and assigned.
        */
    'incrementNumber'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The minimum number of periods the subscription will run before it can be terminated.
        */
    'minimalNumberOfPeriods'?: number;

        /**
        * The localized name of the product that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The number of periods the subscription will keep running after its termination was requested.
        */
    'numberOfNoticePeriods'?: number;

        /**
        * The date and time when the product version was made obsolete.
        */
    'obsoletedOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The product that the version belongs to.
        */
    'product'?: SubscriptionProduct;

        /**
        * The reference used to identify the product version.
        */
    'reference'?: string;

        /**
        * The date and time when the product version was retired.
        */
    'retiringFinishedOn'?: Date;

        /**
        * The date and time when the product version's retirement was started.
        */
    'retiringStartedOn'?: Date;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionProductVersionState;

        /**
        * The way taxes are calculated for fees.
        */
    'taxCalculation'?: TaxCalculation;

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
        "name": "billingCycle",
        "baseName": "billingCycle",
        "type": "string"
        },
        
        {
        "name": "billingCycleModel",
        "baseName": "billingCycleModel",
        "type": "BillingCycleModel"
        },
        
        {
        "name": "comment",
        "baseName": "comment",
        "type": "string"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "defaultCurrency",
        "baseName": "defaultCurrency",
        "type": "string"
        },
        
        {
        "name": "enabledCurrencies",
        "baseName": "enabledCurrencies",
        "type": "Array<string>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "incrementNumber",
        "baseName": "incrementNumber",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "minimalNumberOfPeriods",
        "baseName": "minimalNumberOfPeriods",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "numberOfNoticePeriods",
        "baseName": "numberOfNoticePeriods",
        "type": "number"
        },
        
        {
        "name": "obsoletedOn",
        "baseName": "obsoletedOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "product",
        "baseName": "product",
        "type": "SubscriptionProduct"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "retiringFinishedOn",
        "baseName": "retiringFinishedOn",
        "type": "Date"
        },
        
        {
        "name": "retiringStartedOn",
        "baseName": "retiringStartedOn",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionProductVersionState"
        },
        
        {
        "name": "taxCalculation",
        "baseName": "taxCalculation",
        "type": "TaxCalculation"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductVersion.attributeTypeMap;
    }
}

export { SubscriptionProductVersion }
