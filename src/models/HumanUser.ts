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
import type { TwoFactorAuthenticationType } from './TwoFactorAuthenticationType';
import {
    TwoFactorAuthenticationTypeFromJSON,
    TwoFactorAuthenticationTypeFromJSONTyped,
    TwoFactorAuthenticationTypeToJSON,
} from './TwoFactorAuthenticationType';

/**
 * 
 * @export
 * @interface HumanUser
 */
export interface HumanUser {
    /**
     * The user's mobile phone number.
     * @type {string}
     * @memberof HumanUser
     */
    readonly mobilePhoneNumber?: string;
    /**
     * Whether two-factor authentication is enabled for this user.
     * @type {boolean}
     * @memberof HumanUser
     */
    readonly twoFactorEnabled?: boolean;
    /**
     * The user's email address.
     * @type {string}
     * @memberof HumanUser
     */
    readonly emailAddress?: string;
    /**
     * The user's first name.
     * @type {string}
     * @memberof HumanUser
     */
    readonly firstname?: string;
    /**
     * Whether the user's email address has been verified.
     * @type {boolean}
     * @memberof HumanUser
     */
    readonly emailAddressVerified?: boolean;
    /**
     * The scope that the user belongs to.
     * @type {number}
     * @memberof HumanUser
     */
    readonly scope?: number;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof HumanUser
     */
    readonly timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof HumanUser
     */
    readonly language?: string;
    /**
     * 
     * @type {TwoFactorAuthenticationType}
     * @memberof HumanUser
     */
    twoFactorType?: TwoFactorAuthenticationType;
    /**
     * Whether the user's mobile phone number has been verified.
     * @type {boolean}
     * @memberof HumanUser
     */
    readonly mobilePhoneVerified?: boolean;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof HumanUser
     */
    readonly primaryAccount?: number;
    /**
     * The user's last name.
     * @type {string}
     * @memberof HumanUser
     */
    readonly lastname?: string;
}

/**
 * Check if a given object implements the HumanUser interface.
 */
export function instanceOfHumanUser(value: object): value is HumanUser {
    return true;
}

export function HumanUserFromJSON(json: any): HumanUser {
    return HumanUserFromJSONTyped(json, false);
}

export function HumanUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): HumanUser {
    if (json == null) {
        return json;
    }
    return {
        
        'mobilePhoneNumber': json['mobilePhoneNumber'] == null ? undefined : json['mobilePhoneNumber'],
        'twoFactorEnabled': json['twoFactorEnabled'] == null ? undefined : json['twoFactorEnabled'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'emailAddressVerified': json['emailAddressVerified'] == null ? undefined : json['emailAddressVerified'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'twoFactorType': json['twoFactorType'] == null ? undefined : TwoFactorAuthenticationTypeFromJSON(json['twoFactorType']),
        'mobilePhoneVerified': json['mobilePhoneVerified'] == null ? undefined : json['mobilePhoneVerified'],
        'primaryAccount': json['primaryAccount'] == null ? undefined : json['primaryAccount'],
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
    };
}

export function HumanUserToJSON(value?: Omit<HumanUser, 'mobilePhoneNumber'|'twoFactorEnabled'|'emailAddress'|'firstname'|'emailAddressVerified'|'scope'|'timeZone'|'language'|'mobilePhoneVerified'|'primaryAccount'|'lastname'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'twoFactorType': TwoFactorAuthenticationTypeToJSON(value['twoFactorType']),
    };
}

