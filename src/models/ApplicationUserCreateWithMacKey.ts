'use strict';
import { ApplicationUser } from "./ApplicationUser";


class ApplicationUserCreateWithMacKey extends ApplicationUser {

        /**
        * The user's authentication key securing requests. Only displayed a single time after the user has been created.
        */
    'macKey'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "macKey",
        "baseName": "macKey",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUserCreateWithMacKey.attributeTypeMap);
    }
}

export { ApplicationUserCreateWithMacKey }
