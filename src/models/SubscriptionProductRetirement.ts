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
import type { SubscriptionProduct } from './SubscriptionProduct';
import {
    SubscriptionProductFromJSON,
    SubscriptionProductFromJSONTyped,
    SubscriptionProductToJSON,
    SubscriptionProductToJSONTyped,
} from './SubscriptionProduct';

/**
 * 
 * @export
 * @interface SubscriptionProductRetirement
 */
export interface SubscriptionProductRetirement {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductRetirement
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the subscriptions' termination periods should be respected.
     * @type {boolean}
     * @memberof SubscriptionProductRetirement
     */
    readonly respectTerminationPeriods?: boolean;
    /**
     * 
     * @type {SubscriptionProduct}
     * @memberof SubscriptionProductRetirement
     */
    product?: SubscriptionProduct;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductRetirement
     */
    readonly id?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof SubscriptionProductRetirement
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductRetirement
     */
    readonly version?: number;
    /**
     * 
     * @type {SubscriptionProduct}
     * @memberof SubscriptionProductRetirement
     */
    targetProduct?: SubscriptionProduct;
}

/**
 * Check if a given object implements the SubscriptionProductRetirement interface.
 */
export function instanceOfSubscriptionProductRetirement(value: object): value is SubscriptionProductRetirement {
    return true;
}

export function SubscriptionProductRetirementFromJSON(json: any): SubscriptionProductRetirement {
    return SubscriptionProductRetirementFromJSONTyped(json, false);
}

export function SubscriptionProductRetirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductRetirement {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'respectTerminationPeriods': json['respectTerminationPeriods'] == null ? undefined : json['respectTerminationPeriods'],
        'product': json['product'] == null ? undefined : SubscriptionProductFromJSON(json['product']),
        'id': json['id'] == null ? undefined : json['id'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'targetProduct': json['targetProduct'] == null ? undefined : SubscriptionProductFromJSON(json['targetProduct']),
    };
}

export function SubscriptionProductRetirementToJSON(json: any): SubscriptionProductRetirement {
    return SubscriptionProductRetirementToJSONTyped(json, false);
}

export function SubscriptionProductRetirementToJSONTyped(value?: Omit<SubscriptionProductRetirement, 'linkedSpaceId'|'respectTerminationPeriods'|'id'|'createdOn'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'product': SubscriptionProductToJSON(value['product']),
        'targetProduct': SubscriptionProductToJSON(value['targetProduct']),
    };
}

