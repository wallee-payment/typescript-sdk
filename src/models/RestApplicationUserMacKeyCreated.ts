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
} from './ApplicationKeyState';

/**
 * 
 * @export
 * @interface RestApplicationUserMacKeyCreated
 */
export interface RestApplicationUserMacKeyCreated {
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof RestApplicationUserMacKeyCreated
     */
    readonly creationTime?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RestApplicationUserMacKeyCreated
     */
    readonly id?: number;
    /**
     * 
     * @type {ApplicationKeyState}
     * @memberof RestApplicationUserMacKeyCreated
     */
    state?: ApplicationKeyState;
    /**
     * The actual key to authenticate API requests.
     * @type {string}
     * @memberof RestApplicationUserMacKeyCreated
     */
    readonly key?: string;
}

/**
 * Check if a given object implements the RestApplicationUserMacKeyCreated interface.
 */
export function instanceOfRestApplicationUserMacKeyCreated(value: object): value is RestApplicationUserMacKeyCreated {
    return true;
}

export function RestApplicationUserMacKeyCreatedFromJSON(json: any): RestApplicationUserMacKeyCreated {
    return RestApplicationUserMacKeyCreatedFromJSONTyped(json, false);
}

export function RestApplicationUserMacKeyCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestApplicationUserMacKeyCreated {
    if (json == null) {
        return json;
    }
    return {
        
        'creationTime': json['creationTime'] == null ? undefined : (new Date(json['creationTime'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ApplicationKeyStateFromJSON(json['state']),
        'key': json['key'] == null ? undefined : json['key'],
    };
}

export function RestApplicationUserMacKeyCreatedToJSON(value?: Omit<RestApplicationUserMacKeyCreated, 'creationTime'|'id'|'key'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': ApplicationKeyStateToJSON(value['state']),
    };
}

