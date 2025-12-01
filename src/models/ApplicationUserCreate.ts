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
 * @interface ApplicationUserCreate
 */
export interface ApplicationUserCreate {
    /**
     * The maximum number of API requests that are accepted every 2 minutes.
     * @type {number}
     * @memberof ApplicationUserCreate
     */
    requestLimit?: number;
    /**
     * The name used to identify the application user.
     * @type {string}
     * @memberof ApplicationUserCreate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ApplicationUserCreate
     */
    state?: CreationEntityState;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof ApplicationUserCreate
     */
    primaryAccount: number;
}



/**
 * Check if a given object implements the ApplicationUserCreate interface.
 */
export function instanceOfApplicationUserCreate(value: object): value is ApplicationUserCreate {
    if (!('primaryAccount' in value) || value['primaryAccount'] === undefined) return false;
    return true;
}

export function ApplicationUserCreateFromJSON(json: any): ApplicationUserCreate {
    return ApplicationUserCreateFromJSONTyped(json, false);
}

export function ApplicationUserCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'primaryAccount': json['primaryAccount'],
    };
}

export function ApplicationUserCreateToJSON(json: any): ApplicationUserCreate {
    return ApplicationUserCreateToJSONTyped(json, false);
}

export function ApplicationUserCreateToJSONTyped(value?: ApplicationUserCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'requestLimit': value['requestLimit'],
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'primaryAccount': value['primaryAccount'],
    };
}

