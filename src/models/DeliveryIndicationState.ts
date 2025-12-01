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
export const DeliveryIndicationState = {
    Pending: 'PENDING',
    NotSuitable: 'NOT_SUITABLE',
    ManualCheckRequired: 'MANUAL_CHECK_REQUIRED',
    Suitable: 'SUITABLE'
} as const;
export type DeliveryIndicationState = typeof DeliveryIndicationState[keyof typeof DeliveryIndicationState];


export function instanceOfDeliveryIndicationState(value: any): boolean {
    for (const key in DeliveryIndicationState) {
        if (Object.prototype.hasOwnProperty.call(DeliveryIndicationState, key)) {
            if (DeliveryIndicationState[key as keyof typeof DeliveryIndicationState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DeliveryIndicationStateFromJSON(json: any): DeliveryIndicationState {
    return DeliveryIndicationStateFromJSONTyped(json, false);
}

export function DeliveryIndicationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryIndicationState {
    return json as DeliveryIndicationState;
}

export function DeliveryIndicationStateToJSON(value?: DeliveryIndicationState | null): any {
    return value as any;
}

export function DeliveryIndicationStateToJSONTyped(value: any, ignoreDiscriminator: boolean): DeliveryIndicationState {
    return value as DeliveryIndicationState;
}

