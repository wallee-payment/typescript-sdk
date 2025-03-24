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
        * The recurring period of time, typically monthly or annually, for which a subscriber is charged.
        */
    'billingCycle'?: string;

        /**
        * A comment that describes the product version and why it was created. It is not disclosed to the subscriber.
        */
    'comment'?: string;

        /**
        * The three-letter code (ISO 4217 format) of the product version's default currency.
        */
    'defaultCurrency'?: string;

        /**
        * The three-letter codes (ISO 4217 format) of the currencies that the product version supports.
        */
    'enabledCurrencies'?: Array<string>;

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
        * The product that the version belongs to.
        */
    'product'?: number;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionProductVersionState;

        /**
        * The way taxes are calculated for fees.
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
