'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { WebhookIdentity } from "./WebhookIdentity";
import { WebhookUrl } from "./WebhookUrl";


class WebhookListener {

        /**
        * The entity that is to be monitored.
        */
    'entity'?: number;

        /**
        * The entity's target states that are to be monitored.
        */
    'entityStates'?: Array<string>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The identity used to sign messages.
        */
    'identity'?: WebhookIdentity;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name used to identify the webhook listener.
        */
    'name'?: string;

        /**
        * Whether every update of the entity or only state changes are to be monitored.
        */
    'notifyEveryChange'?: boolean;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The URL where notifications about entity changes are sent to.
        */
    'url'?: WebhookUrl;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "entity",
        "baseName": "entity",
        "type": "number"
        },
        
        {
        "name": "entityStates",
        "baseName": "entityStates",
        "type": "Array<string>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "identity",
        "baseName": "identity",
        "type": "WebhookIdentity"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "WebhookUrl"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return WebhookListener.attributeTypeMap;
    }
}

export { WebhookListener }
