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
export const BillingDayCustomization = {
    Default: 'DEFAULT',
    Specific: 'SPECIFIC'
} as const;
export type BillingDayCustomization = typeof BillingDayCustomization[keyof typeof BillingDayCustomization];


export function instanceOfBillingDayCustomization(value: any): boolean {
    for (const key in BillingDayCustomization) {
        if (Object.prototype.hasOwnProperty.call(BillingDayCustomization, key)) {
            if (BillingDayCustomization[key as keyof typeof BillingDayCustomization] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BillingDayCustomizationFromJSON(json: any): BillingDayCustomization {
    return BillingDayCustomizationFromJSONTyped(json, false);
}

export function BillingDayCustomizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingDayCustomization {
    return json as BillingDayCustomization;
}

export function BillingDayCustomizationToJSON(value?: BillingDayCustomization | null): any {
    return value as any;
}

