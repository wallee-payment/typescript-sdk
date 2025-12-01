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
import type { ApplicationKeyState } from './ApplicationKeyState';
import {
    ApplicationKeyStateFromJSON,
    ApplicationKeyStateFromJSONTyped,
    ApplicationKeyStateToJSON,
    ApplicationKeyStateToJSONTyped,
} from './ApplicationKeyState';

/**
 * 
 * @export
 * @interface RestApplicationUserMacKey
 */
export interface RestApplicationUserMacKey {
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof RestApplicationUserMacKey
     */
    readonly creationTime?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RestApplicationUserMacKey
     */
    readonly id?: number;
    /**
     * 
     * @type {ApplicationKeyState}
     * @memberof RestApplicationUserMacKey
     */
    state?: ApplicationKeyState;
}



/**
 * Check if a given object implements the RestApplicationUserMacKey interface.
 */
export function instanceOfRestApplicationUserMacKey(value: object): value is RestApplicationUserMacKey {
    return true;
}

export function RestApplicationUserMacKeyFromJSON(json: any): RestApplicationUserMacKey {
    return RestApplicationUserMacKeyFromJSONTyped(json, false);
}

export function RestApplicationUserMacKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestApplicationUserMacKey {
    if (json == null) {
        return json;
    }
    return {
        
        'creationTime': json['creationTime'] == null ? undefined : (new Date(json['creationTime'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ApplicationKeyStateFromJSON(json['state']),
    };
}

export function RestApplicationUserMacKeyToJSON(json: any): RestApplicationUserMacKey {
    return RestApplicationUserMacKeyToJSONTyped(json, false);
}

export function RestApplicationUserMacKeyToJSONTyped(value?: Omit<RestApplicationUserMacKey, 'creationTime'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': ApplicationKeyStateToJSON(value['state']),
    };
}

