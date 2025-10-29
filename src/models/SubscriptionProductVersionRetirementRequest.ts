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
/**
 * 
 * @export
 * @interface SubscriptionProductVersionRetirementRequest
 */
export interface SubscriptionProductVersionRetirementRequest {
    /**
     * Whether the subscriptions' termination periods should be respected.
     * @type {boolean}
     * @memberof SubscriptionProductVersionRetirementRequest
     */
    respectTerminationPeriods?: boolean;
    /**
     * The product to which the subscriptions with the retiring product version are to be migrated. If none is defined, the subscriptions are terminated.
     * @type {number}
     * @memberof SubscriptionProductVersionRetirementRequest
     */
    targetProduct?: number;
}

/**
 * Check if a given object implements the SubscriptionProductVersionRetirementRequest interface.
 */
export function instanceOfSubscriptionProductVersionRetirementRequest(value: object): value is SubscriptionProductVersionRetirementRequest {
    return true;
}

export function SubscriptionProductVersionRetirementRequestFromJSON(json: any): SubscriptionProductVersionRetirementRequest {
    return SubscriptionProductVersionRetirementRequestFromJSONTyped(json, false);
}

export function SubscriptionProductVersionRetirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductVersionRetirementRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'respectTerminationPeriods': json['respectTerminationPeriods'] == null ? undefined : json['respectTerminationPeriods'],
        'targetProduct': json['targetProduct'] == null ? undefined : json['targetProduct'],
    };
}

export function SubscriptionProductVersionRetirementRequestToJSON(value?: SubscriptionProductVersionRetirementRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'respectTerminationPeriods': value['respectTerminationPeriods'],
        'targetProduct': value['targetProduct'],
    };
}

