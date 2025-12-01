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
 * @interface AbstractApplicationUserUpdate
 */
export interface AbstractApplicationUserUpdate {
    /**
     * The maximum number of API requests that are accepted every 2 minutes.
     * @type {number}
     * @memberof AbstractApplicationUserUpdate
     */
    requestLimit?: number;
    /**
     * The name used to identify the application user.
     * @type {string}
     * @memberof AbstractApplicationUserUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractApplicationUserUpdate
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the AbstractApplicationUserUpdate interface.
 */
export function instanceOfAbstractApplicationUserUpdate(value: object): value is AbstractApplicationUserUpdate {
    return true;
}

export function AbstractApplicationUserUpdateFromJSON(json: any): AbstractApplicationUserUpdate {
    return AbstractApplicationUserUpdateFromJSONTyped(json, false);
}

export function AbstractApplicationUserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractApplicationUserUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function AbstractApplicationUserUpdateToJSON(json: any): AbstractApplicationUserUpdate {
    return AbstractApplicationUserUpdateToJSONTyped(json, false);
}

export function AbstractApplicationUserUpdateToJSONTyped(value?: AbstractApplicationUserUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'requestLimit': value['requestLimit'],
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

