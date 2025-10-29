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
import type { LegalOrganizationForm } from './LegalOrganizationForm';
import {
    LegalOrganizationFormFromJSON,
    LegalOrganizationFormFromJSONTyped,
    LegalOrganizationFormToJSON,
} from './LegalOrganizationForm';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The two-letter country code (ISO 3166 format).
     * @type {string}
     * @memberof Address
     */
    readonly country?: string;
    /**
     * The phone number of a mobile phone.
     * @type {string}
     * @memberof Address
     */
    readonly mobilePhoneNumber?: string;
    /**
     * 
     * @type {Gender}
     * @memberof Address
     */
    gender?: Gender;
    /**
     * The organization's name.
     * @type {string}
     * @memberof Address
     */
    readonly organizationName?: string;
    /**
     * The city, town or village.
     * @type {string}
     * @memberof Address
     */
    readonly city?: string;
    /**
     * The commercial registration number of the organization.
     * @type {string}
     * @memberof Address
     */
    readonly commercialRegisterNumber?: string;
    /**
     * The social security number.
     * @type {string}
     * @memberof Address
     */
    readonly socialSecurityNumber?: string;
    /**
     * The given or first name.
     * @type {string}
     * @memberof Address
     */
    readonly givenName?: string;
    /**
     * The postal code, also known as ZIP, postcode, etc.
     * @type {string}
     * @memberof Address
     */
    readonly postcode?: string;
    /**
     * 
     * @type {LegalOrganizationForm}
     * @memberof Address
     */
    legalOrganizationForm?: LegalOrganizationForm;
    /**
     * The sales tax number of the organization.
     * @type {string}
     * @memberof Address
     */
    readonly salesTaxNumber?: string;
    /**
     * The date of birth.
     * @type {Date}
     * @memberof Address
     */
    readonly dateOfBirth?: Date;
    /**
     * The dependent locality which is a sub-division of the state.
     * @type {string}
     * @memberof Address
     */
    readonly dependentLocality?: string;
    /**
     * The email address.
     * @type {string}
     * @memberof Address
     */
    readonly emailAddress?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    readonly phoneNumber?: string;
    /**
     * The sorting code identifying the post office where the PO Box is located.
     * @type {string}
     * @memberof Address
     */
    readonly sortingCode?: string;
    /**
     * The street or PO Box.
     * @type {string}
     * @memberof Address
     */
    readonly street?: string;
    /**
     * The family or last name.
     * @type {string}
     * @memberof Address
     */
    readonly familyName?: string;
    /**
     * The name of the region, typically a state, county, province or prefecture.
     * @type {string}
     * @memberof Address
     */
    readonly postalState?: string;
    /**
     * The salutation e.g. Mrs, Mr, Dr.
     * @type {string}
     * @memberof Address
     */
    readonly salutation?: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
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
        'legalOrganizationForm': json['legalOrganizationForm'] == null ? undefined : LegalOrganizationFormFromJSON(json['legalOrganizationForm']),
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

export function AddressToJSON(value?: Omit<Address, 'country'|'mobilePhoneNumber'|'organizationName'|'city'|'commercialRegisterNumber'|'socialSecurityNumber'|'givenName'|'postcode'|'salesTaxNumber'|'dateOfBirth'|'dependentLocality'|'emailAddress'|'phoneNumber'|'sortingCode'|'street'|'familyName'|'postalState'|'salutation'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'gender': GenderToJSON(value['gender']),
        'legalOrganizationForm': LegalOrganizationFormToJSON(value['legalOrganizationForm']),
    };
}

