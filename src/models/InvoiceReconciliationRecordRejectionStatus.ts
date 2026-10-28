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

/**
 * 
 * @export
 */
export const InvoiceReconciliationRecordRejectionStatus = {
    None: 'NONE',
    Rejected: 'REJECTED',
    BulkRejected: 'BULK_REJECTED'
} as const;
export type InvoiceReconciliationRecordRejectionStatus = typeof InvoiceReconciliationRecordRejectionStatus[keyof typeof InvoiceReconciliationRecordRejectionStatus];


export function instanceOfInvoiceReconciliationRecordRejectionStatus(value: any): boolean {
    for (const key in InvoiceReconciliationRecordRejectionStatus) {
        if (Object.prototype.hasOwnProperty.call(InvoiceReconciliationRecordRejectionStatus, key)) {
            if (InvoiceReconciliationRecordRejectionStatus[key as keyof typeof InvoiceReconciliationRecordRejectionStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function InvoiceReconciliationRecordRejectionStatusFromJSON(json: any): InvoiceReconciliationRecordRejectionStatus {
    return InvoiceReconciliationRecordRejectionStatusFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordRejectionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordRejectionStatus {
    return json as InvoiceReconciliationRecordRejectionStatus;
}

export function InvoiceReconciliationRecordRejectionStatusToJSON(value?: InvoiceReconciliationRecordRejectionStatus | null): any {
    return value as any;
}

export function InvoiceReconciliationRecordRejectionStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordRejectionStatus {
    return value as InvoiceReconciliationRecordRejectionStatus;
}

