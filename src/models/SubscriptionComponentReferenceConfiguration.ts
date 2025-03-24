'use strict';


class SubscriptionComponentReferenceConfiguration {

        /**
        * The ID of the component reference that is being configured.
        */
    'productComponentReferenceId'?: number;

        /**
        * The quantity that should be applied to the component.
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
