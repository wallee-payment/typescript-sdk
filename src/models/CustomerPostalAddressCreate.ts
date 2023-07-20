'use strict';
import { Gender } from "./Gender";


class CustomerPostalAddressCreate {

        /**
        * The city, town or village.
        */
    'city'?: string;

        /**
        * The commercial registration number of the organization.
        */
    'commercialRegisterNumber'?: string;

        /**
        * The two-letter country code (ISO 3166 format).
        */
    'country'?: string;

        /**
        * The date of birth.
        */
    'dateOfBirth'?: string;

        /**
        * The dependent locality which is a sub-division of the state.
        */
    'dependentLocality'?: string;

        /**
        * The email address.
        */
    'emailAddress'?: string;

        /**
        * The family or last name.
        */
    'familyName'?: string;

        /**
        * The gender.
        */
    'gender'?: Gender;

        /**
        * The given or first name.
        */
    'givenName'?: string;

        /**
        * The legal form of the organization.
        */
    'legalOrganizationForm'?: number;

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
        * The social security number.
        */
    'socialSecurityNumber'?: string;

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
