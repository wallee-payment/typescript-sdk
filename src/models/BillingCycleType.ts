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
export const BillingCycleType = {
    Daily: 'DAILY',
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY',
    Yearly: 'YEARLY'
} as const;
export type BillingCycleType = typeof BillingCycleType[keyof typeof BillingCycleType];


export function instanceOfBillingCycleType(value: any): boolean {
    for (const key in BillingCycleType) {
        if (Object.prototype.hasOwnProperty.call(BillingCycleType, key)) {
            if (BillingCycleType[key as keyof typeof BillingCycleType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BillingCycleTypeFromJSON(json: any): BillingCycleType {
    return BillingCycleTypeFromJSONTyped(json, false);
}

export function BillingCycleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingCycleType {
    return json as BillingCycleType;
}

export function BillingCycleTypeToJSON(value?: BillingCycleType | null): any {
    return value as any;
}

