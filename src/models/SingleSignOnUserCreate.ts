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
 * @interface SingleSignOnUserCreate
 */
export interface SingleSignOnUserCreate {
    /**
     * The user's first name.
     * @type {string}
     * @memberof SingleSignOnUserCreate
     */
    firstname?: string;
    /**
     * The user's time zone. If none is specified, the one provided by the browser will be used.
     * @type {string}
     * @memberof SingleSignOnUserCreate
     */
    timeZone?: string;
    /**
     * The user's preferred language.
     * @type {string}
     * @memberof SingleSignOnUserCreate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SingleSignOnUserCreate
     */
    state?: CreationEntityState;
    /**
     * The user's last name.
     * @type {string}
     * @memberof SingleSignOnUserCreate
     */
    lastname?: string;
    /**
     * The single sign-on provider that this user belongs to.
     * @type {number}
     * @memberof SingleSignOnUserCreate
     */
    provider: number;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof SingleSignOnUserCreate
     */
    primaryAccount?: number;
}

/**
 * Check if a given object implements the SingleSignOnUserCreate interface.
 */
export function instanceOfSingleSignOnUserCreate(value: object): value is SingleSignOnUserCreate {
    if (!('provider' in value) || value['provider'] === undefined) return false;
    return true;
}

export function SingleSignOnUserCreateFromJSON(json: any): SingleSignOnUserCreate {
    return SingleSignOnUserCreateFromJSONTyped(json, false);
}

export function SingleSignOnUserCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleSignOnUserCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
        'provider': json['provider'],
        'primaryAccount': json['primaryAccount'] == null ? undefined : json['primaryAccount'],
    };
}

export function SingleSignOnUserCreateToJSON(value?: SingleSignOnUserCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'firstname': value['firstname'],
        'timeZone': value['timeZone'],
        'language': value['language'],
        'state': CreationEntityStateToJSON(value['state']),
        'lastname': value['lastname'],
        'provider': value['provider'],
        'primaryAccount': value['primaryAccount'],
    };
}

