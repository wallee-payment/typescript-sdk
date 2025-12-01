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
 * @interface InvoiceCommentListResponse
 */
export interface InvoiceCommentListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<TransactionInvoiceComment>}
     * @memberof InvoiceCommentListResponse
     */
    readonly data?: Array<TransactionInvoiceComment>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InvoiceCommentListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InvoiceCommentListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InvoiceCommentListResponse interface.
 */
export function instanceOfInvoiceCommentListResponse(value: object): value is InvoiceCommentListResponse {
    return true;
}

export function InvoiceCommentListResponseFromJSON(json: any): InvoiceCommentListResponse {
    return InvoiceCommentListResponseFromJSONTyped(json, false);
}

export function InvoiceCommentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceCommentListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionInvoiceCommentFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InvoiceCommentListResponseToJSON(json: any): InvoiceCommentListResponse {
    return InvoiceCommentListResponseToJSONTyped(json, false);
}

export function InvoiceCommentListResponseToJSONTyped(value?: Omit<InvoiceCommentListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

