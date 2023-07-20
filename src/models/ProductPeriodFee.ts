'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductFeeType } from "./ProductFeeType";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductPeriodFee {

        /**
        * 
        */
    'component'?: SubscriptionProductComponent;

        /**
        * The description of a component fee describes the fee to the subscriber. The description may be shown in documents or on certain user interfaces.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ledger entry title will be used for the title in the ledger entry and in the invoice.
        */
    'ledgerEntryTitle'?: { [key: string]: string; };

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: { [key: string]: string; };

        /**
        * The number of free trial periods specify how many periods are free of charge at the begining of the subscription.
        */
    'numberOfFreeTrialPeriods'?: number;

        /**
        * The period fee is charged for every period of the subscription except for those periods which are trial periods.
        */
    'periodFee'?: Array<PersistableCurrencyAmount>;

        /**
        * 
        */
    'type'?: ProductFeeType;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "component",
        "baseName": "component",
        "type": "SubscriptionProductComponent"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "ledgerEntryTitle",
        "baseName": "ledgerEntryTitle",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
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
        "type": "Array<PersistableCurrencyAmount>"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "ProductFeeType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ProductPeriodFee.attributeTypeMap;
    }
}

export { ProductPeriodFee }
