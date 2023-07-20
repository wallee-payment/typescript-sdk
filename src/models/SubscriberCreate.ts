'use strict';
import { AbstractSubscriberUpdate } from "./AbstractSubscriberUpdate";
import { CreationEntityState } from "./CreationEntityState";


class SubscriberCreate extends AbstractSubscriberUpdate {

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
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
