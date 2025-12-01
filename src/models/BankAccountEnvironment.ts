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
export const BankAccountEnvironment = {
    Production: 'PRODUCTION',
    Test: 'TEST'
} as const;
export type BankAccountEnvironment = typeof BankAccountEnvironment[keyof typeof BankAccountEnvironment];


export function instanceOfBankAccountEnvironment(value: any): boolean {
    for (const key in BankAccountEnvironment) {
        if (Object.prototype.hasOwnProperty.call(BankAccountEnvironment, key)) {
            if (BankAccountEnvironment[key as keyof typeof BankAccountEnvironment] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BankAccountEnvironmentFromJSON(json: any): BankAccountEnvironment {
    return BankAccountEnvironmentFromJSONTyped(json, false);
}

export function BankAccountEnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountEnvironment {
    return json as BankAccountEnvironment;
}

export function BankAccountEnvironmentToJSON(value?: BankAccountEnvironment | null): any {
    return value as any;
}

export function BankAccountEnvironmentToJSONTyped(value: any, ignoreDiscriminator: boolean): BankAccountEnvironment {
    return value as BankAccountEnvironment;
}

