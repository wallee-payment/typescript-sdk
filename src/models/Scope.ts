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
import type { Feature } from './Feature';
import {
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './Feature';

/**
 * 
 * @export
 * @interface Scope
 */
export interface Scope {
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Scope
     */
    readonly plannedPurgeDate?: Date;
    /**
     * Whether the scope supports SSL.
     * @type {boolean}
     * @memberof Scope
     */
    readonly sslActive?: boolean;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Scope
     */
    readonly version?: number;
    /**
     * The name identifying the scope in e.g. URLs.
     * @type {string}
     * @memberof Scope
     */
    readonly machineName?: string;
    /**
     * The URL where the scope can be accessed.
     * @type {string}
     * @memberof Scope
     */
    readonly url?: string;
    /**
     * The list of features that are active in the scope.
     * @type {Set<Feature>}
     * @memberof Scope
     */
    readonly features?: Set<Feature>;
    /**
     * The themes that determine the look and feel of the scope's user interface. A fall-through strategy is applied when building the actual theme.
     * @type {Array<string>}
     * @memberof Scope
     */
    readonly themes?: Array<string>;
    /**
     * The port where the scope can be accessed.
     * @type {number}
     * @memberof Scope
     */
    readonly port?: number;
    /**
     * The preprod domain name that belongs to the scope.
     * @type {string}
     * @memberof Scope
     */
    readonly preprodDomainName?: string;
    /**
     * The domain name that belongs to the scope.
     * @type {string}
     * @memberof Scope
     */
    readonly domainName?: string;
    /**
     * The name used to identify the scope.
     * @type {string}
     * @memberof Scope
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Scope
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof Scope
     */
    state?: CreationEntityState;
    /**
     * The sandbox domain name that belongs to the scope.
     * @type {string}
     * @memberof Scope
     */
    readonly sandboxDomainName?: string;
}

/**
 * Check if a given object implements the Scope interface.
 */
export function instanceOfScope(value: object): value is Scope {
    return true;
}

export function ScopeFromJSON(json: any): Scope {
    return ScopeFromJSONTyped(json, false);
}

export function ScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scope {
    if (json == null) {
        return json;
    }
    return {
        
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'sslActive': json['sslActive'] == null ? undefined : json['sslActive'],
        'version': json['version'] == null ? undefined : json['version'],
        'machineName': json['machineName'] == null ? undefined : json['machineName'],
        'url': json['url'] == null ? undefined : json['url'],
        'features': json['features'] == null ? undefined : (new Set((json['features'] as Array<any>).map(FeatureFromJSON))),
        'themes': json['themes'] == null ? undefined : json['themes'],
        'port': json['port'] == null ? undefined : json['port'],
        'preprodDomainName': json['preprodDomainName'] == null ? undefined : json['preprodDomainName'],
        'domainName': json['domainName'] == null ? undefined : json['domainName'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'sandboxDomainName': json['sandboxDomainName'] == null ? undefined : json['sandboxDomainName'],
    };
}

export function ScopeToJSON(value?: Omit<Scope, 'plannedPurgeDate'|'sslActive'|'version'|'machineName'|'url'|'features'|'themes'|'port'|'preprodDomainName'|'domainName'|'name'|'id'|'sandboxDomainName'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

