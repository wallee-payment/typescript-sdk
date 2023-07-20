'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductFeeType } from "./ProductFeeType";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductSetupFee {

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
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: { [key: string]: string; };

        /**
        * When the subscription is changed and the change is considered as a downgrade the amount defined by this property will be credited to the subscriber.
        */
    'onDowngradeCreditedAmount'?: Array<PersistableCurrencyAmount>;

        /**
        * When the subscription is changed and the change is considered as a upgrade the amount defined by this property will be credited to the subscriber.
        */
    'onUpgradeCreditedAmount'?: Array<PersistableCurrencyAmount>;

        /**
        * The setup fee is charged when the subscriber subscribes to this component. The setup fee is debited with the first charge for the subscriptions.
        */
    'setupFee'?: Array<PersistableCurrencyAmount>;

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
        "name": "onDowngradeCreditedAmount",
        "baseName": "onDowngradeCreditedAmount",
        "type": "Array<PersistableCurrencyAmount>"
        },
        
        {
        "name": "onUpgradeCreditedAmount",
        "baseName": "onUpgradeCreditedAmount",
        "type": "Array<PersistableCurrencyAmount>"
        },
        
        {
        "name": "setupFee",
        "baseName": "setupFee",
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
        return ProductSetupFee.attributeTypeMap;
    }
}

export { ProductSetupFee }
