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
export const DisplayableDayOfWeek = {
    Monday: 'MONDAY',
    Tuesday: 'TUESDAY',
    Wednesday: 'WEDNESDAY',
    Thursday: 'THURSDAY',
    Friday: 'FRIDAY',
    Saturday: 'SATURDAY',
    Sunday: 'SUNDAY'
} as const;
export type DisplayableDayOfWeek = typeof DisplayableDayOfWeek[keyof typeof DisplayableDayOfWeek];


export function instanceOfDisplayableDayOfWeek(value: any): boolean {
    for (const key in DisplayableDayOfWeek) {
        if (Object.prototype.hasOwnProperty.call(DisplayableDayOfWeek, key)) {
            if (DisplayableDayOfWeek[key as keyof typeof DisplayableDayOfWeek] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DisplayableDayOfWeekFromJSON(json: any): DisplayableDayOfWeek {
    return DisplayableDayOfWeekFromJSONTyped(json, false);
}

export function DisplayableDayOfWeekFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisplayableDayOfWeek {
    return json as DisplayableDayOfWeek;
}

export function DisplayableDayOfWeekToJSON(value?: DisplayableDayOfWeek | null): any {
    return value as any;
}

export function DisplayableDayOfWeekToJSONTyped(value: any, ignoreDiscriminator: boolean): DisplayableDayOfWeek {
    return value as DisplayableDayOfWeek;
}

