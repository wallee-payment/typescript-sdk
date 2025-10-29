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
 * The primary risk taker will have the main loss when one party of the contract does not fulfill the contractual duties.
 * @export
 */
export const PaymentPrimaryRiskTaker = {
    Customer: 'CUSTOMER',
    Merchant: 'MERCHANT',
    ThirdParty: 'THIRD_PARTY'
} as const;
export type PaymentPrimaryRiskTaker = typeof PaymentPrimaryRiskTaker[keyof typeof PaymentPrimaryRiskTaker];


export function instanceOfPaymentPrimaryRiskTaker(value: any): boolean {
    for (const key in PaymentPrimaryRiskTaker) {
        if (Object.prototype.hasOwnProperty.call(PaymentPrimaryRiskTaker, key)) {
            if (PaymentPrimaryRiskTaker[key as keyof typeof PaymentPrimaryRiskTaker] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentPrimaryRiskTakerFromJSON(json: any): PaymentPrimaryRiskTaker {
    return PaymentPrimaryRiskTakerFromJSONTyped(json, false);
}

export function PaymentPrimaryRiskTakerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentPrimaryRiskTaker {
    return json as PaymentPrimaryRiskTaker;
}

export function PaymentPrimaryRiskTakerToJSON(value?: PaymentPrimaryRiskTaker | null): any {
    return value as any;
}

