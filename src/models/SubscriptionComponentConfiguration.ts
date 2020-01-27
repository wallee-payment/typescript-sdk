'use strict';


class SubscriptionComponentConfiguration {

        /**
        * 
        */
    'component'?: number;

        /**
        * 
        */
    'quantity'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "component",
        "baseName": "component",
        "type": "number"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionComponentConfiguration.attributeTypeMap;
    }
}

export { SubscriptionComponentConfiguration }
