'use strict';
import { PersistableCurrencyAmount } from "./PersistableCurrencyAmount";
import { ProductFeeType } from "./ProductFeeType";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductSetupFee {

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
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The localized name of the fee that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The amount charged to the customer when a subscription is downgraded.
        */
    'onDowngradeCreditedAmount'?: Array<PersistableCurrencyAmount>;

        /**
        * The amount charged to the customer when a subscription is upgraded.
        */
    'onUpgradeCreditedAmount'?: Array<PersistableCurrencyAmount>;

        /**
        * The amount charged to the customer once when they subscribe to a subscription.
        */
    'setupFee'?: Array<PersistableCurrencyAmount>;

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
