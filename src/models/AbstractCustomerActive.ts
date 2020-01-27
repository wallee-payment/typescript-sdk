'use strict';


class AbstractCustomerActive {

        /**
        * 
        */
    'customerId'?: string;

        /**
        * 
        */
    'emailAddress'?: string;

        /**
        * 
        */
    'familyName'?: string;

        /**
        * 
        */
    'givenName'?: string;

        /**
        * 
        */
    'language'?: string;

        /**
        * Meta data allow to store additional data along the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * 
        */
    'preferredCurrency'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
        },
        
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "familyName",
        "baseName": "familyName",
        "type": "string"
        },
        
        {
        "name": "givenName",
        "baseName": "givenName",
        "type": "string"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "preferredCurrency",
        "baseName": "preferredCurrency",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractCustomerActive.attributeTypeMap;
    }
}

export { AbstractCustomerActive }
