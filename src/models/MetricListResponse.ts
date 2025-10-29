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
import type { SubscriptionMetric } from './SubscriptionMetric';
import {
    SubscriptionMetricFromJSON,
    SubscriptionMetricFromJSONTyped,
    SubscriptionMetricToJSON,
} from './SubscriptionMetric';

/**
 * 
 * @export
 * @interface MetricListResponse
 */
export interface MetricListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionMetric>}
     * @memberof MetricListResponse
     */
    readonly data?: Array<SubscriptionMetric>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof MetricListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof MetricListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the MetricListResponse interface.
 */
export function instanceOfMetricListResponse(value: object): value is MetricListResponse {
    return true;
}

export function MetricListResponseFromJSON(json: any): MetricListResponse {
    return MetricListResponseFromJSONTyped(json, false);
}

export function MetricListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionMetricFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function MetricListResponseToJSON(value?: Omit<MetricListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

