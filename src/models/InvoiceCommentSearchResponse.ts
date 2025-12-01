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
import type { TransactionInvoiceComment } from './TransactionInvoiceComment';
import {
    TransactionInvoiceCommentFromJSON,
    TransactionInvoiceCommentFromJSONTyped,
    TransactionInvoiceCommentToJSON,
    TransactionInvoiceCommentToJSONTyped,
} from './TransactionInvoiceComment';

/**
 * 
 * @export
 * @interface InvoiceCommentSearchResponse
 */
export interface InvoiceCommentSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<TransactionInvoiceComment>}
     * @memberof InvoiceCommentSearchResponse
     */
    readonly data?: Array<TransactionInvoiceComment>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof InvoiceCommentSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InvoiceCommentSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InvoiceCommentSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InvoiceCommentSearchResponse interface.
 */
export function instanceOfInvoiceCommentSearchResponse(value: object): value is InvoiceCommentSearchResponse {
    return true;
}

export function InvoiceCommentSearchResponseFromJSON(json: any): InvoiceCommentSearchResponse {
    return InvoiceCommentSearchResponseFromJSONTyped(json, false);
}

export function InvoiceCommentSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceCommentSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionInvoiceCommentFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InvoiceCommentSearchResponseToJSON(json: any): InvoiceCommentSearchResponse {
    return InvoiceCommentSearchResponseToJSONTyped(json, false);
}

export function InvoiceCommentSearchResponseToJSONTyped(value?: Omit<InvoiceCommentSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

