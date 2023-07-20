'use strict';


class AbstractCustomerActive {

        /**
        * The customer's ID in the merchant's system.
        */
    'customerId'?: string;

        /**
        * The customer's email address.
        */
    'emailAddress'?: string;

        /**
        * The customer's family or last name.
        */
    'familyName'?: string;

        /**
        * The customer's given or first name.
        */
    'givenName'?: string;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * Allow to store additional information about the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The customer's preferred currency.
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
