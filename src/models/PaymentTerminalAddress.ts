'use strict';


class PaymentTerminalAddress {

        /**
        * 
        */
    'city'?: string;

        /**
        * 
        */
    'country'?: string;

        /**
        * 
        */
    'dependentLocality'?: string;

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
    'mobilePhoneNumber'?: string;

        /**
        * 
        */
    'organizationName'?: string;

        /**
        * 
        */
    'phoneNumber'?: string;

        /**
        * 
        */
    'postalState'?: string;

        /**
        * 
        */
    'postcode'?: string;

        /**
        * 
        */
    'salutation'?: string;

        /**
        * The sorting code identifies the post office at which the post box is located in.
        */
    'sortingCode'?: string;

        /**
        * 
        */
    'street'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "city",
        "baseName": "city",
        "type": "string"
        },
        
        {
        "name": "country",
        "baseName": "country",
        "type": "string"
        },
        
        {
        "name": "dependentLocality",
        "baseName": "dependentLocality",
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
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "string"
        },
        
        {
        "name": "organizationName",
        "baseName": "organizationName",
        "type": "string"
        },
        
        {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
        },
        
        {
        "name": "postalState",
        "baseName": "postalState",
        "type": "string"
        },
        
        {
        "name": "postcode",
        "baseName": "postcode",
        "type": "string"
        },
        
        {
        "name": "salutation",
        "baseName": "salutation",
        "type": "string"
        },
        
        {
        "name": "sortingCode",
        "baseName": "sortingCode",
        "type": "string"
        },
        
        {
        "name": "street",
        "baseName": "street",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalAddress.attributeTypeMap;
    }
}

export { PaymentTerminalAddress }
