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
 * @interface OAuthClient
 */
export interface OAuthClient {
    /**
     * 
     * @type {number}
     * @memberof OAuthClient
     */
    readonly lastUpdatedBy?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuthClient
     */
    readonly clientId?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof OAuthClient
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof OAuthClient
     */
    readonly description?: string;
    /**
     * 
     * @type {Set<Permission>}
     * @memberof OAuthClient
     */
    readonly oauthScopes?: Set<Permission>;
    /**
     * 
     * @type {Date}
     * @memberof OAuthClient
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof OAuthClient
     */
    readonly version?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof OAuthClient
     */
    readonly redirectUrls?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof OAuthClient
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuthClient
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof OAuthClient
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof OAuthClient
     */
    state?: CreationEntityState;
    /**
     * Whether write requests sent through this client have to be confirmed by the user before they are executed.
     * @type {boolean}
     * @memberof OAuthClient
     */
    readonly confirmationRequired?: boolean;
}



/**
 * Check if a given object implements the OAuthClient interface.
 */
export function instanceOfOAuthClient(value: object): value is OAuthClient {
    return true;
}

export function OAuthClientFromJSON(json: any): OAuthClient {
    return OAuthClientFromJSONTyped(json, false);
}

export function OAuthClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthClient {
    if (json == null) {
        return json;
    }
    return {
        
        'lastUpdatedBy': json['lastUpdatedBy'] == null ? undefined : json['lastUpdatedBy'],
        'clientId': json['clientId'] == null ? undefined : json['clientId'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'oauthScopes': json['oauthScopes'] == null ? undefined : (new Set((json['oauthScopes'] as Array<any>).map(PermissionFromJSON))),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'redirectUrls': json['redirectUrls'] == null ? undefined : new Set(json['redirectUrls']),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'confirmationRequired': json['confirmationRequired'] == null ? undefined : json['confirmationRequired'],
    };
}

export function OAuthClientToJSON(json: any): OAuthClient {
    return OAuthClientToJSONTyped(json, false);
}

export function OAuthClientToJSONTyped(value?: Omit<OAuthClient, 'lastUpdatedBy'|'clientId'|'plannedPurgeDate'|'description'|'oauthScopes'|'createdOn'|'version'|'redirectUrls'|'createdBy'|'name'|'id'|'confirmationRequired'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

