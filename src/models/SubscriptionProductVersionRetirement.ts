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
} from './SubscriptionProduct';
import type { SubscriptionProductVersion } from './SubscriptionProductVersion';
import {
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionFromJSONTyped,
    SubscriptionProductVersionToJSON,
} from './SubscriptionProductVersion';

/**
 * 
 * @export
 * @interface SubscriptionProductVersionRetirement
 */
export interface SubscriptionProductVersionRetirement {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductVersionRetirement
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the subscriptions' termination periods should be respected.
     * @type {boolean}
     * @memberof SubscriptionProductVersionRetirement
     */
    readonly respectTerminationPeriods?: boolean;
    /**
     * 
     * @type {SubscriptionProductVersion}
     * @memberof SubscriptionProductVersionRetirement
     */
    productVersion?: SubscriptionProductVersion;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductVersionRetirement
     */
    readonly id?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof SubscriptionProductVersionRetirement
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductVersionRetirement
     */
    readonly version?: number;
    /**
     * 
     * @type {SubscriptionProduct}
     * @memberof SubscriptionProductVersionRetirement
     */
    targetProduct?: SubscriptionProduct;
}

/**
 * Check if a given object implements the SubscriptionProductVersionRetirement interface.
 */
export function instanceOfSubscriptionProductVersionRetirement(value: object): value is SubscriptionProductVersionRetirement {
    return true;
}

export function SubscriptionProductVersionRetirementFromJSON(json: any): SubscriptionProductVersionRetirement {
    return SubscriptionProductVersionRetirementFromJSONTyped(json, false);
}

export function SubscriptionProductVersionRetirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductVersionRetirement {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'respectTerminationPeriods': json['respectTerminationPeriods'] == null ? undefined : json['respectTerminationPeriods'],
        'productVersion': json['productVersion'] == null ? undefined : SubscriptionProductVersionFromJSON(json['productVersion']),
        'id': json['id'] == null ? undefined : json['id'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'targetProduct': json['targetProduct'] == null ? undefined : SubscriptionProductFromJSON(json['targetProduct']),
    };
}

export function SubscriptionProductVersionRetirementToJSON(value?: Omit<SubscriptionProductVersionRetirement, 'linkedSpaceId'|'respectTerminationPeriods'|'id'|'createdOn'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productVersion': SubscriptionProductVersionToJSON(value['productVersion']),
        'targetProduct': SubscriptionProductToJSON(value['targetProduct']),
    };
}

