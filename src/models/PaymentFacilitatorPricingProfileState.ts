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
export const PaymentFacilitatorPricingProfileState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type PaymentFacilitatorPricingProfileState = typeof PaymentFacilitatorPricingProfileState[keyof typeof PaymentFacilitatorPricingProfileState];


export function instanceOfPaymentFacilitatorPricingProfileState(value: any): boolean {
    for (const key in PaymentFacilitatorPricingProfileState) {
        if (Object.prototype.hasOwnProperty.call(PaymentFacilitatorPricingProfileState, key)) {
            if (PaymentFacilitatorPricingProfileState[key as keyof typeof PaymentFacilitatorPricingProfileState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentFacilitatorPricingProfileStateFromJSON(json: any): PaymentFacilitatorPricingProfileState {
    return PaymentFacilitatorPricingProfileStateFromJSONTyped(json, false);
}

export function PaymentFacilitatorPricingProfileStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentFacilitatorPricingProfileState {
    return json as PaymentFacilitatorPricingProfileState;
}

export function PaymentFacilitatorPricingProfileStateToJSON(value?: PaymentFacilitatorPricingProfileState | null): any {
    return value as any;
}

export function PaymentFacilitatorPricingProfileStateToJSONTyped(value: any, ignoreDiscriminator: boolean): PaymentFacilitatorPricingProfileState {
    return value as PaymentFacilitatorPricingProfileState;
}

