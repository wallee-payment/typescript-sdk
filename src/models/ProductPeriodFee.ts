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
import type { SubscriptionProductComponent } from './SubscriptionProductComponent';
import {
    SubscriptionProductComponentFromJSON,
    SubscriptionProductComponentFromJSONTyped,
    SubscriptionProductComponentToJSON,
} from './SubscriptionProductComponent';
import type { PersistableCurrencyAmount } from './PersistableCurrencyAmount';
import {
    PersistableCurrencyAmountFromJSON,
    PersistableCurrencyAmountFromJSONTyped,
    PersistableCurrencyAmountToJSON,
} from './PersistableCurrencyAmount';
import type { ProductFeeType } from './ProductFeeType';
import {
    ProductFeeTypeFromJSON,
    ProductFeeTypeFromJSONTyped,
    ProductFeeTypeToJSON,
} from './ProductFeeType';

/**
 * 
 * @export
 * @interface ProductPeriodFee
 */
export interface ProductPeriodFee {
    /**
     * The amount charged to the customer for each billing cycle during the term of a subscription.
     * @type {Set<PersistableCurrencyAmount>}
     * @memberof ProductPeriodFee
     */
    readonly periodFee?: Set<PersistableCurrencyAmount>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ProductPeriodFee
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {SubscriptionProductComponent}
     * @memberof ProductPeriodFee
     */
    component?: SubscriptionProductComponent;
    /**
     * The number of subscription billing cycles that count as a trial phase and during which no fees are charged.
     * @type {number}
     * @memberof ProductPeriodFee
     */
    readonly numberOfFreeTrialPeriods?: number;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFee
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFee
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ProductPeriodFee
     */
    readonly id?: number;
    /**
     * 
     * @type {ProductFeeType}
     * @memberof ProductPeriodFee
     */
    type?: ProductFeeType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ProductPeriodFee
     */
    readonly version?: number;
    /**
     * The localized title that be used on ledger entries and invoices.
     * @type {{ [key: string]: string; }}
     * @memberof ProductPeriodFee
     */
    readonly ledgerEntryTitle?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ProductPeriodFee interface.
 */
export function instanceOfProductPeriodFee(value: object): value is ProductPeriodFee {
    return true;
}

export function ProductPeriodFeeFromJSON(json: any): ProductPeriodFee {
    return ProductPeriodFeeFromJSONTyped(json, false);
}

export function ProductPeriodFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPeriodFee {
    if (json == null) {
        return json;
    }
    return {
        
        'periodFee': json['periodFee'] == null ? undefined : (new Set((json['periodFee'] as Array<any>).map(PersistableCurrencyAmountFromJSON))),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'component': json['component'] == null ? undefined : SubscriptionProductComponentFromJSON(json['component']),
        'numberOfFreeTrialPeriods': json['numberOfFreeTrialPeriods'] == null ? undefined : json['numberOfFreeTrialPeriods'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : ProductFeeTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
        'ledgerEntryTitle': json['ledgerEntryTitle'] == null ? undefined : json['ledgerEntryTitle'],
    };
}

export function ProductPeriodFeeToJSON(value?: Omit<ProductPeriodFee, 'periodFee'|'linkedSpaceId'|'numberOfFreeTrialPeriods'|'name'|'description'|'id'|'version'|'ledgerEntryTitle'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': SubscriptionProductComponentToJSON(value['component']),
        'type': ProductFeeTypeToJSON(value['type']),
    };
}

