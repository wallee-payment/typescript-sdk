'use strict';
import { AbstractSubscriberUpdate } from "./AbstractSubscriberUpdate";
import { CreationEntityState } from "./CreationEntityState";


class SubscriberCreate extends AbstractSubscriberUpdate {

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
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
