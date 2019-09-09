'use strict';
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
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
    'description'?: DatabaseTranslatedString;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'metric'?: SubscriptionMetric;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: DatabaseTranslatedString;

        /**
        * The tier pricing determines the calculation method of the tiers. The prices of the different tiers can be applied in different ways. The tier pricing controls this calculation.
        */
    'tierPricing'?: ProductMeteredTierPricing;

        /**
        * 
        */
    'type'?: ProductFeeType;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
        "type": "DatabaseTranslatedString"
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
        "type": "DatabaseTranslatedString"
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
