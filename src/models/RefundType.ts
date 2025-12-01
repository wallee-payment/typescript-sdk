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
export const RefundType = {
    MerchantInitiatedOnline: 'MERCHANT_INITIATED_ONLINE',
    MerchantInitiatedOffline: 'MERCHANT_INITIATED_OFFLINE',
    CustomerInitiatedAutomatic: 'CUSTOMER_INITIATED_AUTOMATIC',
    CustomerInitiatedManual: 'CUSTOMER_INITIATED_MANUAL'
} as const;
export type RefundType = typeof RefundType[keyof typeof RefundType];


export function instanceOfRefundType(value: any): boolean {
    for (const key in RefundType) {
        if (Object.prototype.hasOwnProperty.call(RefundType, key)) {
            if (RefundType[key as keyof typeof RefundType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RefundTypeFromJSON(json: any): RefundType {
    return RefundTypeFromJSONTyped(json, false);
}

export function RefundTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundType {
    return json as RefundType;
}

export function RefundTypeToJSON(value?: RefundType | null): any {
    return value as any;
}

export function RefundTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): RefundType {
    return value as RefundType;
}

