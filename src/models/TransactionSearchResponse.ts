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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';

/**
 * 
 * @export
 * @interface TransactionSearchResponse
 */
export interface TransactionSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<Transaction>}
     * @memberof TransactionSearchResponse
     */
    readonly data?: Array<Transaction>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof TransactionSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TransactionSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TransactionSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TransactionSearchResponse interface.
 */
export function instanceOfTransactionSearchResponse(value: object): value is TransactionSearchResponse {
    return true;
}

export function TransactionSearchResponseFromJSON(json: any): TransactionSearchResponse {
    return TransactionSearchResponseFromJSONTyped(json, false);
}

export function TransactionSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TransactionSearchResponseToJSON(json: any): TransactionSearchResponse {
    return TransactionSearchResponseToJSONTyped(json, false);
}

export function TransactionSearchResponseToJSONTyped(value?: Omit<TransactionSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

