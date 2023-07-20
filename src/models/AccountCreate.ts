'use strict';
import { AbstractAccountUpdate } from "./AbstractAccountUpdate";


class AccountCreate extends AbstractAccountUpdate {

        /**
        * The parent account responsible for administering this account.
        */
    'parentAccount'?: number;

        /**
        * The scope that the account belongs to.
        */
    'scope': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "parentAccount",
        "baseName": "parentAccount",
        "type": "number"
        },
        
        {
        "name": "scope",
        "baseName": "scope",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AccountCreate.attributeTypeMap);
    }
}

export { AccountCreate }
