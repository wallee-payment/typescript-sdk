'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductMeteredFee } from "./ProductMeteredFee";


class ProductMeteredTierFee {

        /**
        * The amount charged to the customer for each consumed unit at the end of a billing cycle.
        */
    'fee'?: Array<PersistableCurrencyAmount>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The metered fee that this tier belongs to.
        */
    'meteredFee'?: ProductMeteredFee;

        /**
        * Starting from and including this quantity is contained in the tier.
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
