'use strict';
import { SubscriptionProduct } from "./SubscriptionProduct";


class SubscriptionProductRetirement {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

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
    'product'?: SubscriptionProduct;

        /**
        * 
        */
    'respectTerminiationPeriodsEnabled'?: boolean;

        /**
        * 
        */
    'targetProduct'?: SubscriptionProduct;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "product",
        "baseName": "product",
        "type": "SubscriptionProduct"
        },
        
        {
        "name": "respectTerminiationPeriodsEnabled",
        "baseName": "respectTerminiationPeriodsEnabled",
        "type": "boolean"
        },
        
        {
        "name": "targetProduct",
        "baseName": "targetProduct",
        "type": "SubscriptionProduct"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductRetirement.attributeTypeMap;
    }
}

export { SubscriptionProductRetirement }
