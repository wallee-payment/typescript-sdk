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
import type { OAuthClient } from './OAuthClient';
import {
    OAuthClientFromJSON,
    OAuthClientFromJSONTyped,
    OAuthClientToJSON,
    OAuthClientToJSONTyped,
} from './OAuthClient';

/**
 * 
 * @export
 * @interface OAuthClientListResponse
 */
export interface OAuthClientListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<OAuthClient>}
     * @memberof OAuthClientListResponse
     */
    readonly data?: Array<OAuthClient>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof OAuthClientListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof OAuthClientListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the OAuthClientListResponse interface.
 */
export function instanceOfOAuthClientListResponse(value: object): value is OAuthClientListResponse {
    return true;
}

export function OAuthClientListResponseFromJSON(json: any): OAuthClientListResponse {
    return OAuthClientListResponseFromJSONTyped(json, false);
}

export function OAuthClientListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthClientListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(OAuthClientFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function OAuthClientListResponseToJSON(json: any): OAuthClientListResponse {
    return OAuthClientListResponseToJSONTyped(json, false);
}

export function OAuthClientListResponseToJSONTyped(value?: Omit<OAuthClientListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

