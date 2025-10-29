/* tslint:disable */
/* eslint-disable */
/**
 * Wallee AG TypeScript SDK
 *
 * This library allows to interact with the Wallee AG payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://en.wallee.com
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { mapValues } from '../runtime';
import type { Gender } from './Gender';
import {
    GenderFromJSON,
    GenderFromJSONTyped,
    GenderToJSON,
} from './Gender';

/**
 * 
 * @export
 * @interface AddressCreate
 */
export interface AddressCreate {
    /**
     * The country is represented with a two-letter code (ISO 3166-1 alpha-2 standard) - for example, CH for Switzerland.
     * @type {string}
     * @memberof AddressCreate
     */
    country?: string;
    /**
     * The phone number of a mobile phone.
     * @type {string}
     * @memberof AddressCreate
     */
    mobilePhoneNumber?: string;
    /**
     * 
     * @type {Gender}
     * @memberof AddressCreate
     */
    gender?: Gender;
    /**
     * The organization's name.
     * @type {string}
     * @memberof AddressCreate
     */
    organizationName?: string;
    /**
     * The city, town or village.
     * @type {string}
     * @memberof AddressCreate
     */
    city?: string;
    /**
     * The commercial registration number of the organization.
     * @type {string}
     * @memberof AddressCreate
     */
    commercialRegisterNumber?: string;
    /**
     * The social security number.
     * @type {string}
     * @memberof AddressCreate
     */
    socialSecurityNumber?: string;
    /**
     * The given or first name.
     * @type {string}
     * @memberof AddressCreate
     */
    givenName?: string;
    /**
     * The postal code, also known as ZIP, postcode, etc.
     * @type {string}
     * @memberof AddressCreate
     */
    postcode?: string;
    /**
     * The legal form of the organization.
     * @type {number}
     * @memberof AddressCreate
     */
    legalOrganizationForm?: number;
    /**
     * The sales tax number of the organization.
     * @type {string}
     * @memberof AddressCreate
     */
    salesTaxNumber?: string;
    /**
     * The date of birth.
     * @type {Date}
     * @memberof AddressCreate
     */
    dateOfBirth?: Date;
    /**
     * The dependent locality which is a sub-division of the state.
     * @type {string}
     * @memberof AddressCreate
     */
    dependentLocality?: string;
    /**
     * The email address.
     * @type {string}
     * @memberof AddressCreate
     */
    emailAddress?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof AddressCreate
     */
    phoneNumber?: string;
    /**
     * The sorting code identifying the post office where the PO Box is located.
     * @type {string}
     * @memberof AddressCreate
     */
    sortingCode?: string;
    /**
     * The street or PO Box.
     * @type {string}
     * @memberof AddressCreate
     */
    street?: string;
    /**
     * The family or last name.
     * @type {string}
     * @memberof AddressCreate
     */
    familyName?: string;
    /**
     * The name of the region, typically a state, county, province or prefecture.
     * @type {string}
     * @memberof AddressCreate
     */
    postalState?: string;
    /**
     * The salutation e.g. Mrs, Mr, Dr.
     * @type {string}
     * @memberof AddressCreate
     */
    salutation?: string;
}

/**
 * Check if a given object implements the AddressCreate interface.
 */
export function instanceOfAddressCreate(value: object): value is AddressCreate {
    return true;
}

export function AddressCreateFromJSON(json: any): AddressCreate {
    return AddressCreateFromJSONTyped(json, false);
}

export function AddressCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'mobilePhoneNumber': json['mobilePhoneNumber'] == null ? undefined : json['mobilePhoneNumber'],
        'gender': json['gender'] == null ? undefined : GenderFromJSON(json['gender']),
        'organizationName': json['organizationName'] == null ? undefined : json['organizationName'],
        'city': json['city'] == null ? undefined : json['city'],
        'commercialRegisterNumber': json['commercialRegisterNumber'] == null ? undefined : json['commercialRegisterNumber'],
        'socialSecurityNumber': json['socialSecurityNumber'] == null ? undefined : json['socialSecurityNumber'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'legalOrganizationForm': json['legalOrganizationForm'] == null ? undefined : json['legalOrganizationForm'],
        'salesTaxNumber': json['salesTaxNumber'] == null ? undefined : json['salesTaxNumber'],
        'dateOfBirth': json['dateOfBirth'] == null ? undefined : (new Date(json['dateOfBirth'])),
        'dependentLocality': json['dependentLocality'] == null ? undefined : json['dependentLocality'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'sortingCode': json['sortingCode'] == null ? undefined : json['sortingCode'],
        'street': json['street'] == null ? undefined : json['street'],
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'postalState': json['postalState'] == null ? undefined : json['postalState'],
        'salutation': json['salutation'] == null ? undefined : json['salutation'],
    };
}

export function AddressCreateToJSON(value?: AddressCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'country': value['country'],
        'mobilePhoneNumber': value['mobilePhoneNumber'],
        'gender': GenderToJSON(value['gender']),
        'organizationName': value['organizationName'],
        'city': value['city'],
        'commercialRegisterNumber': value['commercialRegisterNumber'],
        'socialSecurityNumber': value['socialSecurityNumber'],
        'givenName': value['givenName'],
        'postcode': value['postcode'],
        'legalOrganizationForm': value['legalOrganizationForm'],
        'salesTaxNumber': value['salesTaxNumber'],
        'dateOfBirth': value['dateOfBirth'] == null ? undefined : ((value['dateOfBirth']).toISOString().substring(0,10)),
        'dependentLocality': value['dependentLocality'],
        'emailAddress': value['emailAddress'],
        'phoneNumber': value['phoneNumber'],
        'sortingCode': value['sortingCode'],
        'street': value['street'],
        'familyName': value['familyName'],
        'postalState': value['postalState'],
        'salutation': value['salutation'],
    };
}

