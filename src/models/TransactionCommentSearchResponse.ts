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
import type { TransactionComment } from './TransactionComment';
import {
    TransactionCommentFromJSON,
    TransactionCommentFromJSONTyped,
    TransactionCommentToJSON,
    TransactionCommentToJSONTyped,
} from './TransactionComment';

/**
 * 
 * @export
 * @interface TransactionCommentSearchResponse
 */
export interface TransactionCommentSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<TransactionComment>}
     * @memberof TransactionCommentSearchResponse
     */
    readonly data?: Array<TransactionComment>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof TransactionCommentSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TransactionCommentSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TransactionCommentSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TransactionCommentSearchResponse interface.
 */
export function instanceOfTransactionCommentSearchResponse(value: object): value is TransactionCommentSearchResponse {
    return true;
}

export function TransactionCommentSearchResponseFromJSON(json: any): TransactionCommentSearchResponse {
    return TransactionCommentSearchResponseFromJSONTyped(json, false);
}

export function TransactionCommentSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCommentSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionCommentFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TransactionCommentSearchResponseToJSON(json: any): TransactionCommentSearchResponse {
    return TransactionCommentSearchResponseToJSONTyped(json, false);
}

export function TransactionCommentSearchResponseToJSONTyped(value?: Omit<TransactionCommentSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

