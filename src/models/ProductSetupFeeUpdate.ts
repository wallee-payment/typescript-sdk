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
        * 
        */
    'component'?: number;

        /**
        * The description of a component fee describes the fee to the subscriber. The description may be shown in documents or on certain user interfaces.
        */
    'description'?: { [key: string]: string; };

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: { [key: string]: string; };

        /**
        * When the subscription is changed and the change is considered as a downgrade the amount defined by this property will be credited to the subscriber.
        */
    'onDowngradeCreditedAmount'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * When the subscription is changed and the change is considered as a upgrade the amount defined by this property will be credited to the subscriber.
        */
    'onUpgradeCreditedAmount'?: Array<PersistableCurrencyAmountUpdate>;

        /**
        * The setup fee is charged when the subscriber subscribes to this component. The setup fee is debited with the first charge for the subscriptions.
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
