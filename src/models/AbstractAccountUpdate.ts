'use strict';


class AbstractAccountUpdate {

        /**
        * 
        */
    'lastModifiedDate'?: Date;

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
        "name": "lastModifiedDate",
        "baseName": "lastModifiedDate",
        "type": "Date"
        },
        
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
