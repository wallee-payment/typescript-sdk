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
import type { InternalTransferBankTransaction } from './InternalTransferBankTransaction';
import {
    InternalTransferBankTransactionFromJSON,
    InternalTransferBankTransactionFromJSONTyped,
    InternalTransferBankTransactionToJSON,
    InternalTransferBankTransactionToJSONTyped,
} from './InternalTransferBankTransaction';

/**
 * 
 * @export
 * @interface InternalTransferBankTransactionListResponse
 */
export interface InternalTransferBankTransactionListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<InternalTransferBankTransaction>}
     * @memberof InternalTransferBankTransactionListResponse
     */
    readonly data?: Array<InternalTransferBankTransaction>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InternalTransferBankTransactionListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InternalTransferBankTransactionListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InternalTransferBankTransactionListResponse interface.
 */
export function instanceOfInternalTransferBankTransactionListResponse(value: object): value is InternalTransferBankTransactionListResponse {
    return true;
}

export function InternalTransferBankTransactionListResponseFromJSON(json: any): InternalTransferBankTransactionListResponse {
    return InternalTransferBankTransactionListResponseFromJSONTyped(json, false);
}

export function InternalTransferBankTransactionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalTransferBankTransactionListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InternalTransferBankTransactionFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InternalTransferBankTransactionListResponseToJSON(json: any): InternalTransferBankTransactionListResponse {
    return InternalTransferBankTransactionListResponseToJSONTyped(json, false);
}

export function InternalTransferBankTransactionListResponseToJSONTyped(value?: Omit<InternalTransferBankTransactionListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

