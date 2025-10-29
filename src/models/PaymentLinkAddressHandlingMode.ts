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
 * The address handling mode controls if the address is required and how it is enforced to be provided.
 * @export
 */
export const PaymentLinkAddressHandlingMode = {
    NotRequired: 'NOT_REQUIRED',
    RequiredInUrl: 'REQUIRED_IN_URL',
    RequiredOnPaymentPage: 'REQUIRED_ON_PAYMENT_PAGE'
} as const;
export type PaymentLinkAddressHandlingMode = typeof PaymentLinkAddressHandlingMode[keyof typeof PaymentLinkAddressHandlingMode];


export function instanceOfPaymentLinkAddressHandlingMode(value: any): boolean {
    for (const key in PaymentLinkAddressHandlingMode) {
        if (Object.prototype.hasOwnProperty.call(PaymentLinkAddressHandlingMode, key)) {
            if (PaymentLinkAddressHandlingMode[key as keyof typeof PaymentLinkAddressHandlingMode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentLinkAddressHandlingModeFromJSON(json: any): PaymentLinkAddressHandlingMode {
    return PaymentLinkAddressHandlingModeFromJSONTyped(json, false);
}

export function PaymentLinkAddressHandlingModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentLinkAddressHandlingMode {
    return json as PaymentLinkAddressHandlingMode;
}

export function PaymentLinkAddressHandlingModeToJSON(value?: PaymentLinkAddressHandlingMode | null): any {
    return value as any;
}

