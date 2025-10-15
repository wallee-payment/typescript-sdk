'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractWebhookListenerUpdate {

        /**
        * The entity's target states that are to be monitored.
        */
    'entityStates'?: Array<string>;

        /**
        * The name used to identify the webhook listener.
        */
    'name'?: string;

        /**
        * Whether every update of the entity or only state changes are to be monitored.
        */
    'notifyEveryChange'?: boolean;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "entityStates",
        "baseName": "entityStates",
        "type": "Array<string>"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "notifyEveryChange",
        "baseName": "notifyEveryChange",
        "type": "boolean"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractWebhookListenerUpdate.attributeTypeMap;
    }
}

export { AbstractWebhookListenerUpdate }
