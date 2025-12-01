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
    SubscriptionMetricToJSONTyped,
} from './SubscriptionMetric';

/**
 * 
 * @export
 * @interface MetricSearchResponse
 */
export interface MetricSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionMetric>}
     * @memberof MetricSearchResponse
     */
    readonly data?: Array<SubscriptionMetric>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof MetricSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof MetricSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof MetricSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the MetricSearchResponse interface.
 */
export function instanceOfMetricSearchResponse(value: object): value is MetricSearchResponse {
    return true;
}

export function MetricSearchResponseFromJSON(json: any): MetricSearchResponse {
    return MetricSearchResponseFromJSONTyped(json, false);
}

export function MetricSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionMetricFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function MetricSearchResponseToJSON(json: any): MetricSearchResponse {
    return MetricSearchResponseToJSONTyped(json, false);
}

export function MetricSearchResponseToJSONTyped(value?: Omit<MetricSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

