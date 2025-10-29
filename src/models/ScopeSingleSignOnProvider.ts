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
import type { Scope } from './Scope';
import {
    ScopeFromJSON,
    ScopeFromJSONTyped,
    ScopeToJSON,
} from './Scope';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface ScopeSingleSignOnProvider
 */
export interface ScopeSingleSignOnProvider {
    /**
     * The URL where the user will be redirected to sign in.
     * @type {string}
     * @memberof ScopeSingleSignOnProvider
     */
    readonly signInUrl?: string;
    /**
     * 
     * @type {Scope}
     * @memberof ScopeSingleSignOnProvider
     */
    scope?: Scope;
    /**
     * The name used to identify the provider.
     * @type {string}
     * @memberof ScopeSingleSignOnProvider
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ScopeSingleSignOnProvider
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ScopeSingleSignOnProvider
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ScopeSingleSignOnProvider
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ScopeSingleSignOnProvider
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the ScopeSingleSignOnProvider interface.
 */
export function instanceOfScopeSingleSignOnProvider(value: object): value is ScopeSingleSignOnProvider {
    return true;
}

export function ScopeSingleSignOnProviderFromJSON(json: any): ScopeSingleSignOnProvider {
    return ScopeSingleSignOnProviderFromJSONTyped(json, false);
}

export function ScopeSingleSignOnProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopeSingleSignOnProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'signInUrl': json['signInUrl'] == null ? undefined : json['signInUrl'],
        'scope': json['scope'] == null ? undefined : ScopeFromJSON(json['scope']),
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function ScopeSingleSignOnProviderToJSON(value?: Omit<ScopeSingleSignOnProvider, 'signInUrl'|'name'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scope': ScopeToJSON(value['scope']),
        'state': CreationEntityStateToJSON(value['state']),
    };
}

