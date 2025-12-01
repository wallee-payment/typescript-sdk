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
 * @interface SubscriptionProductRetirementRequest
 */
export interface SubscriptionProductRetirementRequest {
    /**
     * Whether the subscriptions' termination periods should be respected.
     * @type {boolean}
     * @memberof SubscriptionProductRetirementRequest
     */
    respectTerminationPeriods?: boolean;
    /**
     * The product to which the subscriptions with the retiring product are to be migrated. If none is defined, the subscriptions are terminated.
     * @type {number}
     * @memberof SubscriptionProductRetirementRequest
     */
    targetProduct?: number;
}

/**
 * Check if a given object implements the SubscriptionProductRetirementRequest interface.
 */
export function instanceOfSubscriptionProductRetirementRequest(value: object): value is SubscriptionProductRetirementRequest {
    return true;
}

export function SubscriptionProductRetirementRequestFromJSON(json: any): SubscriptionProductRetirementRequest {
    return SubscriptionProductRetirementRequestFromJSONTyped(json, false);
}

export function SubscriptionProductRetirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductRetirementRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'respectTerminationPeriods': json['respectTerminationPeriods'] == null ? undefined : json['respectTerminationPeriods'],
        'targetProduct': json['targetProduct'] == null ? undefined : json['targetProduct'],
    };
}

export function SubscriptionProductRetirementRequestToJSON(json: any): SubscriptionProductRetirementRequest {
    return SubscriptionProductRetirementRequestToJSONTyped(json, false);
}

export function SubscriptionProductRetirementRequestToJSONTyped(value?: SubscriptionProductRetirementRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'respectTerminationPeriods': value['respectTerminationPeriods'],
        'targetProduct': value['targetProduct'],
    };
}

