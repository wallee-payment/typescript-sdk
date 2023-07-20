'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductMeteredFee } from "./ProductMeteredFee";


class ProductMeteredTierFee {

        /**
        * The fee determines the amount which is charged. The consumed metric is multiplied by the defined fee. The resulting amount is charged at the end of the period.
        */
    'fee'?: Array<PersistableCurrencyAmount>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'meteredFee'?: ProductMeteredFee;

        /**
        * The start range defines the metered consumption of the metric from which on the defined fee gets applied. This means when a subscription consumes a value of 10 or more and the start range is set to 10 the fee defined on the tier will be applied.
        */
    'startRange'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "fee",
        "baseName": "fee",
        "type": "Array<PersistableCurrencyAmount>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "meteredFee",
        "baseName": "meteredFee",
        "type": "ProductMeteredFee"
        },
        
        {
        "name": "startRange",
        "baseName": "startRange",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ProductMeteredTierFee.attributeTypeMap;
    }
}

export { ProductMeteredTierFee }
