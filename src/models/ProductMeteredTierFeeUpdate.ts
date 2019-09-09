'use strict';
import { PersistableCurrencyAmountUpdate } from "./PersistableCurrencyAmountUpdate";


class ProductMeteredTierFeeUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The fee determines the amount which is charged. The consumed metric is multiplied by the defined fee. The resulting amount is charged at the end of the period.
        */
    'fee'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * 
        */
    'meteredFee'?: number;

        /**
        * The start range defines the metered consumption of the metric from which on the defined fee gets applied. This means when a subscription consumes a value of 10 or more and the start range is set to 10 the fee defined on the tier will be applied.
        */
    'startRange'?: number;


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
        "name": "fee",
        "baseName": "fee",
        "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        
        {
        "name": "meteredFee",
        "baseName": "meteredFee",
        "type": "number"
        },
        
        {
        "name": "startRange",
        "baseName": "startRange",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ProductMeteredTierFeeUpdate.attributeTypeMap;
    }
}

export { ProductMeteredTierFeeUpdate }
