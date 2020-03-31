'use strict';
import { ShopifySubscriptionSuspensionType } from "./ShopifySubscriptionSuspensionType";


class ShopifySubscriptionSuspensionCreate {

        /**
        * 
        */
    'plannedEndDate': Date;

        /**
        * 
        */
    'subscription': number;

        /**
        * 
        */
    'type': ShopifySubscriptionSuspensionType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "plannedEndDate",
        "baseName": "plannedEndDate",
        "type": "Date"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "ShopifySubscriptionSuspensionType"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionSuspensionCreate.attributeTypeMap;
    }
}

export { ShopifySubscriptionSuspensionCreate }
