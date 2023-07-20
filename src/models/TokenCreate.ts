'use strict';
import { AbstractTokenUpdate } from "./AbstractTokenUpdate";
import { CreationEntityState } from "./CreationEntityState";


class TokenCreate extends AbstractTokenUpdate {

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TokenCreate.attributeTypeMap);
    }
}

export { TokenCreate }
