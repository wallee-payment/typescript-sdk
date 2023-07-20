'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractWebhookUrlUpdate {

        /**
        * The name used to identify the webhook URL.
        */
    'name'?: string;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The actual URL where notifications about entity changes are sent to.
        */
    'url'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractWebhookUrlUpdate.attributeTypeMap;
    }
}

export { AbstractWebhookUrlUpdate }
