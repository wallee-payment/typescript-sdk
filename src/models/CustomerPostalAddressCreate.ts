'use strict';
import { Gender } from "./Gender";


class CustomerPostalAddressCreate {

        /**
        * 
        */
    'city'?: string;

        /**
        * 
        */
    'commercialRegisterNumber'?: string;

        /**
        * 
        */
    'country'?: string;

        /**
        * 
        */
    'dateOfBirth'?: string;

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
    'gender'?: Gender;

        /**
        * 
        */
    'givenName'?: string;

        /**
        * 
        */
    'legalOrganizationForm'?: number;

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
    'salesTaxNumber'?: string;

        /**
        * 
        */
    'salutation'?: string;

        /**
        * 
        */
    'socialSecurityNumber'?: string;

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
        "name": "commercialRegisterNumber",
        "baseName": "commercialRegisterNumber",
        "type": "string"
        },
        
        {
        "name": "country",
        "baseName": "country",
        "type": "string"
        },
        
        {
        "name": "dateOfBirth",
        "baseName": "dateOfBirth",
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
        "name": "gender",
        "baseName": "gender",
        "type": "Gender"
        },
        
        {
        "name": "givenName",
        "baseName": "givenName",
        "type": "string"
        },
        
        {
        "name": "legalOrganizationForm",
        "baseName": "legalOrganizationForm",
        "type": "number"
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
        "name": "socialSecurityNumber",
        "baseName": "socialSecurityNumber",
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
        return CustomerPostalAddressCreate.attributeTypeMap;
    }
}

export { CustomerPostalAddressCreate }
