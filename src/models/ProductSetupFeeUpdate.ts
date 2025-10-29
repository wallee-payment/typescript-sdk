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
 * @interface ProductSetupFeeUpdate
 */
export interface ProductSetupFeeUpdate {
    /**
     * The product component that the fee belongs to.
     * @type {number}
     * @memberof ProductSetupFeeUpdate
     */
    component?: number;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductSetupFeeUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductSetupFeeUpdate
     */
    description?: { [key: string]: string; };
    /**
     * The amount charged to the customer once when they subscribe to a subscription.
     * @type {Set<PersistableCurrencyAmountUpdate>}
     * @memberof ProductSetupFeeUpdate
     */
    setupFee?: Set<PersistableCurrencyAmountUpdate>;
    /**
     * The amount charged to the customer when a subscription is downgraded.
     * @type {Set<PersistableCurrencyAmountUpdate>}
     * @memberof ProductSetupFeeUpdate
     */
    onDowngradeCreditedAmount?: Set<PersistableCurrencyAmountUpdate>;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof ProductSetupFeeUpdate
     */
    version: number;
    /**
     * The amount charged to the customer when a subscription is upgraded.
     * @type {Set<PersistableCurrencyAmountUpdate>}
     * @memberof ProductSetupFeeUpdate
     */
    onUpgradeCreditedAmount?: Set<PersistableCurrencyAmountUpdate>;
}

/**
 * Check if a given object implements the ProductSetupFeeUpdate interface.
 */
export function instanceOfProductSetupFeeUpdate(value: object): value is ProductSetupFeeUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ProductSetupFeeUpdateFromJSON(json: any): ProductSetupFeeUpdate {
    return ProductSetupFeeUpdateFromJSONTyped(json, false);
}

export function ProductSetupFeeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSetupFeeUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'component': json['component'] == null ? undefined : json['component'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'setupFee': json['setupFee'] == null ? undefined : (new Set((json['setupFee'] as Array<any>).map(PersistableCurrencyAmountUpdateFromJSON))),
        'onDowngradeCreditedAmount': json['onDowngradeCreditedAmount'] == null ? undefined : (new Set((json['onDowngradeCreditedAmount'] as Array<any>).map(PersistableCurrencyAmountUpdateFromJSON))),
        'version': json['version'],
        'onUpgradeCreditedAmount': json['onUpgradeCreditedAmount'] == null ? undefined : (new Set((json['onUpgradeCreditedAmount'] as Array<any>).map(PersistableCurrencyAmountUpdateFromJSON))),
    };
}

export function ProductSetupFeeUpdateToJSON(value?: ProductSetupFeeUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': value['component'],
        'name': value['name'],
        'description': value['description'],
        'setupFee': value['setupFee'] == null ? undefined : (Array.from(value['setupFee'] as Set<any>).map(PersistableCurrencyAmountUpdateToJSON)),
        'onDowngradeCreditedAmount': value['onDowngradeCreditedAmount'] == null ? undefined : (Array.from(value['onDowngradeCreditedAmount'] as Set<any>).map(PersistableCurrencyAmountUpdateToJSON)),
        'version': value['version'],
        'onUpgradeCreditedAmount': value['onUpgradeCreditedAmount'] == null ? undefined : (Array.from(value['onUpgradeCreditedAmount'] as Set<any>).map(PersistableCurrencyAmountUpdateToJSON)),
    };
}

