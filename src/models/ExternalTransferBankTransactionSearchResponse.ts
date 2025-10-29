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
import type { ExternalTransferBankTransaction } from './ExternalTransferBankTransaction';
import {
    ExternalTransferBankTransactionFromJSON,
    ExternalTransferBankTransactionFromJSONTyped,
    ExternalTransferBankTransactionToJSON,
} from './ExternalTransferBankTransaction';

/**
 * 
 * @export
 * @interface ExternalTransferBankTransactionSearchResponse
 */
export interface ExternalTransferBankTransactionSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ExternalTransferBankTransaction>}
     * @memberof ExternalTransferBankTransactionSearchResponse
     */
    readonly data?: Array<ExternalTransferBankTransaction>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof ExternalTransferBankTransactionSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ExternalTransferBankTransactionSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ExternalTransferBankTransactionSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ExternalTransferBankTransactionSearchResponse interface.
 */
export function instanceOfExternalTransferBankTransactionSearchResponse(value: object): value is ExternalTransferBankTransactionSearchResponse {
    return true;
}

export function ExternalTransferBankTransactionSearchResponseFromJSON(json: any): ExternalTransferBankTransactionSearchResponse {
    return ExternalTransferBankTransactionSearchResponseFromJSONTyped(json, false);
}

export function ExternalTransferBankTransactionSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalTransferBankTransactionSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ExternalTransferBankTransactionFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ExternalTransferBankTransactionSearchResponseToJSON(value?: Omit<ExternalTransferBankTransactionSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

