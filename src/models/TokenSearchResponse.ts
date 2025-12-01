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
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
    TokenToJSONTyped,
} from './Token';

/**
 * 
 * @export
 * @interface TokenSearchResponse
 */
export interface TokenSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<Token>}
     * @memberof TokenSearchResponse
     */
    readonly data?: Array<Token>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof TokenSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TokenSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TokenSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TokenSearchResponse interface.
 */
export function instanceOfTokenSearchResponse(value: object): value is TokenSearchResponse {
    return true;
}

export function TokenSearchResponseFromJSON(json: any): TokenSearchResponse {
    return TokenSearchResponseFromJSONTyped(json, false);
}

export function TokenSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TokenFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TokenSearchResponseToJSON(json: any): TokenSearchResponse {
    return TokenSearchResponseToJSONTyped(json, false);
}

export function TokenSearchResponseToJSONTyped(value?: Omit<TokenSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

