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
export const RefundState = {
    Create: 'CREATE',
    Scheduled: 'SCHEDULED',
    Pending: 'PENDING',
    ManualCheck: 'MANUAL_CHECK',
    Failed: 'FAILED',
    Successful: 'SUCCESSFUL'
} as const;
export type RefundState = typeof RefundState[keyof typeof RefundState];


export function instanceOfRefundState(value: any): boolean {
    for (const key in RefundState) {
        if (Object.prototype.hasOwnProperty.call(RefundState, key)) {
            if (RefundState[key as keyof typeof RefundState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RefundStateFromJSON(json: any): RefundState {
    return RefundStateFromJSONTyped(json, false);
}

export function RefundStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundState {
    return json as RefundState;
}

export function RefundStateToJSON(value?: RefundState | null): any {
    return value as any;
}

