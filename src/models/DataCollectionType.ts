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
export const DataCollectionType = {
    Onsite: 'ONSITE',
    Offsite: 'OFFSITE'
} as const;
export type DataCollectionType = typeof DataCollectionType[keyof typeof DataCollectionType];


export function instanceOfDataCollectionType(value: any): boolean {
    for (const key in DataCollectionType) {
        if (Object.prototype.hasOwnProperty.call(DataCollectionType, key)) {
            if (DataCollectionType[key as keyof typeof DataCollectionType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DataCollectionTypeFromJSON(json: any): DataCollectionType {
    return DataCollectionTypeFromJSONTyped(json, false);
}

export function DataCollectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataCollectionType {
    return json as DataCollectionType;
}

export function DataCollectionTypeToJSON(value?: DataCollectionType | null): any {
    return value as any;
}

export function DataCollectionTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): DataCollectionType {
    return value as DataCollectionType;
}

