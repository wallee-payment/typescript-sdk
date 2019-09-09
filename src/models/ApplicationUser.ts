'use strict';
import { Account } from "./Account";
import { User } from "./User";


class ApplicationUser extends User {

        /**
        * The user name is used to identify the application user in administrative interfaces.
        */
    'name'?: string;

        /**
        * The account that this user is associated with. The account owner will be able to manage this user.
        */
    'primaryAccount'?: Account;

        /**
        * The request limit defines the maximum number of API request accepted within 2 minutes. This limit can only be changed with special privileges.
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
        "type": "Account"
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
