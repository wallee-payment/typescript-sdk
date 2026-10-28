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
import type { TransactionInvoice } from './TransactionInvoice';
import {
    TransactionInvoiceFromJSON,
    TransactionInvoiceFromJSONTyped,
    TransactionInvoiceToJSON,
    TransactionInvoiceToJSONTyped,
} from './TransactionInvoice';

/**
 * 
 * @export
 * @interface InvoiceReconciliationRecordInvoiceLink
 */
export interface InvoiceReconciliationRecordInvoiceLink {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    readonly amount?: number;
    /**
     * 
     * @type {InvoiceReconciliationRecord}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    record?: InvoiceReconciliationRecord;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionInvoice}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    invoice?: TransactionInvoice;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof InvoiceReconciliationRecordInvoiceLink
     */
    readonly createdOn?: Date;
}

/**
 * Check if a given object implements the InvoiceReconciliationRecordInvoiceLink interface.
 */
export function instanceOfInvoiceReconciliationRecordInvoiceLink(value: object): value is InvoiceReconciliationRecordInvoiceLink {
    return true;
}

export function InvoiceReconciliationRecordInvoiceLinkFromJSON(json: any): InvoiceReconciliationRecordInvoiceLink {
    return InvoiceReconciliationRecordInvoiceLinkFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordInvoiceLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordInvoiceLink {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'record': json['record'] == null ? undefined : InvoiceReconciliationRecordFromJSON(json['record']),
        'id': json['id'] == null ? undefined : json['id'],
        'invoice': json['invoice'] == null ? undefined : TransactionInvoiceFromJSON(json['invoice']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
    };
}

export function InvoiceReconciliationRecordInvoiceLinkToJSON(json: any): InvoiceReconciliationRecordInvoiceLink {
    return InvoiceReconciliationRecordInvoiceLinkToJSONTyped(json, false);
}

export function InvoiceReconciliationRecordInvoiceLinkToJSONTyped(value?: Omit<InvoiceReconciliationRecordInvoiceLink, 'linkedSpaceId'|'amount'|'id'|'createdOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'record': InvoiceReconciliationRecordToJSON(value['record']),
        'invoice': TransactionInvoiceToJSON(value['invoice']),
    };
}

