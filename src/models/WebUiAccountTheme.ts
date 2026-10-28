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
 * @interface WebUiAccountTheme
 */
export interface WebUiAccountTheme {
    /**
     * 
     * @type {string}
     * @memberof WebUiAccountTheme
     */
    properties?: string;
}

/**
 * Check if a given object implements the WebUiAccountTheme interface.
 */
export function instanceOfWebUiAccountTheme(value: object): value is WebUiAccountTheme {
    return true;
}

export function WebUiAccountThemeFromJSON(json: any): WebUiAccountTheme {
    return WebUiAccountThemeFromJSONTyped(json, false);
}

export function WebUiAccountThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebUiAccountTheme {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}

export function WebUiAccountThemeToJSON(json: any): WebUiAccountTheme {
    return WebUiAccountThemeToJSONTyped(json, false);
}

export function WebUiAccountThemeToJSONTyped(value?: WebUiAccountTheme | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'properties': value['properties'],
    };
}

