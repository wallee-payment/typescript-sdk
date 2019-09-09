'use strict';


class AbstractAccountUpdate {

        /**
        * The name of the account identifies the account within the administrative interface.
        */
    'name'?: string;

        /**
        * This property restricts the number of subaccounts which can be created within this account.
        */
    'subaccountLimit'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "subaccountLimit",
        "baseName": "subaccountLimit",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractAccountUpdate.attributeTypeMap;
    }
}

export { AbstractAccountUpdate }
