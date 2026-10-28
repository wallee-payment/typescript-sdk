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
export const RefundPercentageRange = {
    OneToFive: 'ONE_TO_FIVE',
    FiveToTen: 'FIVE_TO_TEN',
    TenToFifteen: 'TEN_TO_FIFTEEN',
    FifteenToTwenty: 'FIFTEEN_TO_TWENTY',
    TwentyToThirty: 'TWENTY_TO_THIRTY',
    ThirtyToForty: 'THIRTY_TO_FORTY',
    FortyToFifty: 'FORTY_TO_FIFTY',
    OverFifty: 'OVER_FIFTY'
} as const;
export type RefundPercentageRange = typeof RefundPercentageRange[keyof typeof RefundPercentageRange];


export function instanceOfRefundPercentageRange(value: any): boolean {
    for (const key in RefundPercentageRange) {
        if (Object.prototype.hasOwnProperty.call(RefundPercentageRange, key)) {
            if (RefundPercentageRange[key as keyof typeof RefundPercentageRange] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RefundPercentageRangeFromJSON(json: any): RefundPercentageRange {
    return RefundPercentageRangeFromJSONTyped(json, false);
}

export function RefundPercentageRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundPercentageRange {
    return json as RefundPercentageRange;
}

export function RefundPercentageRangeToJSON(value?: RefundPercentageRange | null): any {
    return value as any;
}

export function RefundPercentageRangeToJSONTyped(value: any, ignoreDiscriminator: boolean): RefundPercentageRange {
    return value as RefundPercentageRange;
}

