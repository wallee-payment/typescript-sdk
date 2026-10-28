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
 * @interface PaymentTerminalAddressCreate
 */
export interface PaymentTerminalAddressCreate {
    /**
     * The two-letter country code (ISO 3166 format).
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    country: string;
    /**
     * The phone number of a mobile phone.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    mobilePhoneNumber?: string;
    /**
     * The organization's name.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    organizationName?: string;
    /**
     * The city, town or village.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    city?: string;
    /**
     * The given or first name.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    givenName?: string;
    /**
     * The postal code, also known as ZIP, postcode, etc.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    postcode?: string;
    /**
     * The dependent locality which is a sub-division of the state.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    dependentLocality?: string;
    /**
     * The email address.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    emailAddress?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    phoneNumber?: string;
    /**
     * The sorting code identifying the post office where the PO Box is located.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    sortingCode?: string;
    /**
     * The street or PO Box.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    street?: string;
    /**
     * The family or last name.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    familyName?: string;
    /**
     * The name of the region, typically a state, county, province or prefecture.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    postalState?: string;
    /**
     * The salutation e.g. Mrs, Mr, Dr.
     * @type {string}
     * @memberof PaymentTerminalAddressCreate
     */
    salutation?: string;
}

/**
 * Check if a given object implements the PaymentTerminalAddressCreate interface.
 */
export function instanceOfPaymentTerminalAddressCreate(value: object): value is PaymentTerminalAddressCreate {
    if (!('country' in value) || value['country'] === undefined) return false;
    return true;
}

export function PaymentTerminalAddressCreateFromJSON(json: any): PaymentTerminalAddressCreate {
    return PaymentTerminalAddressCreateFromJSONTyped(json, false);
}

export function PaymentTerminalAddressCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalAddressCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'],
        'mobilePhoneNumber': json['mobilePhoneNumber'] == null ? undefined : json['mobilePhoneNumber'],
        'organizationName': json['organizationName'] == null ? undefined : json['organizationName'],
        'city': json['city'] == null ? undefined : json['city'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
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

export function PaymentTerminalAddressCreateToJSON(json: any): PaymentTerminalAddressCreate {
    return PaymentTerminalAddressCreateToJSONTyped(json, false);
}

export function PaymentTerminalAddressCreateToJSONTyped(value?: PaymentTerminalAddressCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'mobilePhoneNumber': value['mobilePhoneNumber'],
        'organizationName': value['organizationName'],
        'city': value['city'],
        'givenName': value['givenName'],
        'postcode': value['postcode'],
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

