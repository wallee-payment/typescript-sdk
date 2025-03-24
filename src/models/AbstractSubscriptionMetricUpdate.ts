'use strict';


class AbstractSubscriptionMetricUpdate {

        /**
        * The localized description of the metric that is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * The localized name of the metric that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractSubscriptionMetricUpdate.attributeTypeMap;
    }
}

export { AbstractSubscriptionMetricUpdate }
