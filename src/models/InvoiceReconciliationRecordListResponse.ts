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
 * @interface InvoiceReconciliationRecordListResponse
 */
export interface InvoiceReconciliationRecordListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<InvoiceReconciliationRecord>}
     * @memberof InvoiceReconciliationRecordListResponse
     */
    readonly data?: Array<InvoiceReconciliationRecord>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof InvoiceReconciliationRecordListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof InvoiceReconciliationRecordListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the InvoiceReconciliationRecordListResponse interface.
 */
export function instanceOfInvoiceReconciliationRecordListResponse(value: object): value is InvoiceReconciliationRecordListResponse {
    return true;
}

export function InvoiceReconciliationRecordListResponseFromJSON(json: any): InvoiceReconciliationRecordListResponse {
    return InvoiceReconciliationRecordListResponseFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InvoiceReconciliationRecordFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function InvoiceReconciliationRecordListResponseToJSON(json: any): InvoiceReconciliationRecordListResponse {
    return InvoiceReconciliationRecordListResponseToJSONTyped(json, false);
}

export function InvoiceReconciliationRecordListResponseToJSONTyped(value?: Omit<InvoiceReconciliationRecordListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

