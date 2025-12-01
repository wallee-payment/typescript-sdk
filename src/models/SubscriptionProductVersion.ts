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
import type { BillingCycleModel } from './BillingCycleModel';
import {
    BillingCycleModelFromJSON,
    BillingCycleModelFromJSONTyped,
    BillingCycleModelToJSON,
    BillingCycleModelToJSONTyped,
} from './BillingCycleModel';
import type { TaxCalculation } from './TaxCalculation';
import {
    TaxCalculationFromJSON,
    TaxCalculationFromJSONTyped,
    TaxCalculationToJSON,
    TaxCalculationToJSONTyped,
} from './TaxCalculation';
import type { SubscriptionProduct } from './SubscriptionProduct';
import {
    SubscriptionProductFromJSON,
    SubscriptionProductFromJSONTyped,
    SubscriptionProductToJSON,
    SubscriptionProductToJSONTyped,
} from './SubscriptionProduct';
import type { SubscriptionProductVersionState } from './SubscriptionProductVersionState';
import {
    SubscriptionProductVersionStateFromJSON,
    SubscriptionProductVersionStateFromJSONTyped,
    SubscriptionProductVersionStateToJSON,
    SubscriptionProductVersionStateToJSONTyped,
} from './SubscriptionProductVersionState';

/**
 * 
 * @export
 * @interface SubscriptionProductVersion
 */
export interface SubscriptionProductVersion {
    /**
     * The date and time when the product version was retired.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly retiringFinishedOn?: Date;
    /**
     * The three-letter codes (ISO 4217 format) of the currencies that the product version supports.
     * @type {Set<string>}
     * @memberof SubscriptionProductVersion
     */
    readonly enabledCurrencies?: Set<string>;
    /**
     * 
     * @type {SubscriptionProduct}
     * @memberof SubscriptionProductVersion
     */
    product?: SubscriptionProduct;
    /**
     * The date and time when the product version's retirement was started.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly retiringStartedOn?: Date;
    /**
     * 
     * @type {TaxCalculation}
     * @memberof SubscriptionProductVersion
     */
    taxCalculation?: TaxCalculation;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The date and time when the product version was created.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly version?: number;
    /**
     * The reference used to identify the product version.
     * @type {string}
     * @memberof SubscriptionProductVersion
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the product version was activated.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly activatedOn?: Date;
    /**
     * The recurring period of time, typically monthly or annually, for which a subscriber is charged.
     * @type {string}
     * @memberof SubscriptionProductVersion
     */
    readonly billingCycle?: string;
    /**
     * The three-letter code (ISO 4217 format) of the product version's default currency.
     * @type {string}
     * @memberof SubscriptionProductVersion
     */
    readonly defaultCurrency?: string;
    /**
     * The localized name of the product that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductVersion
     */
    readonly name?: { [key: string]: string; };
    /**
     * The minimum number of periods the subscription will run before it can be terminated.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly minimalNumberOfPeriods?: number;
    /**
     * The date and time when the product version was made obsolete.
     * @type {Date}
     * @memberof SubscriptionProductVersion
     */
    readonly obsoletedOn?: Date;
    /**
     * 
     * @type {BillingCycleModel}
     * @memberof SubscriptionProductVersion
     */
    billingCycleModel?: BillingCycleModel;
    /**
     * A comment that describes the product version and why it was created. It is not disclosed to the subscriber.
     * @type {string}
     * @memberof SubscriptionProductVersion
     */
    readonly comment?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly id?: number;
    /**
     * Whenever a new version of a product is created, the number is increased and assigned.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly incrementNumber?: number;
    /**
     * 
     * @type {SubscriptionProductVersionState}
     * @memberof SubscriptionProductVersion
     */
    state?: SubscriptionProductVersionState;
    /**
     * The number of periods the subscription will keep running after its termination was requested.
     * @type {number}
     * @memberof SubscriptionProductVersion
     */
    readonly numberOfNoticePeriods?: number;
}



/**
 * Check if a given object implements the SubscriptionProductVersion interface.
 */
export function instanceOfSubscriptionProductVersion(value: object): value is SubscriptionProductVersion {
    return true;
}

export function SubscriptionProductVersionFromJSON(json: any): SubscriptionProductVersion {
    return SubscriptionProductVersionFromJSONTyped(json, false);
}

export function SubscriptionProductVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'retiringFinishedOn': json['retiringFinishedOn'] == null ? undefined : (new Date(json['retiringFinishedOn'])),
        'enabledCurrencies': json['enabledCurrencies'] == null ? undefined : new Set(json['enabledCurrencies']),
        'product': json['product'] == null ? undefined : SubscriptionProductFromJSON(json['product']),
        'retiringStartedOn': json['retiringStartedOn'] == null ? undefined : (new Date(json['retiringStartedOn'])),
        'taxCalculation': json['taxCalculation'] == null ? undefined : TaxCalculationFromJSON(json['taxCalculation']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'billingCycle': json['billingCycle'] == null ? undefined : json['billingCycle'],
        'defaultCurrency': json['defaultCurrency'] == null ? undefined : json['defaultCurrency'],
        'name': json['name'] == null ? undefined : json['name'],
        'minimalNumberOfPeriods': json['minimalNumberOfPeriods'] == null ? undefined : json['minimalNumberOfPeriods'],
        'obsoletedOn': json['obsoletedOn'] == null ? undefined : (new Date(json['obsoletedOn'])),
        'billingCycleModel': json['billingCycleModel'] == null ? undefined : BillingCycleModelFromJSON(json['billingCycleModel']),
        'comment': json['comment'] == null ? undefined : json['comment'],
        'id': json['id'] == null ? undefined : json['id'],
        'incrementNumber': json['incrementNumber'] == null ? undefined : json['incrementNumber'],
        'state': json['state'] == null ? undefined : SubscriptionProductVersionStateFromJSON(json['state']),
        'numberOfNoticePeriods': json['numberOfNoticePeriods'] == null ? undefined : json['numberOfNoticePeriods'],
    };
}

export function SubscriptionProductVersionToJSON(json: any): SubscriptionProductVersion {
    return SubscriptionProductVersionToJSONTyped(json, false);
}

export function SubscriptionProductVersionToJSONTyped(value?: Omit<SubscriptionProductVersion, 'retiringFinishedOn'|'enabledCurrencies'|'retiringStartedOn'|'plannedPurgeDate'|'createdOn'|'version'|'reference'|'linkedSpaceId'|'activatedOn'|'billingCycle'|'defaultCurrency'|'name'|'minimalNumberOfPeriods'|'obsoletedOn'|'comment'|'id'|'incrementNumber'|'numberOfNoticePeriods'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'product': SubscriptionProductToJSON(value['product']),
        'taxCalculation': TaxCalculationToJSON(value['taxCalculation']),
        'billingCycleModel': BillingCycleModelToJSON(value['billingCycleModel']),
        'state': SubscriptionProductVersionStateToJSON(value['state']),
    };
}

