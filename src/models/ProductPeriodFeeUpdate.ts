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
import type { PersistableCurrencyAmountUpdate } from './PersistableCurrencyAmountUpdate';
import {
    PersistableCurrencyAmountUpdateFromJSON,
    PersistableCurrencyAmountUpdateFromJSONTyped,
    PersistableCurrencyAmountUpdateToJSON,
} from './PersistableCurrencyAmountUpdate';

/**
 * 
 * @export
 * @interface ProductPeriodFeeUpdate
 */
export interface ProductPeriodFeeUpdate {
    /**
     * The amount charged to the customer for each billing cycle during the term of a subscription.
     * @type {Set<PersistableCurrencyAmountUpdate>}
     * @memberof ProductPeriodFeeUpdate
     */
    periodFee?: Set<PersistableCurrencyAmountUpdate>;
    /**
     * The product component that the fee belongs to.
     * @type {number}
     * @memberof ProductPeriodFeeUpdate
     */
    component?: number;
    /**
     * The number of subscription billing cycles that count as a trial phase and during which no fees are charged.
     * @type {number}
     * @memberof ProductPeriodFeeUpdate
     */
    numberOfFreeTrialPeriods?: number;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFeeUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFeeUpdate
     */
    description?: { [key: string]: string; };
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof ProductPeriodFeeUpdate
     */
    version: number;
    /**
     * The localized title that be used on ledger entries and invoices.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFeeUpdate
     */
    ledgerEntryTitle?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ProductPeriodFeeUpdate interface.
 */
export function instanceOfProductPeriodFeeUpdate(value: object): value is ProductPeriodFeeUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ProductPeriodFeeUpdateFromJSON(json: any): ProductPeriodFeeUpdate {
    return ProductPeriodFeeUpdateFromJSONTyped(json, false);
}

export function ProductPeriodFeeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPeriodFeeUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'periodFee': json['periodFee'] == null ? undefined : (new Set((json['periodFee'] as Array<any>).map(PersistableCurrencyAmountUpdateFromJSON))),
        'component': json['component'] == null ? undefined : json['component'],
        'numberOfFreeTrialPeriods': json['numberOfFreeTrialPeriods'] == null ? undefined : json['numberOfFreeTrialPeriods'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'version': json['version'],
        'ledgerEntryTitle': json['ledgerEntryTitle'] == null ? undefined : json['ledgerEntryTitle'],
    };
}

export function ProductPeriodFeeUpdateToJSON(value?: ProductPeriodFeeUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'periodFee': value['periodFee'] == null ? undefined : (Array.from(value['periodFee'] as Set<any>).map(PersistableCurrencyAmountUpdateToJSON)),
        'component': value['component'],
        'numberOfFreeTrialPeriods': value['numberOfFreeTrialPeriods'],
        'name': value['name'],
        'description': value['description'],
        'version': value['version'],
        'ledgerEntryTitle': value['ledgerEntryTitle'],
    };
}

