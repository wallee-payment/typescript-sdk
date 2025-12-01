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
export const AccountState = {
    Create: 'CREATE',
    RestrictedActive: 'RESTRICTED_ACTIVE',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type AccountState = typeof AccountState[keyof typeof AccountState];


export function instanceOfAccountState(value: any): boolean {
    for (const key in AccountState) {
        if (Object.prototype.hasOwnProperty.call(AccountState, key)) {
            if (AccountState[key as keyof typeof AccountState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AccountStateFromJSON(json: any): AccountState {
    return AccountStateFromJSONTyped(json, false);
}

export function AccountStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountState {
    return json as AccountState;
}

export function AccountStateToJSON(value?: AccountState | null): any {
    return value as any;
}

export function AccountStateToJSONTyped(value: any, ignoreDiscriminator: boolean): AccountState {
    return value as AccountState;
}

