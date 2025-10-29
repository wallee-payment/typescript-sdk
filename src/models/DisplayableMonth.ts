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
export const DisplayableMonth = {
    January: 'JANUARY',
    February: 'FEBRUARY',
    March: 'MARCH',
    April: 'APRIL',
    May: 'MAY',
    June: 'JUNE',
    July: 'JULY',
    August: 'AUGUST',
    September: 'SEPTEMBER',
    October: 'OCTOBER',
    November: 'NOVEMBER',
    December: 'DECEMBER'
} as const;
export type DisplayableMonth = typeof DisplayableMonth[keyof typeof DisplayableMonth];


export function instanceOfDisplayableMonth(value: any): boolean {
    for (const key in DisplayableMonth) {
        if (Object.prototype.hasOwnProperty.call(DisplayableMonth, key)) {
            if (DisplayableMonth[key as keyof typeof DisplayableMonth] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DisplayableMonthFromJSON(json: any): DisplayableMonth {
    return DisplayableMonthFromJSONTyped(json, false);
}

export function DisplayableMonthFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisplayableMonth {
    return json as DisplayableMonth;
}

export function DisplayableMonthToJSON(value?: DisplayableMonth | null): any {
    return value as any;
}

