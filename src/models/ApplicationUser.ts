'use strict';
import { User } from "./User";


class ApplicationUser extends User {

        /**
        * The name used to identify the application user.
        */
    'name'?: string;

        /**
        * The primary account that the user belongs to.
        */
    'primaryAccount'?: number;

        /**
        * The maximum number of API requests that are accepted every 2 minutes.
        */
    'requestLimit'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
        },
        
        {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUser.attributeTypeMap);
    }
}

export { ApplicationUser }
