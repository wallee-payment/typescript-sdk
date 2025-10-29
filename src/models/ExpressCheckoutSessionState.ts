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
export const ExpressCheckoutSessionState = {
    Pending: 'PENDING',
    Approved: 'APPROVED',
    Processing: 'PROCESSING',
    Authorized: 'AUTHORIZED',
    Failed: 'FAILED'
} as const;
export type ExpressCheckoutSessionState = typeof ExpressCheckoutSessionState[keyof typeof ExpressCheckoutSessionState];


export function instanceOfExpressCheckoutSessionState(value: any): boolean {
    for (const key in ExpressCheckoutSessionState) {
        if (Object.prototype.hasOwnProperty.call(ExpressCheckoutSessionState, key)) {
            if (ExpressCheckoutSessionState[key as keyof typeof ExpressCheckoutSessionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ExpressCheckoutSessionStateFromJSON(json: any): ExpressCheckoutSessionState {
    return ExpressCheckoutSessionStateFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSessionState {
    return json as ExpressCheckoutSessionState;
}

export function ExpressCheckoutSessionStateToJSON(value?: ExpressCheckoutSessionState | null): any {
    return value as any;
}

