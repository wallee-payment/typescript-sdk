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
 * @interface OAuthUser
 */
export interface OAuthUser {
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof OAuthUser
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof OAuthUser
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {Date}
     * @memberof OAuthUser
     */
    readonly updatedOn?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuthUser
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof OAuthUser
     */
    readonly user?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof OAuthUser
     */
    readonly version?: number;
    /**
     * 
     * @type {number}
     * @memberof OAuthUser
     */
    readonly oauthClient?: number;
}



/**
 * Check if a given object implements the OAuthUser interface.
 */
export function instanceOfOAuthUser(value: object): value is OAuthUser {
    return true;
}

export function OAuthUserFromJSON(json: any): OAuthUser {
    return OAuthUserFromJSONTyped(json, false);
}

export function OAuthUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'updatedOn': json['updatedOn'] == null ? undefined : (new Date(json['updatedOn'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'user': json['user'] == null ? undefined : json['user'],
        'version': json['version'] == null ? undefined : json['version'],
        'oauthClient': json['oauthClient'] == null ? undefined : json['oauthClient'],
    };
}

export function OAuthUserToJSON(json: any): OAuthUser {
    return OAuthUserToJSONTyped(json, false);
}

export function OAuthUserToJSONTyped(value?: Omit<OAuthUser, 'id'|'updatedOn'|'createdOn'|'user'|'version'|'oauthClient'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

