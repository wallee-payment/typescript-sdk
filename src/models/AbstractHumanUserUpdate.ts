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
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface AbstractHumanUserUpdate
 */
export interface AbstractHumanUserUpdate {
    /**
     * The user's mobile phone number.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    mobilePhoneNumber?: string;
    /**
     * Whether two-factor authentication is enabled for this user.
     * @type {boolean}
     * @memberof AbstractHumanUserUpdate
     */
    twoFactorEnabled?: boolean;
    /**
     * The user's email address.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    emailAddress?: string;
    /**
     * The user's first name.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    firstname?: string;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractHumanUserUpdate
     */
    state?: CreationEntityState;
    /**
     * The user's last name.
     * @type {string}
     * @memberof AbstractHumanUserUpdate
     */
    lastname?: string;
}



/**
 * Check if a given object implements the AbstractHumanUserUpdate interface.
 */
export function instanceOfAbstractHumanUserUpdate(value: object): value is AbstractHumanUserUpdate {
    return true;
}

export function AbstractHumanUserUpdateFromJSON(json: any): AbstractHumanUserUpdate {
    return AbstractHumanUserUpdateFromJSONTyped(json, false);
}

export function AbstractHumanUserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractHumanUserUpdate {
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
    };
}

export function AbstractHumanUserUpdateToJSON(json: any): AbstractHumanUserUpdate {
    return AbstractHumanUserUpdateToJSONTyped(json, false);
}

export function AbstractHumanUserUpdateToJSONTyped(value?: AbstractHumanUserUpdate | null, ignoreDiscriminator: boolean = false): any {
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
    };
}

