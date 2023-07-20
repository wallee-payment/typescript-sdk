'use strict';
import { ProductMeteredTierPricing } from "./ProductMeteredTierPricing";


class ProductMeteredFeeUpdate {

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
        * 
        */
    'metric'?: number;

        /**
        * The name of the fee should describe for the subscriber in few words for what the fee is for.
        */
    'name'?: { [key: string]: string; };

        /**
        * The tier pricing determines the calculation method of the tiers. The prices of the different tiers can be applied in different ways. The tier pricing controls this calculation.
        */
    'tierPricing'?: ProductMeteredTierPricing;


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
        "name": "metric",
        "baseName": "metric",
        "type": "number"
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
        }        
    ];

    static getAttributeTypeMap() {
        return ProductMeteredFeeUpdate.attributeTypeMap;
    }
}

export { ProductMeteredFeeUpdate }
