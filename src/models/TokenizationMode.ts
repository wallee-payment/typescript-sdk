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
 * The tokenization mode controls how the tokenization of payment information is applied on the transaction.
 * @export
 */
export const TokenizationMode = {
    ForceUpdate: 'FORCE_UPDATE',
    ForceCreation: 'FORCE_CREATION',
    ForceCreationWithOneClickPayment: 'FORCE_CREATION_WITH_ONE_CLICK_PAYMENT',
    AllowOneClickPayment: 'ALLOW_ONE_CLICK_PAYMENT'
} as const;
export type TokenizationMode = typeof TokenizationMode[keyof typeof TokenizationMode];


export function instanceOfTokenizationMode(value: any): boolean {
    for (const key in TokenizationMode) {
        if (Object.prototype.hasOwnProperty.call(TokenizationMode, key)) {
            if (TokenizationMode[key as keyof typeof TokenizationMode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TokenizationModeFromJSON(json: any): TokenizationMode {
    return TokenizationModeFromJSONTyped(json, false);
}

export function TokenizationModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenizationMode {
    return json as TokenizationMode;
}

export function TokenizationModeToJSON(value?: TokenizationMode | null): any {
    return value as any;
}

