'use strict';
import { AbstractSubscriberUpdate } from "./AbstractSubscriberUpdate";
import { CreationEntityState } from "./CreationEntityState";


class SubscriberCreate extends AbstractSubscriberUpdate {

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriberCreate.attributeTypeMap);
    }
}

export { SubscriberCreate }
