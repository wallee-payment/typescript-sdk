'use strict';
import { SubscriptionProductVersionState } from "./SubscriptionProductVersionState";
import { TaxCalculation } from "./TaxCalculation";


class SubscriptionProductVersionPending {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The billing cycle determines the rhythm with which the subscriber is billed. The charging may have different rhythm.
        */
    'billingCycle'?: string;

        /**
        * The comment allows to provide a internal comment for the version. It helps to document why a product was changed. The comment is not disclosed to the subscriber.
        */
    'comment'?: string;

        /**
        * The default currency has to be used in all fees.
        */
    'defaultCurrency'?: string;

        /**
        * The currencies which are enabled can be selected to define component fees. Currencies which are not enabled cannot be used to define fees.
        */
    'enabledCurrencies'?: Array<string>;

        /**
        * The minimal number of periods determines how long the subscription has to run before the subscription can be terminated.
        */
    'minimalNumberOfPeriods'?: number;

        /**
        * The product version name is the name of the product which is shown to the user for the version. When the visible product name should be changed for a particular product a new version has to be created which contains the new name of the product.
        */
    'name'?: { [key: string]: string; };

        /**
        * The number of notice periods determines the number of periods which need to be paid between the request to terminate the subscription and the final period.
        */
    'numberOfNoticePeriods'?: number;

        /**
        * Each product version is linked to a product.
        */
    'product'?: number;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionProductVersionState;

        /**
        * Strategy that is used for tax calculation in fees.
        */
    'taxCalculation'?: TaxCalculation;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
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
        "name": "product",
        "baseName": "product",
        "type": "number"
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
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductVersionPending.attributeTypeMap;
    }
}

export { SubscriptionProductVersionPending }
