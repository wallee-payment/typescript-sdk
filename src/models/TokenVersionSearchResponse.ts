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
import type { TokenVersion } from './TokenVersion';
import {
    TokenVersionFromJSON,
    TokenVersionFromJSONTyped,
    TokenVersionToJSON,
} from './TokenVersion';

/**
 * 
 * @export
 * @interface TokenVersionSearchResponse
 */
export interface TokenVersionSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<TokenVersion>}
     * @memberof TokenVersionSearchResponse
     */
    readonly data?: Array<TokenVersion>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof TokenVersionSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TokenVersionSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TokenVersionSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TokenVersionSearchResponse interface.
 */
export function instanceOfTokenVersionSearchResponse(value: object): value is TokenVersionSearchResponse {
    return true;
}

export function TokenVersionSearchResponseFromJSON(json: any): TokenVersionSearchResponse {
    return TokenVersionSearchResponseFromJSONTyped(json, false);
}

export function TokenVersionSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVersionSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TokenVersionFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TokenVersionSearchResponseToJSON(value?: Omit<TokenVersionSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

