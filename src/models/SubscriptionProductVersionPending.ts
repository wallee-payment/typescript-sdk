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
import type { TaxCalculation } from './TaxCalculation';
import {
    TaxCalculationFromJSON,
    TaxCalculationFromJSONTyped,
    TaxCalculationToJSON,
} from './TaxCalculation';
import type { SubscriptionProductVersionState } from './SubscriptionProductVersionState';
import {
    SubscriptionProductVersionStateFromJSON,
    SubscriptionProductVersionStateFromJSONTyped,
    SubscriptionProductVersionStateToJSON,
} from './SubscriptionProductVersionState';

/**
 * 
 * @export
 * @interface SubscriptionProductVersionPending
 */
export interface SubscriptionProductVersionPending {
    /**
     * The three-letter codes (ISO 4217 format) of the currencies that the product version supports.
     * @type {Set<string>}
     * @memberof SubscriptionProductVersionPending
     */
    enabledCurrencies?: Set<string>;
    /**
     * The product that the version belongs to.
     * @type {number}
     * @memberof SubscriptionProductVersionPending
     */
    product?: number;
    /**
     * 
     * @type {TaxCalculation}
     * @memberof SubscriptionProductVersionPending
     */
    taxCalculation?: TaxCalculation;
    /**
     * The recurring period of time, typically monthly or annually, for which a subscriber is charged.
     * @type {string}
     * @memberof SubscriptionProductVersionPending
     */
    billingCycle?: string;
    /**
     * The three-letter code (ISO 4217 format) of the product version's default currency.
     * @type {string}
     * @memberof SubscriptionProductVersionPending
     */
    defaultCurrency?: string;
    /**
     * The localized name of the product that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductVersionPending
     */
    name?: { [key: string]: string; };
    /**
     * The minimum number of periods the subscription will run before it can be terminated.
     * @type {number}
     * @memberof SubscriptionProductVersionPending
     */
    minimalNumberOfPeriods?: number;
    /**
     * A comment that describes the product version and why it was created. It is not disclosed to the subscriber.
     * @type {string}
     * @memberof SubscriptionProductVersionPending
     */
    comment?: string;
    /**
     * 
     * @type {SubscriptionProductVersionState}
     * @memberof SubscriptionProductVersionPending
     */
    state?: SubscriptionProductVersionState;
    /**
     * The number of periods the subscription will keep running after its termination was requested.
     * @type {number}
     * @memberof SubscriptionProductVersionPending
     */
    numberOfNoticePeriods?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriptionProductVersionPending
     */
    version: number;
}

/**
 * Check if a given object implements the SubscriptionProductVersionPending interface.
 */
export function instanceOfSubscriptionProductVersionPending(value: object): value is SubscriptionProductVersionPending {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriptionProductVersionPendingFromJSON(json: any): SubscriptionProductVersionPending {
    return SubscriptionProductVersionPendingFromJSONTyped(json, false);
}

export function SubscriptionProductVersionPendingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductVersionPending {
    if (json == null) {
        return json;
    }
    return {
        
        'enabledCurrencies': json['enabledCurrencies'] == null ? undefined : json['enabledCurrencies'],
        'product': json['product'] == null ? undefined : json['product'],
        'taxCalculation': json['taxCalculation'] == null ? undefined : TaxCalculationFromJSON(json['taxCalculation']),
        'billingCycle': json['billingCycle'] == null ? undefined : json['billingCycle'],
        'defaultCurrency': json['defaultCurrency'] == null ? undefined : json['defaultCurrency'],
        'name': json['name'] == null ? undefined : json['name'],
        'minimalNumberOfPeriods': json['minimalNumberOfPeriods'] == null ? undefined : json['minimalNumberOfPeriods'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'state': json['state'] == null ? undefined : SubscriptionProductVersionStateFromJSON(json['state']),
        'numberOfNoticePeriods': json['numberOfNoticePeriods'] == null ? undefined : json['numberOfNoticePeriods'],
        'version': json['version'],
    };
}

export function SubscriptionProductVersionPendingToJSON(value?: SubscriptionProductVersionPending | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enabledCurrencies': value['enabledCurrencies'] == null ? undefined : Array.from(value['enabledCurrencies'] as Set<any>),
        'product': value['product'],
        'taxCalculation': TaxCalculationToJSON(value['taxCalculation']),
        'billingCycle': value['billingCycle'],
        'defaultCurrency': value['defaultCurrency'],
        'name': value['name'],
        'minimalNumberOfPeriods': value['minimalNumberOfPeriods'],
        'comment': value['comment'],
        'state': SubscriptionProductVersionStateToJSON(value['state']),
        'numberOfNoticePeriods': value['numberOfNoticePeriods'],
        'version': value['version'],
    };
}

