'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductFeeType } from "./ProductFeeType";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductPeriodFee {

        /**
        * The product component that the fee belongs to.
        */
    'component'?: SubscriptionProductComponent;

        /**
        * The localized description of the fee that is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized title that be used on ledger entries and invoices.
        */
    'ledgerEntryTitle'?: { [key: string]: string; };

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

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
    'periodFee'?: Array<PersistableCurrencyAmount>;

        /**
        * The type of the fee.
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
