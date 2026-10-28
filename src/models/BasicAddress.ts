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
 * @interface BasicAddress
 */
export interface BasicAddress {
    /**
     * 
     * @type {string}
     * @memberof BasicAddress
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAddress
     */
    sortingCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAddress
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAddress
     */
    postCode?: string;
}

/**
 * Check if a given object implements the BasicAddress interface.
 */
export function instanceOfBasicAddress(value: object): value is BasicAddress {
    return true;
}

export function BasicAddressFromJSON(json: any): BasicAddress {
    return BasicAddressFromJSONTyped(json, false);
}

export function BasicAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'sortingCode': json['sortingCode'] == null ? undefined : json['sortingCode'],
        'city': json['city'] == null ? undefined : json['city'],
        'street': json['street'] == null ? undefined : json['street'],
        'postCode': json['postCode'] == null ? undefined : json['postCode'],
    };
}

export function BasicAddressToJSON(json: any): BasicAddress {
    return BasicAddressToJSONTyped(json, false);
}

export function BasicAddressToJSONTyped(value?: BasicAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'sortingCode': value['sortingCode'],
        'city': value['city'],
        'street': value['street'],
        'postCode': value['postCode'],
    };
}

