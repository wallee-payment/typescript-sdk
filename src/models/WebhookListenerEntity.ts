'use strict';


class WebhookListenerEntity {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The name used to identify the webhook listener entity.
        */
    'name'?: { [key: string]: string; };

        /**
        * The name used to programmatically identify the webhook listener entity.
        */
    'technicalName'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "technicalName",
        "baseName": "technicalName",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return WebhookListenerEntity.attributeTypeMap;
    }
}

export { WebhookListenerEntity }
