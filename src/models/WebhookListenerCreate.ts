'use strict';
import { AbstractWebhookListenerUpdate } from "./AbstractWebhookListenerUpdate";


class WebhookListenerCreate extends AbstractWebhookListenerUpdate {

        /**
        * The listener listens on state changes of the entity linked with the listener.
        */
    'entity': number;

        /**
        * The identity which will be used to sign messages sent by this listener.
        */
    'identity'?: number;

        /**
        * The URL which is invoked by the listener to notify the application about the event.
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
