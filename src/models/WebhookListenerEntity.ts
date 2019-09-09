'use strict';


class WebhookListenerEntity {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
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
