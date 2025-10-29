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
export const CreationEntityState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type CreationEntityState = typeof CreationEntityState[keyof typeof CreationEntityState];


export function instanceOfCreationEntityState(value: any): boolean {
    for (const key in CreationEntityState) {
        if (Object.prototype.hasOwnProperty.call(CreationEntityState, key)) {
            if (CreationEntityState[key as keyof typeof CreationEntityState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CreationEntityStateFromJSON(json: any): CreationEntityState {
    return CreationEntityStateFromJSONTyped(json, false);
}

export function CreationEntityStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreationEntityState {
    return json as CreationEntityState;
}

export function CreationEntityStateToJSON(value?: CreationEntityState | null): any {
    return value as any;
}

