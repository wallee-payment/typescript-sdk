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
export const SecretKeyState = {
    Generated: 'GENERATED',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE'
} as const;
export type SecretKeyState = typeof SecretKeyState[keyof typeof SecretKeyState];


export function instanceOfSecretKeyState(value: any): boolean {
    for (const key in SecretKeyState) {
        if (Object.prototype.hasOwnProperty.call(SecretKeyState, key)) {
            if (SecretKeyState[key as keyof typeof SecretKeyState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SecretKeyStateFromJSON(json: any): SecretKeyState {
    return SecretKeyStateFromJSONTyped(json, false);
}

export function SecretKeyStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretKeyState {
    return json as SecretKeyState;
}

export function SecretKeyStateToJSON(value?: SecretKeyState | null): any {
    return value as any;
}

export function SecretKeyStateToJSONTyped(value: any, ignoreDiscriminator: boolean): SecretKeyState {
    return value as SecretKeyState;
}

