'use strict';
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { SubscriptionProduct } from "./SubscriptionProduct";
import { SubscriptionProductVersionState } from "./SubscriptionProductVersionState";
import { TaxCalculation } from "./TaxCalculation";


class SubscriptionProductVersion {

        /**
        * 
        */
    'activatedOn'?: Date;

        /**
        * The billing cycle determines the rhythm with which the subscriber is billed. The charging may have different rhythm.
        */
    'billingCycle'?: string;

        /**
        * The comment allows to provide a internal comment for the version. It helps to document why a product was changed. The comment is not disclosed to the subscriber.
        */
    'comment'?: string;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * The default currency has to be used in all fees.
        */
    'defaultCurrency'?: string;

        /**
        * The currencies which are enabled can be selected to define component fees. Currencies which are not enabled cannot be used to define fees.
        */
    'enabledCurrencies'?: Array<string>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The increment number represents the version number incremented whenever a new version is activated.
        */
    'incrementNumber'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The minimal number of periods determines how long the subscription has to run before the subscription can be terminated.
        */
    'minimalNumberOfPeriods'?: number;

        /**
        * The product version name is the name of the product which is shown to the user for the version. When the visible product name should be changed for a particular product a new version has to be created which contains the new name of the product.
        */
    'name'?: DatabaseTranslatedString;

        /**
        * The number of notice periods determines the number of periods which need to be paid between the request to terminate the subscription and the final period.
        */
    'numberOfNoticePeriods'?: number;

        /**
        * 
        */
    'obsoletedOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Each product version is linked to a product.
        */
    'product'?: SubscriptionProduct;

        /**
        * The product version reference helps to identify the version. The reference is generated out of the product reference.
        */
    'reference'?: string;

        /**
        * 
        */
    'retiringFinishedOn'?: Date;

        /**
        * 
        */
    'retiringStartedOn'?: Date;

        /**
        * 
        */
    'state'?: SubscriptionProductVersionState;

        /**
        * Strategy that is used for tax calculation in fees.
        */
    'taxCalculation'?: TaxCalculation;

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
        "name": "billingCycle",
        "baseName": "billingCycle",
        "type": "string"
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
        "type": "DatabaseTranslatedString"
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
