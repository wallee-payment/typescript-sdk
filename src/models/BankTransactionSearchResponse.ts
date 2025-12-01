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
import type { BankTransaction } from './BankTransaction';
import {
    BankTransactionFromJSON,
    BankTransactionFromJSONTyped,
    BankTransactionToJSON,
    BankTransactionToJSONTyped,
} from './BankTransaction';

/**
 * 
 * @export
 * @interface BankTransactionSearchResponse
 */
export interface BankTransactionSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<BankTransaction>}
     * @memberof BankTransactionSearchResponse
     */
    readonly data?: Array<BankTransaction>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof BankTransactionSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof BankTransactionSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof BankTransactionSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the BankTransactionSearchResponse interface.
 */
export function instanceOfBankTransactionSearchResponse(value: object): value is BankTransactionSearchResponse {
    return true;
}

export function BankTransactionSearchResponseFromJSON(json: any): BankTransactionSearchResponse {
    return BankTransactionSearchResponseFromJSONTyped(json, false);
}

export function BankTransactionSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransactionSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BankTransactionFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function BankTransactionSearchResponseToJSON(json: any): BankTransactionSearchResponse {
    return BankTransactionSearchResponseToJSONTyped(json, false);
}

export function BankTransactionSearchResponseToJSONTyped(value?: Omit<BankTransactionSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

