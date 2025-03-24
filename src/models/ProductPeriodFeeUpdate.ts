'use strict';
import { PersistableCurrencyAmountUpdate } from "./PersistableCurrencyAmountUpdate";


class ProductPeriodFeeUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The product component that the fee belongs to.
        */
    'component'?: number;

        /**
        * The localized description of the fee that is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * The localized title that be used on ledger entries and invoices.
        */
    'ledgerEntryTitle'?: { [key: string]: string; };

        /**
        * The localized name of the fee that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The number of subscription billing cycles that count as a trial phase and during which no fees are charged.
        */
    'numberOfFreeTrialPeriods'?: number;

        /**
        * The amount charged to the customer for each billing cycle during the term of a subscription.
        */
    'periodFee'?: Array<PersistableCurrencyAmountUpdate>;


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
        "name": "component",
        "baseName": "component",
        "type": "number"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "ledgerEntryTitle",
        "baseName": "ledgerEntryTitle",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "numberOfFreeTrialPeriods",
        "baseName": "numberOfFreeTrialPeriods",
        "type": "number"
        },
        
        {
        "name": "periodFee",
        "baseName": "periodFee",
        "type": "Array<PersistableCurrencyAmountUpdate>"
        }        
    ];

    static getAttributeTypeMap() {
        return ProductPeriodFeeUpdate.attributeTypeMap;
    }
}

export { ProductPeriodFeeUpdate }
