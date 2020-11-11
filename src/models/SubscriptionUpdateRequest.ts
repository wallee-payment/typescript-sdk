'use strict';


class SubscriptionUpdateRequest {

        /**
        * 
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
