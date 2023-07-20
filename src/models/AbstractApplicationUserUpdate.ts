'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractApplicationUserUpdate {

        /**
        * The name used to identify the application user.
        */
    'name'?: string;

        /**
        * The maximum number of API requests that are accepted every 2 minutes.
        */
    'requestLimit'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractApplicationUserUpdate.attributeTypeMap;
    }
}

export { AbstractApplicationUserUpdate }
