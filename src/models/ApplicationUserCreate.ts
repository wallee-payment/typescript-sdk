'use strict';
import { AbstractApplicationUserUpdate } from "./AbstractApplicationUserUpdate";


class ApplicationUserCreate extends AbstractApplicationUserUpdate {

        /**
        * The account that this user is associated with. The account owner will be able to manage this user.
        */
    'primaryAccount': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUserCreate.attributeTypeMap);
    }
}

export { ApplicationUserCreate }
