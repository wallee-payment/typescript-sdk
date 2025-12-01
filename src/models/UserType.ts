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
export const UserType = {
    HumanUser: 'HUMAN_USER',
    SingleSignonUser: 'SINGLE_SIGNON_USER',
    ApplicationUser: 'APPLICATION_USER',
    AnonymousUser: 'ANONYMOUS_USER',
    ServerUser: 'SERVER_USER'
} as const;
export type UserType = typeof UserType[keyof typeof UserType];


export function instanceOfUserType(value: any): boolean {
    for (const key in UserType) {
        if (Object.prototype.hasOwnProperty.call(UserType, key)) {
            if (UserType[key as keyof typeof UserType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UserTypeFromJSON(json: any): UserType {
    return UserTypeFromJSONTyped(json, false);
}

export function UserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserType {
    return json as UserType;
}

export function UserTypeToJSON(value?: UserType | null): any {
    return value as any;
}

export function UserTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): UserType {
    return value as UserType;
}

