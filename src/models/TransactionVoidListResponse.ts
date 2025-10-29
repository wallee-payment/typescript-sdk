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
import type { TransactionVoid } from './TransactionVoid';
import {
    TransactionVoidFromJSON,
    TransactionVoidFromJSONTyped,
    TransactionVoidToJSON,
} from './TransactionVoid';

/**
 * 
 * @export
 * @interface TransactionVoidListResponse
 */
export interface TransactionVoidListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<TransactionVoid>}
     * @memberof TransactionVoidListResponse
     */
    readonly data?: Array<TransactionVoid>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TransactionVoidListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TransactionVoidListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TransactionVoidListResponse interface.
 */
export function instanceOfTransactionVoidListResponse(value: object): value is TransactionVoidListResponse {
    return true;
}

export function TransactionVoidListResponseFromJSON(json: any): TransactionVoidListResponse {
    return TransactionVoidListResponseFromJSONTyped(json, false);
}

export function TransactionVoidListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionVoidListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionVoidFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TransactionVoidListResponseToJSON(value?: Omit<TransactionVoidListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

