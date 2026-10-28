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
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission';
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
 * @interface AbstractOAuthClientUpdate
 */
export interface AbstractOAuthClientUpdate {
    /**
     * 
     * @type {number}
     * @memberof AbstractOAuthClientUpdate
     */
    lastUpdatedBy?: number;
    /**
     * 
     * @type {string}
     * @memberof AbstractOAuthClientUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractOAuthClientUpdate
     */
    description?: string;
    /**
     * 
     * @type {Set<Permission>}
     * @memberof AbstractOAuthClientUpdate
     */
    oauthScopes?: Set<Permission>;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractOAuthClientUpdate
     */
    state?: CreationEntityState;
    /**
     * Whether write requests sent through this client have to be confirmed by the user before they are executed.
     * @type {boolean}
     * @memberof AbstractOAuthClientUpdate
     */
    confirmationRequired?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof AbstractOAuthClientUpdate
     */
    redirectUrls?: Set<string>;
}



/**
 * Check if a given object implements the AbstractOAuthClientUpdate interface.
 */
export function instanceOfAbstractOAuthClientUpdate(value: object): value is AbstractOAuthClientUpdate {
    return true;
}

export function AbstractOAuthClientUpdateFromJSON(json: any): AbstractOAuthClientUpdate {
    return AbstractOAuthClientUpdateFromJSONTyped(json, false);
}

export function AbstractOAuthClientUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractOAuthClientUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'lastUpdatedBy': json['lastUpdatedBy'] == null ? undefined : json['lastUpdatedBy'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'oauthScopes': json['oauthScopes'] == null ? undefined : (new Set((json['oauthScopes'] as Array<any>).map(PermissionFromJSON))),
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'confirmationRequired': json['confirmationRequired'] == null ? undefined : json['confirmationRequired'],
        'redirectUrls': json['redirectUrls'] == null ? undefined : new Set(json['redirectUrls']),
    };
}

export function AbstractOAuthClientUpdateToJSON(json: any): AbstractOAuthClientUpdate {
    return AbstractOAuthClientUpdateToJSONTyped(json, false);
}

export function AbstractOAuthClientUpdateToJSONTyped(value?: AbstractOAuthClientUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lastUpdatedBy': value['lastUpdatedBy'],
        'name': value['name'],
        'description': value['description'],
        'oauthScopes': value['oauthScopes'] == null ? undefined : (Array.from(value['oauthScopes'] as Set<any>).map(PermissionToJSON)),
        'state': CreationEntityStateToJSON(value['state']),
        'confirmationRequired': value['confirmationRequired'],
        'redirectUrls': value['redirectUrls'] == null ? undefined : Array.from(value['redirectUrls'] as Set<any>),
    };
}

