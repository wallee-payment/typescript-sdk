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
export const DeliveryDaysRange = {
    ZeroDays: 'ZERO_DAYS',
    OneToThreeDays: 'ONE_TO_THREE_DAYS',
    ThreeToFiveDays: 'THREE_TO_FIVE_DAYS',
    FiveToTenDays: 'FIVE_TO_TEN_DAYS',
    TenToFifteenDays: 'TEN_TO_FIFTEEN_DAYS',
    FifteenToTwentyDays: 'FIFTEEN_TO_TWENTY_DAYS',
    TwentyToThirtyDays: 'TWENTY_TO_THIRTY_DAYS',
    ThirtyToFortyDays: 'THIRTY_TO_FORTY_DAYS',
    FortyToFiftyDays: 'FORTY_TO_FIFTY_DAYS',
    FiftyToSixtyDays: 'FIFTY_TO_SIXTY_DAYS',
    SixtyToNinetyDays: 'SIXTY_TO_NINETY_DAYS',
    OverNinetyDays: 'OVER_NINETY_DAYS'
} as const;
export type DeliveryDaysRange = typeof DeliveryDaysRange[keyof typeof DeliveryDaysRange];


export function instanceOfDeliveryDaysRange(value: any): boolean {
    for (const key in DeliveryDaysRange) {
        if (Object.prototype.hasOwnProperty.call(DeliveryDaysRange, key)) {
            if (DeliveryDaysRange[key as keyof typeof DeliveryDaysRange] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DeliveryDaysRangeFromJSON(json: any): DeliveryDaysRange {
    return DeliveryDaysRangeFromJSONTyped(json, false);
}

export function DeliveryDaysRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryDaysRange {
    return json as DeliveryDaysRange;
}

export function DeliveryDaysRangeToJSON(value?: DeliveryDaysRange | null): any {
    return value as any;
}

export function DeliveryDaysRangeToJSONTyped(value: any, ignoreDiscriminator: boolean): DeliveryDaysRange {
    return value as DeliveryDaysRange;
}

