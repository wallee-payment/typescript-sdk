'use strict';
import { AbstractHumanUserUpdate } from "./AbstractHumanUserUpdate";


class HumanUserCreate extends AbstractHumanUserUpdate {

        /**
        * The primary account links the user to a specific account.
        */
    'primaryAccount'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HumanUserCreate.attributeTypeMap);
    }
}

export { HumanUserCreate }
