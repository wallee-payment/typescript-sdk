'use strict';
import { AbstractApplicationUserUpdate } from "./AbstractApplicationUserUpdate";


class ApplicationUserCreate extends AbstractApplicationUserUpdate {

        /**
        * The primary account that the user belongs to.
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
