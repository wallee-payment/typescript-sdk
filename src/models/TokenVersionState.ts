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
export const TokenVersionState = {
    Uninitialized: 'UNINITIALIZED',
    Active: 'ACTIVE',
    Obsolete: 'OBSOLETE'
} as const;
export type TokenVersionState = typeof TokenVersionState[keyof typeof TokenVersionState];


export function instanceOfTokenVersionState(value: any): boolean {
    for (const key in TokenVersionState) {
        if (Object.prototype.hasOwnProperty.call(TokenVersionState, key)) {
            if (TokenVersionState[key as keyof typeof TokenVersionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TokenVersionStateFromJSON(json: any): TokenVersionState {
    return TokenVersionStateFromJSONTyped(json, false);
}

export function TokenVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVersionState {
    return json as TokenVersionState;
}

export function TokenVersionStateToJSON(value?: TokenVersionState | null): any {
    return value as any;
}

export function TokenVersionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): TokenVersionState {
    return value as TokenVersionState;
}

