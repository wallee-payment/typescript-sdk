'use strict';
import { AbstractAccountUpdate } from "./AbstractAccountUpdate";


class AccountCreate extends AbstractAccountUpdate {

        /**
        * The account which is responsible for administering the account.
        */
    'parentAccount'?: number;

        /**
        * This is the scope to which the account belongs to.
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
