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
 * @interface ApplicationUserUpdate
 */
export interface ApplicationUserUpdate {
    /**
     * The maximum number of API requests that are accepted every 2 minutes.
     * @type {number}
     * @memberof ApplicationUserUpdate
     */
    requestLimit?: number;
    /**
     * The name used to identify the application user.
     * @type {string}
     * @memberof ApplicationUserUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ApplicationUserUpdate
     */
    state?: CreationEntityState;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof ApplicationUserUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the ApplicationUserUpdate interface.
 */
export function instanceOfApplicationUserUpdate(value: object): value is ApplicationUserUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ApplicationUserUpdateFromJSON(json: any): ApplicationUserUpdate {
    return ApplicationUserUpdateFromJSONTyped(json, false);
}

export function ApplicationUserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'],
    };
}

export function ApplicationUserUpdateToJSON(value?: ApplicationUserUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'requestLimit': value['requestLimit'],
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'version': value['version'],
    };
}

