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
export const InvoiceReconciliationRecordState = {
    Create: 'CREATE',
    Pending: 'PENDING',
    Unresolved: 'UNRESOLVED',
    Resolved: 'RESOLVED',
    Discarded: 'DISCARDED'
} as const;
export type InvoiceReconciliationRecordState = typeof InvoiceReconciliationRecordState[keyof typeof InvoiceReconciliationRecordState];


export function instanceOfInvoiceReconciliationRecordState(value: any): boolean {
    for (const key in InvoiceReconciliationRecordState) {
        if (Object.prototype.hasOwnProperty.call(InvoiceReconciliationRecordState, key)) {
            if (InvoiceReconciliationRecordState[key as keyof typeof InvoiceReconciliationRecordState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function InvoiceReconciliationRecordStateFromJSON(json: any): InvoiceReconciliationRecordState {
    return InvoiceReconciliationRecordStateFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordState {
    return json as InvoiceReconciliationRecordState;
}

export function InvoiceReconciliationRecordStateToJSON(value?: InvoiceReconciliationRecordState | null): any {
    return value as any;
}

export function InvoiceReconciliationRecordStateToJSONTyped(value: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecordState {
    return value as InvoiceReconciliationRecordState;
}

