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
 * @interface SingleSignOnUser
 */
export interface SingleSignOnUser {
    /**
     * The user's first name.
     * @type {string}
     * @memberof SingleSignOnUser
     */
    readonly firstname?: string;
    /**
     * The single sign-on provider that this user belongs to.
     * @type {number}
     * @memberof SingleSignOnUser
     */
    readonly provider?: number;
    /**
     * The scope that the user belongs to.
     * @type {number}
     * @memberof SingleSignOnUser
     */
    readonly scope?: number;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof SingleSignOnUser
     */
    readonly timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof SingleSignOnUser
     */
    readonly language?: string;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof SingleSignOnUser
     */
    readonly primaryAccount?: number;
    /**
     * The user's last name.
     * @type {string}
     * @memberof SingleSignOnUser
     */
    readonly lastname?: string;
}

/**
 * Check if a given object implements the SingleSignOnUser interface.
 */
export function instanceOfSingleSignOnUser(value: object): value is SingleSignOnUser {
    return true;
}

export function SingleSignOnUserFromJSON(json: any): SingleSignOnUser {
    return SingleSignOnUserFromJSONTyped(json, false);
}

export function SingleSignOnUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleSignOnUser {
    if (json == null) {
        return json;
    }
    return {
        
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'primaryAccount': json['primaryAccount'] == null ? undefined : json['primaryAccount'],
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
    };
}

export function SingleSignOnUserToJSON(json: any): SingleSignOnUser {
    return SingleSignOnUserToJSONTyped(json, false);
}

export function SingleSignOnUserToJSONTyped(value?: Omit<SingleSignOnUser, 'firstname'|'provider'|'scope'|'timeZone'|'language'|'primaryAccount'|'lastname'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

