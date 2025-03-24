'use strict';
import { ProductFeeType } from "./ProductFeeType";
import { ProductMeteredTierPricing } from "./ProductMeteredTierPricing";
import { SubscriptionMetric } from "./SubscriptionMetric";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductMeteredFee {

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
        * The metric used to determine the resource consumption billed to the customer.
        */
    'metric'?: SubscriptionMetric;

        /**
        * The localized name of the fee that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The method used to calculate the tier price.
        */
    'tierPricing'?: ProductMeteredTierPricing;

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
        "name": "metric",
        "baseName": "metric",
        "type": "SubscriptionMetric"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "tierPricing",
        "baseName": "tierPricing",
        "type": "ProductMeteredTierPricing"
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
        return ProductMeteredFee.attributeTypeMap;
    }
}

export { ProductMeteredFee }
