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
 * @interface ProductSetupFee
 */
export interface ProductSetupFee {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ProductSetupFee
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {SubscriptionProductComponent}
     * @memberof ProductSetupFee
     */
    component?: SubscriptionProductComponent;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductSetupFee
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductSetupFee
     */
    readonly description?: { [key: string]: string; };
    /**
     * The amount charged to the customer once when they subscribe to a subscription.
     * @type {Set<PersistableCurrencyAmount>}
     * @memberof ProductSetupFee
     */
    readonly setupFee?: Set<PersistableCurrencyAmount>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ProductSetupFee
     */
    readonly id?: number;
    /**
     * The amount charged to the customer when a subscription is downgraded.
     * @type {Set<PersistableCurrencyAmount>}
     * @memberof ProductSetupFee
     */
    readonly onDowngradeCreditedAmount?: Set<PersistableCurrencyAmount>;
    /**
     * 
     * @type {ProductFeeType}
     * @memberof ProductSetupFee
     */
    type?: ProductFeeType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ProductSetupFee
     */
    readonly version?: number;
    /**
     * The amount charged to the customer when a subscription is upgraded.
     * @type {Set<PersistableCurrencyAmount>}
     * @memberof ProductSetupFee
     */
    readonly onUpgradeCreditedAmount?: Set<PersistableCurrencyAmount>;
}

/**
 * Check if a given object implements the ProductSetupFee interface.
 */
export function instanceOfProductSetupFee(value: object): value is ProductSetupFee {
    return true;
}

export function ProductSetupFeeFromJSON(json: any): ProductSetupFee {
    return ProductSetupFeeFromJSONTyped(json, false);
}

export function ProductSetupFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSetupFee {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'component': json['component'] == null ? undefined : SubscriptionProductComponentFromJSON(json['component']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'setupFee': json['setupFee'] == null ? undefined : (new Set((json['setupFee'] as Array<any>).map(PersistableCurrencyAmountFromJSON))),
        'id': json['id'] == null ? undefined : json['id'],
        'onDowngradeCreditedAmount': json['onDowngradeCreditedAmount'] == null ? undefined : (new Set((json['onDowngradeCreditedAmount'] as Array<any>).map(PersistableCurrencyAmountFromJSON))),
        'type': json['type'] == null ? undefined : ProductFeeTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
        'onUpgradeCreditedAmount': json['onUpgradeCreditedAmount'] == null ? undefined : (new Set((json['onUpgradeCreditedAmount'] as Array<any>).map(PersistableCurrencyAmountFromJSON))),
    };
}

export function ProductSetupFeeToJSON(value?: Omit<ProductSetupFee, 'linkedSpaceId'|'name'|'description'|'setupFee'|'id'|'onDowngradeCreditedAmount'|'version'|'onUpgradeCreditedAmount'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': SubscriptionProductComponentToJSON(value['component']),
        'type': ProductFeeTypeToJSON(value['type']),
    };
}

