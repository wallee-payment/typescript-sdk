'use strict';


class SubscriptionMetricType {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'feature'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
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
        "name": "feature",
        "baseName": "feature",
        "type": "number"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionMetricType.attributeTypeMap;
    }
}

export { SubscriptionMetricType }
