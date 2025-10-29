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
/**
 * 
 * @export
 * @interface SpaceAddress
 */
export interface SpaceAddress {
    /**
     * The two-letter country code (ISO 3166 format).
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly country?: string;
    /**
     * The phone number of a mobile phone.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly mobilePhoneNumber?: string;
    /**
     * The organization's name.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly organizationName?: string;
    /**
     * The city, town or village.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly city?: string;
    /**
     * The given or first name.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly givenName?: string;
    /**
     * The postal code, also known as ZIP, postcode, etc.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly postcode?: string;
    /**
     * The sales tax number of the organization.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly salesTaxNumber?: string;
    /**
     * The dependent locality which is a sub-division of the state.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly dependentLocality?: string;
    /**
     * The email address used for communication with clients.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly emailAddress?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly phoneNumber?: string;
    /**
     * The sorting code identifying the post office where the PO Box is located.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly sortingCode?: string;
    /**
     * The street or PO Box.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly street?: string;
    /**
     * The family or last name.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly familyName?: string;
    /**
     * The name of the region, typically a state, county, province or prefecture.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly postalState?: string;
    /**
     * The salutation e.g. Mrs, Mr, Dr.
     * @type {string}
     * @memberof SpaceAddress
     */
    readonly salutation?: string;
}

/**
 * Check if a given object implements the SpaceAddress interface.
 */
export function instanceOfSpaceAddress(value: object): value is SpaceAddress {
    return true;
}

export function SpaceAddressFromJSON(json: any): SpaceAddress {
    return SpaceAddressFromJSONTyped(json, false);
}

export function SpaceAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'mobilePhoneNumber': json['mobilePhoneNumber'] == null ? undefined : json['mobilePhoneNumber'],
        'organizationName': json['organizationName'] == null ? undefined : json['organizationName'],
        'city': json['city'] == null ? undefined : json['city'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'salesTaxNumber': json['salesTaxNumber'] == null ? undefined : json['salesTaxNumber'],
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

export function SpaceAddressToJSON(value?: Omit<SpaceAddress, 'country'|'mobilePhoneNumber'|'organizationName'|'city'|'givenName'|'postcode'|'salesTaxNumber'|'dependentLocality'|'emailAddress'|'phoneNumber'|'sortingCode'|'street'|'familyName'|'postalState'|'salutation'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

