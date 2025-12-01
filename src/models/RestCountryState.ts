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
 * @interface RestCountryState
 */
export interface RestCountryState {
    /**
     * The state's code used within addresses.
     * @type {string}
     * @memberof RestCountryState
     */
    readonly code?: string;
    /**
     * The two-letter code of the state's country (ISO 3166-1 alpha-2 format).
     * @type {string}
     * @memberof RestCountryState
     */
    readonly countryCode?: string;
    /**
     * The name of the state.
     * @type {string}
     * @memberof RestCountryState
     */
    readonly name?: string;
    /**
     * The state's code in ISO 3166-2 format.
     * @type {string}
     * @memberof RestCountryState
     */
    readonly id?: string;
}

/**
 * Check if a given object implements the RestCountryState interface.
 */
export function instanceOfRestCountryState(value: object): value is RestCountryState {
    return true;
}

export function RestCountryStateFromJSON(json: any): RestCountryState {
    return RestCountryStateFromJSONTyped(json, false);
}

export function RestCountryStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestCountryState {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'countryCode': json['countryCode'] == null ? undefined : json['countryCode'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function RestCountryStateToJSON(json: any): RestCountryState {
    return RestCountryStateToJSONTyped(json, false);
}

export function RestCountryStateToJSONTyped(value?: Omit<RestCountryState, 'code'|'countryCode'|'name'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

