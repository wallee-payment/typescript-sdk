'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractApplicationUserUpdate {

        /**
        * The user name is used to identify the application user in administrative interfaces.
        */
    'name'?: string;

        /**
        * The request limit defines the maximum number of API request accepted within 2 minutes. This limit can only be changed with special privileges.
        */
    'requestLimit'?: number;

        /**
        * 
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
