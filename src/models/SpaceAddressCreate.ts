'use strict';


class SpaceAddressCreate {

        /**
        * The city, town or village.
        */
    'city'?: string;

        /**
        * The two-letter country code (ISO 3166 format).
        */
    'country'?: string;

        /**
        * The dependent locality which is a sub-division of the state.
        */
    'dependentLocality'?: string;

        /**
        * The email address used for communication with clients.
        */
    'emailAddress'?: string;

        /**
        * The family or last name.
        */
    'familyName'?: string;

        /**
        * The given or first name.
        */
    'givenName'?: string;

        /**
        * The phone number of a mobile phone.
        */
    'mobilePhoneNumber'?: string;

        /**
        * The organization's name.
        */
    'organizationName'?: string;

        /**
        * The phone number.
        */
    'phoneNumber'?: string;

        /**
        * The name of the region, typically a state, county, province or prefecture.
        */
    'postalState'?: string;

        /**
        * The postal code, also known as ZIP, postcode, etc.
        */
    'postcode'?: string;

        /**
        * The sales tax number of the organization.
        */
    'salesTaxNumber'?: string;

        /**
        * The salutation e.g. Mrs, Mr, Dr.
        */
    'salutation'?: string;

        /**
        * The sorting code identifying the post office where the PO Box is located.
        */
    'sortingCode'?: string;

        /**
        * The street or PO Box.
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
        "name": "salesTaxNumber",
        "baseName": "salesTaxNumber",
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
        return SpaceAddressCreate.attributeTypeMap;
    }
}

export { SpaceAddressCreate }
