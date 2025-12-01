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
export const TransactionEnvironmentSelectionStrategy = {
    ForceTestEnvironment: 'FORCE_TEST_ENVIRONMENT',
    ForceProductionEnvironment: 'FORCE_PRODUCTION_ENVIRONMENT',
    UseConfiguration: 'USE_CONFIGURATION'
} as const;
export type TransactionEnvironmentSelectionStrategy = typeof TransactionEnvironmentSelectionStrategy[keyof typeof TransactionEnvironmentSelectionStrategy];


export function instanceOfTransactionEnvironmentSelectionStrategy(value: any): boolean {
    for (const key in TransactionEnvironmentSelectionStrategy) {
        if (Object.prototype.hasOwnProperty.call(TransactionEnvironmentSelectionStrategy, key)) {
            if (TransactionEnvironmentSelectionStrategy[key as keyof typeof TransactionEnvironmentSelectionStrategy] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionEnvironmentSelectionStrategyFromJSON(json: any): TransactionEnvironmentSelectionStrategy {
    return TransactionEnvironmentSelectionStrategyFromJSONTyped(json, false);
}

export function TransactionEnvironmentSelectionStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEnvironmentSelectionStrategy {
    return json as TransactionEnvironmentSelectionStrategy;
}

export function TransactionEnvironmentSelectionStrategyToJSON(value?: TransactionEnvironmentSelectionStrategy | null): any {
    return value as any;
}

export function TransactionEnvironmentSelectionStrategyToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionEnvironmentSelectionStrategy {
    return value as TransactionEnvironmentSelectionStrategy;
}

