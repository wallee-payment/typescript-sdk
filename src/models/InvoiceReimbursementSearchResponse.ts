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
import type { InvoiceReimbursement } from './InvoiceReimbursement';
import {
    InvoiceReimbursementFromJSON,
    InvoiceReimbursementFromJSONTyped,
    InvoiceReimbursementToJSON,
    InvoiceReimbursementToJSONTyped,
} from './InvoiceReimbursement';

/**
 * 
 * @export
 * @interface InvoiceReimbursementSearchResponse
 */
export interface InvoiceReimbursementSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<InvoiceReimbursement>}
     * @memberof InvoiceReimbursementSearchResponse
     */
    readonly data?: Array<InvoiceReimbursement>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof InvoiceReimbursementSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InvoiceReimbursementSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InvoiceReimbursementSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InvoiceReimbursementSearchResponse interface.
 */
export function instanceOfInvoiceReimbursementSearchResponse(value: object): value is InvoiceReimbursementSearchResponse {
    return true;
}

export function InvoiceReimbursementSearchResponseFromJSON(json: any): InvoiceReimbursementSearchResponse {
    return InvoiceReimbursementSearchResponseFromJSONTyped(json, false);
}

export function InvoiceReimbursementSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReimbursementSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InvoiceReimbursementFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InvoiceReimbursementSearchResponseToJSON(json: any): InvoiceReimbursementSearchResponse {
    return InvoiceReimbursementSearchResponseToJSONTyped(json, false);
}

export function InvoiceReimbursementSearchResponseToJSONTyped(value?: Omit<InvoiceReimbursementSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

