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
export const DebtCollectionCaseState = {
    Create: 'CREATE',
    Preparing: 'PREPARING',
    Reviewing: 'REVIEWING',
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Closed: 'CLOSED',
    Failed: 'FAILED'
} as const;
export type DebtCollectionCaseState = typeof DebtCollectionCaseState[keyof typeof DebtCollectionCaseState];


export function instanceOfDebtCollectionCaseState(value: any): boolean {
    for (const key in DebtCollectionCaseState) {
        if (Object.prototype.hasOwnProperty.call(DebtCollectionCaseState, key)) {
            if (DebtCollectionCaseState[key as keyof typeof DebtCollectionCaseState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DebtCollectionCaseStateFromJSON(json: any): DebtCollectionCaseState {
    return DebtCollectionCaseStateFromJSONTyped(json, false);
}

export function DebtCollectionCaseStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCaseState {
    return json as DebtCollectionCaseState;
}

export function DebtCollectionCaseStateToJSON(value?: DebtCollectionCaseState | null): any {
    return value as any;
}

export function DebtCollectionCaseStateToJSONTyped(value: any, ignoreDiscriminator: boolean): DebtCollectionCaseState {
    return value as DebtCollectionCaseState;
}

