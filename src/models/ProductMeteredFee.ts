'use strict';
import { ProductFeeType } from "./ProductFeeType";
import { ProductMeteredTierPricing } from "./ProductMeteredTierPricing";
import { SubscriptionMetric } from "./SubscriptionMetric";
import { SubscriptionProductComponent } from "./SubscriptionProductComponent";


class ProductMeteredFee {

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
        * 
        */
    'metric'?: SubscriptionMetric;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: { [key: string]: string; };

        /**
        * The tier pricing determines the calculation method of the tiers. The prices of the different tiers can be applied in different ways. The tier pricing controls this calculation.
        */
    'tierPricing'?: ProductMeteredTierPricing;

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
