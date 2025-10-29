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
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface HumanUserUpdate
 */
export interface HumanUserUpdate {
    /**
     * The user's mobile phone number.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    mobilePhoneNumber?: string;
    /**
     * Whether two-factor authentication is enabled for this user.
     * @type {boolean}
     * @memberof HumanUserUpdate
     */
    twoFactorEnabled?: boolean;
    /**
     * The user's email address.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    emailAddress?: string;
    /**
     * The user's first name.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    firstname?: string;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof HumanUserUpdate
     */
    state?: CreationEntityState;
    /**
     * The user's last name.
     * @type {string}
     * @memberof HumanUserUpdate
     */
    lastname?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof HumanUserUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the HumanUserUpdate interface.
 */
export function instanceOfHumanUserUpdate(value: object): value is HumanUserUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function HumanUserUpdateFromJSON(json: any): HumanUserUpdate {
    return HumanUserUpdateFromJSONTyped(json, false);
}

export function HumanUserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): HumanUserUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'mobilePhoneNumber': json['mobilePhoneNumber'] == null ? undefined : json['mobilePhoneNumber'],
        'twoFactorEnabled': json['twoFactorEnabled'] == null ? undefined : json['twoFactorEnabled'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
        'version': json['version'],
    };
}

export function HumanUserUpdateToJSON(value?: HumanUserUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'mobilePhoneNumber': value['mobilePhoneNumber'],
        'twoFactorEnabled': value['twoFactorEnabled'],
        'emailAddress': value['emailAddress'],
        'firstname': value['firstname'],
        'timeZone': value['timeZone'],
        'language': value['language'],
        'state': CreationEntityStateToJSON(value['state']),
        'lastname': value['lastname'],
        'version': value['version'],
    };
}

