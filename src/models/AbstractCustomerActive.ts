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
 * @interface AbstractCustomerActive
 */
export interface AbstractCustomerActive {
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof AbstractCustomerActive
     */
    metaData?: { [key: string]: string; };
    /**
     * The customer's email address.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    emailAddress?: string;
    /**
     * The customer's family or last name.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    familyName?: string;
    /**
     * The customer's given or first name.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    givenName?: string;
    /**
     * The customer's preferred currency.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    preferredCurrency?: string;
    /**
     * The customer's ID in the merchant's system.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    customerId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof AbstractCustomerActive
     */
    language?: string;
}

/**
 * Check if a given object implements the AbstractCustomerActive interface.
 */
export function instanceOfAbstractCustomerActive(value: object): value is AbstractCustomerActive {
    return true;
}

export function AbstractCustomerActiveFromJSON(json: any): AbstractCustomerActive {
    return AbstractCustomerActiveFromJSONTyped(json, false);
}

export function AbstractCustomerActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractCustomerActive {
    if (json == null) {
        return json;
    }
    return {
        
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'preferredCurrency': json['preferredCurrency'] == null ? undefined : json['preferredCurrency'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'language': json['language'] == null ? undefined : json['language'],
    };
}

export function AbstractCustomerActiveToJSON(json: any): AbstractCustomerActive {
    return AbstractCustomerActiveToJSONTyped(json, false);
}

export function AbstractCustomerActiveToJSONTyped(value?: AbstractCustomerActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'metaData': value['metaData'],
        'emailAddress': value['emailAddress'],
        'familyName': value['familyName'],
        'givenName': value['givenName'],
        'preferredCurrency': value['preferredCurrency'],
        'customerId': value['customerId'],
        'language': value['language'],
    };
}

