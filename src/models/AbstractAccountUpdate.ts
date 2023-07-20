'use strict';


class AbstractAccountUpdate {

        /**
        * The date and time when the object was last modified.
        */
    'lastModifiedDate'?: Date;

        /**
        * The name used to identify the account.
        */
    'name'?: string;

        /**
        * The number of sub-accounts that can be created within this account.
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
