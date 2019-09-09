'use strict';
import { DatabaseTranslatedStringCreate } from "./DatabaseTranslatedStringCreate";
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
        * 
        */
    'component'?: number;

        /**
        * The description of a component fee describes the fee to the subscriber. The description may be shown in documents or on certain user interfaces.
        */
    'description'?: DatabaseTranslatedStringCreate;

        /**
        * The ledger entry title will be used for the title in the ledger entry and in the invoice.
        */
    'ledgerEntryTitle'?: DatabaseTranslatedStringCreate;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: DatabaseTranslatedStringCreate;

        /**
        * The number of free trial periods specify how many periods are free of charge at the begining of the subscription.
        */
    'numberOfFreeTrialPeriods'?: number;

        /**
        * The period fee is charged for every period of the subscription except for those periods which are trial periods.
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
        "type": "DatabaseTranslatedStringCreate"
        },
        
        {
        "name": "ledgerEntryTitle",
        "baseName": "ledgerEntryTitle",
        "type": "DatabaseTranslatedStringCreate"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "DatabaseTranslatedStringCreate"
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
