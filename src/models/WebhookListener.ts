'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { WebhookIdentity } from "./WebhookIdentity";
import { WebhookUrl } from "./WebhookUrl";


class WebhookListener {

        /**
        * The listener listens on state changes of the entity linked with the listener.
        */
    'entity'?: number;

        /**
        * The target state identifies the state into which entities need to move into to trigger the webhook listener.
        */
    'entityStates'?: Array<string>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The identity which will be used to sign messages sent by this listener.
        */
    'identity'?: WebhookIdentity;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The webhook listener name is used internally to identify the webhook listener in administrative interfaces.For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * Defines whether the webhook listener is to be informed about every change made to the entity in contrast to state transitions only.
        */
    'notifyEveryChange'?: boolean;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The URL which is invoked by the listener to notify the application about the event.
        */
    'url'?: WebhookUrl;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
