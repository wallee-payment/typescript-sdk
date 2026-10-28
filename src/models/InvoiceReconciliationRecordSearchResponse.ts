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
import type { InvoiceReconciliationRecord } from './InvoiceReconciliationRecord';
import {
    InvoiceReconciliationRecordFromJSON,
    InvoiceReconciliationRecordFromJSONTyped,
    InvoiceReconciliationRecordToJSON,
    InvoiceReconciliationRecordToJSONTyped,
} from './InvoiceReconciliationRecord';

/**
 * 
 * @export
 * @interface InvoiceReconciliationRecordSearchResponse
 */
export interface InvoiceReconciliationRecordSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<InvoiceReconciliationRecord>}
     * @memberof InvoiceReconciliationRecordSearchResponse
     */
    readonly data?: Array<InvoiceReconciliationRecord>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof InvoiceReconciliationRecordSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InvoiceReconciliationRecordSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InvoiceReconciliationRecordSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InvoiceReconciliationRecordSearchResponse interface.
 */
export function instanceOfInvoiceReconciliationRecordSearchResponse(value: object): value is InvoiceReconciliationRecordSearchResponse {
    return true;
}

export function InvoiceReconciliationRecordSearchResponseFromJSON(json: any): InvoiceReconciliationRecordSearchResponse {
    return InvoiceReconciliationRecordSearchResponseFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InvoiceReconciliationRecordFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InvoiceReconciliationRecordSearchResponseToJSON(json: any): InvoiceReconciliationRecordSearchResponse {
    return InvoiceReconciliationRecordSearchResponseToJSONTyped(json, false);
}

export function InvoiceReconciliationRecordSearchResponseToJSONTyped(value?: Omit<InvoiceReconciliationRecordSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

