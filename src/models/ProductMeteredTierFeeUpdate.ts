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
        * The amount charged to the customer for each consumed unit at the end of a billing cycle.
        */
    'fee'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * The metered fee that this tier belongs to.
        */
    'meteredFee'?: number;

        /**
        * Starting from and including this quantity is contained in the tier.
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
