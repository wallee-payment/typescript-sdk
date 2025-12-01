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
 * @interface SingleSignOnUserUpdate
 */
export interface SingleSignOnUserUpdate {
    /**
     * The user's first name.
     * @type {string}
     * @memberof SingleSignOnUserUpdate
     */
    firstname?: string;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof SingleSignOnUserUpdate
     */
    timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof SingleSignOnUserUpdate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SingleSignOnUserUpdate
     */
    state?: CreationEntityState;
    /**
     * The user's last name.
     * @type {string}
     * @memberof SingleSignOnUserUpdate
     */
    lastname?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SingleSignOnUserUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the SingleSignOnUserUpdate interface.
 */
export function instanceOfSingleSignOnUserUpdate(value: object): value is SingleSignOnUserUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SingleSignOnUserUpdateFromJSON(json: any): SingleSignOnUserUpdate {
    return SingleSignOnUserUpdateFromJSONTyped(json, false);
}

export function SingleSignOnUserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleSignOnUserUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
        'version': json['version'],
    };
}

export function SingleSignOnUserUpdateToJSON(json: any): SingleSignOnUserUpdate {
    return SingleSignOnUserUpdateToJSONTyped(json, false);
}

export function SingleSignOnUserUpdateToJSONTyped(value?: SingleSignOnUserUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'firstname': value['firstname'],
        'timeZone': value['timeZone'],
        'language': value['language'],
        'state': CreationEntityStateToJSON(value['state']),
        'lastname': value['lastname'],
        'version': value['version'],
    };
}

