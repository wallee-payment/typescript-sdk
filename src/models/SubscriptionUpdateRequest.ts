'use strict';


class SubscriptionUpdateRequest {

        /**
        * A description used to identify the subscription.
        */
    'description'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionUpdateRequest.attributeTypeMap;
    }
}

export { SubscriptionUpdateRequest }
