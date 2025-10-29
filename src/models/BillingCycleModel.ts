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
import { mapValues } from '../runtime';
import type { BillingDayCustomization } from './BillingDayCustomization';
import {
    BillingDayCustomizationFromJSON,
    BillingDayCustomizationFromJSONTyped,
    BillingDayCustomizationToJSON,
} from './BillingDayCustomization';
import type { BillingCycleType } from './BillingCycleType';
import {
    BillingCycleTypeFromJSON,
    BillingCycleTypeFromJSONTyped,
    BillingCycleTypeToJSON,
} from './BillingCycleType';
import type { DisplayableDayOfWeek } from './DisplayableDayOfWeek';
import {
    DisplayableDayOfWeekFromJSON,
    DisplayableDayOfWeekFromJSONTyped,
    DisplayableDayOfWeekToJSON,
} from './DisplayableDayOfWeek';
import type { DisplayableMonth } from './DisplayableMonth';
import {
    DisplayableMonthFromJSON,
    DisplayableMonthFromJSONTyped,
    DisplayableMonthToJSON,
} from './DisplayableMonth';

/**
 * 
 * @export
 * @interface BillingCycleModel
 */
export interface BillingCycleModel {
    /**
     * 
     * @type {DisplayableMonth}
     * @memberof BillingCycleModel
     */
    month?: DisplayableMonth;
    /**
     * 
     * @type {BillingDayCustomization}
     * @memberof BillingCycleModel
     */
    customization?: BillingDayCustomization;
    /**
     * 
     * @type {number}
     * @memberof BillingCycleModel
     */
    dayOfMonth?: number;
    /**
     * 
     * @type {DisplayableDayOfWeek}
     * @memberof BillingCycleModel
     */
    weeklyDay?: DisplayableDayOfWeek;
    /**
     * Billing Cycle type multiplied by Number of Periods defines billing cycle duration, e.g. 3 months. Monthly types require 1-12; weekly and yearly types require 1-9 periods; and daily types require 1-30.
     * @type {number}
     * @memberof BillingCycleModel
     */
    numberOfPeriods: number;
    /**
     * 
     * @type {BillingCycleType}
     * @memberof BillingCycleModel
     */
    billingCycleType: BillingCycleType;
}

/**
 * Check if a given object implements the BillingCycleModel interface.
 */
export function instanceOfBillingCycleModel(value: object): value is BillingCycleModel {
    if (!('numberOfPeriods' in value) || value['numberOfPeriods'] === undefined) return false;
    if (!('billingCycleType' in value) || value['billingCycleType'] === undefined) return false;
    return true;
}

export function BillingCycleModelFromJSON(json: any): BillingCycleModel {
    return BillingCycleModelFromJSONTyped(json, false);
}

export function BillingCycleModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingCycleModel {
    if (json == null) {
        return json;
    }
    return {
        
        'month': json['month'] == null ? undefined : DisplayableMonthFromJSON(json['month']),
        'customization': json['customization'] == null ? undefined : BillingDayCustomizationFromJSON(json['customization']),
        'dayOfMonth': json['dayOfMonth'] == null ? undefined : json['dayOfMonth'],
        'weeklyDay': json['weeklyDay'] == null ? undefined : DisplayableDayOfWeekFromJSON(json['weeklyDay']),
        'numberOfPeriods': json['numberOfPeriods'],
        'billingCycleType': BillingCycleTypeFromJSON(json['billingCycleType']),
    };
}

export function BillingCycleModelToJSON(value?: BillingCycleModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'month': DisplayableMonthToJSON(value['month']),
        'customization': BillingDayCustomizationToJSON(value['customization']),
        'dayOfMonth': value['dayOfMonth'],
        'weeklyDay': DisplayableDayOfWeekToJSON(value['weeklyDay']),
        'numberOfPeriods': value['numberOfPeriods'],
        'billingCycleType': BillingCycleTypeToJSON(value['billingCycleType']),
    };
}

