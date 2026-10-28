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
 * @interface OAuthClientSearchResponse
 */
export interface OAuthClientSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<OAuthClient>}
     * @memberof OAuthClientSearchResponse
     */
    readonly data?: Array<OAuthClient>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof OAuthClientSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof OAuthClientSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof OAuthClientSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the OAuthClientSearchResponse interface.
 */
export function instanceOfOAuthClientSearchResponse(value: object): value is OAuthClientSearchResponse {
    return true;
}

export function OAuthClientSearchResponseFromJSON(json: any): OAuthClientSearchResponse {
    return OAuthClientSearchResponseFromJSONTyped(json, false);
}

export function OAuthClientSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthClientSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(OAuthClientFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function OAuthClientSearchResponseToJSON(json: any): OAuthClientSearchResponse {
    return OAuthClientSearchResponseToJSONTyped(json, false);
}

export function OAuthClientSearchResponseToJSONTyped(value?: Omit<OAuthClientSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

