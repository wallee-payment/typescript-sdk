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
        * The product component that the fee belongs to.
        */
    'component'?: number;

        /**
        * The localized description of the fee that is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * The metric used to determine the resource consumption billed to the customer.
        */
    'metric'?: number;

        /**
        * The localized name of the fee that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The method used to calculate the tier price.
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
