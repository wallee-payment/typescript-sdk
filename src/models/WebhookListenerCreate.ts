'use strict';
import { AbstractWebhookListenerUpdate } from "./AbstractWebhookListenerUpdate";


class WebhookListenerCreate extends AbstractWebhookListenerUpdate {

        /**
        * The entity that is to be monitored.
        */
    'entity': number;

        /**
        * The identity used to sign messages.
        */
    'identity'?: number;

        /**
        * The URL where notifications about entity changes are sent to.
        */
    'url': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "entity",
        "baseName": "entity",
        "type": "number"
        },
        
        {
        "name": "identity",
        "baseName": "identity",
        "type": "number"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookListenerCreate.attributeTypeMap);
    }
}

export { WebhookListenerCreate }
