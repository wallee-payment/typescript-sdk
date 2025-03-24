'use strict';
import { PersistableCurrencyAmountUpdate } from "./PersistableCurrencyAmountUpdate";


class ProductSetupFeeUpdate {

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
        * The localized name of the fee that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The amount charged to the customer when a subscription is downgraded.
        */
    'onDowngradeCreditedAmount'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * The amount charged to the customer when a subscription is upgraded.
        */
    'onUpgradeCreditedAmount'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * The amount charged to the customer once when they subscribe to a subscription.
        */
    'setupFee'?: Array<PersistableCurrencyAmountUpdate>;


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
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "onDowngradeCreditedAmount",
        "baseName": "onDowngradeCreditedAmount",
        "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        
        {
        "name": "onUpgradeCreditedAmount",
        "baseName": "onUpgradeCreditedAmount",
        "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        
        {
        "name": "setupFee",
        "baseName": "setupFee",
        "type": "Array<PersistableCurrencyAmountUpdate>"
        }        
    ];

    static getAttributeTypeMap() {
        return ProductSetupFeeUpdate.attributeTypeMap;
    }
}

export { ProductSetupFeeUpdate }
