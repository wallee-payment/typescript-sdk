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
export const RecurringIndicator = {
    RegularTransaction: 'REGULAR_TRANSACTION',
    InitialRecurringTransaction: 'INITIAL_RECURRING_TRANSACTION',
    MerchantInitiatedRecurringTransaction: 'MERCHANT_INITIATED_RECURRING_TRANSACTION',
    CustomerInitiatedRecurringTransaction: 'CUSTOMER_INITIATED_RECURRING_TRANSACTION'
} as const;
export type RecurringIndicator = typeof RecurringIndicator[keyof typeof RecurringIndicator];


export function instanceOfRecurringIndicator(value: any): boolean {
    for (const key in RecurringIndicator) {
        if (Object.prototype.hasOwnProperty.call(RecurringIndicator, key)) {
            if (RecurringIndicator[key as keyof typeof RecurringIndicator] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RecurringIndicatorFromJSON(json: any): RecurringIndicator {
    return RecurringIndicatorFromJSONTyped(json, false);
}

export function RecurringIndicatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringIndicator {
    return json as RecurringIndicator;
}

export function RecurringIndicatorToJSON(value?: RecurringIndicator | null): any {
    return value as any;
}

export function RecurringIndicatorToJSONTyped(value: any, ignoreDiscriminator: boolean): RecurringIndicator {
    return value as RecurringIndicator;
}

