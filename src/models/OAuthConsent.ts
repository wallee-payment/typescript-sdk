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
 * @interface OAuthConsent
 */
export interface OAuthConsent {
    /**
     * 
     * @type {Set<Permission>}
     * @memberof OAuthConsent
     */
    readonly permissions?: Set<Permission>;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof OAuthConsent
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof OAuthConsent
     */
    readonly oauthUser?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof OAuthConsent
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof OAuthConsent
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {Date}
     * @memberof OAuthConsent
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof OAuthConsent
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the OAuthConsent interface.
 */
export function instanceOfOAuthConsent(value: object): value is OAuthConsent {
    return true;
}

export function OAuthConsentFromJSON(json: any): OAuthConsent {
    return OAuthConsentFromJSONTyped(json, false);
}

export function OAuthConsentFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthConsent {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'] == null ? undefined : (new Set((json['permissions'] as Array<any>).map(PermissionFromJSON))),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'oauthUser': json['oauthUser'] == null ? undefined : json['oauthUser'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function OAuthConsentToJSON(json: any): OAuthConsent {
    return OAuthConsentToJSONTyped(json, false);
}

export function OAuthConsentToJSONTyped(value?: Omit<OAuthConsent, 'permissions'|'plannedPurgeDate'|'oauthUser'|'id'|'createdOn'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

