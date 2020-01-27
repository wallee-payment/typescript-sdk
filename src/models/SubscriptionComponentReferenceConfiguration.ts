'use strict';


class SubscriptionComponentReferenceConfiguration {

        /**
        * 
        */
    'productComponentReferenceId'?: number;

        /**
        * 
        */
    'quantity'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "productComponentReferenceId",
        "baseName": "productComponentReferenceId",
        "type": "number"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionComponentReferenceConfiguration.attributeTypeMap;
    }
}

export { SubscriptionComponentReferenceConfiguration }
