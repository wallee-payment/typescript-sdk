'use strict';
import { ApplicationUser } from "./ApplicationUser";


class ApplicationUserCreateWithMacKey extends ApplicationUser {

        /**
        * 
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
