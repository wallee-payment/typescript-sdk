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
export const BankTransactionFlowDirection = {
    Inflow: 'INFLOW',
    Outflow: 'OUTFLOW'
} as const;
export type BankTransactionFlowDirection = typeof BankTransactionFlowDirection[keyof typeof BankTransactionFlowDirection];


export function instanceOfBankTransactionFlowDirection(value: any): boolean {
    for (const key in BankTransactionFlowDirection) {
        if (Object.prototype.hasOwnProperty.call(BankTransactionFlowDirection, key)) {
            if (BankTransactionFlowDirection[key as keyof typeof BankTransactionFlowDirection] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BankTransactionFlowDirectionFromJSON(json: any): BankTransactionFlowDirection {
    return BankTransactionFlowDirectionFromJSONTyped(json, false);
}

export function BankTransactionFlowDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransactionFlowDirection {
    return json as BankTransactionFlowDirection;
}

export function BankTransactionFlowDirectionToJSON(value?: BankTransactionFlowDirection | null): any {
    return value as any;
}

export function BankTransactionFlowDirectionToJSONTyped(value: any, ignoreDiscriminator: boolean): BankTransactionFlowDirection {
    return value as BankTransactionFlowDirection;
}

