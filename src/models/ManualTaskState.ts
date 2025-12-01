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
export const ManualTaskState = {
    Open: 'OPEN',
    Done: 'DONE',
    Expired: 'EXPIRED'
} as const;
export type ManualTaskState = typeof ManualTaskState[keyof typeof ManualTaskState];


export function instanceOfManualTaskState(value: any): boolean {
    for (const key in ManualTaskState) {
        if (Object.prototype.hasOwnProperty.call(ManualTaskState, key)) {
            if (ManualTaskState[key as keyof typeof ManualTaskState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ManualTaskStateFromJSON(json: any): ManualTaskState {
    return ManualTaskStateFromJSONTyped(json, false);
}

export function ManualTaskStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualTaskState {
    return json as ManualTaskState;
}

export function ManualTaskStateToJSON(value?: ManualTaskState | null): any {
    return value as any;
}

export function ManualTaskStateToJSONTyped(value: any, ignoreDiscriminator: boolean): ManualTaskState {
    return value as ManualTaskState;
}

