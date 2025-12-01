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
 * The metric usage provides details about the consumption of a particular metric.
 * @export
 * @interface MetricUsage
 */
export interface MetricUsage {
    /**
     * The number of consumed units.
     * @type {number}
     * @memberof MetricUsage
     */
    readonly consumedUnits?: number;
    /**
     * The description of the consumed unit's metric.
     * @type {{ [key: string]: string; }}
     * @memberof MetricUsage
     */
    readonly metricDescription?: { [key: string]: string; };
    /**
     * The name of the consumed units' metric.
     * @type {{ [key: string]: string; }}
     * @memberof MetricUsage
     */
    readonly metricName?: { [key: string]: string; };
    /**
     * The ID of the consumed units' metric.
     * @type {number}
     * @memberof MetricUsage
     */
    readonly metricId?: number;
}

/**
 * Check if a given object implements the MetricUsage interface.
 */
export function instanceOfMetricUsage(value: object): value is MetricUsage {
    return true;
}

export function MetricUsageFromJSON(json: any): MetricUsage {
    return MetricUsageFromJSONTyped(json, false);
}

export function MetricUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricUsage {
    if (json == null) {
        return json;
    }
    return {
        
        'consumedUnits': json['consumedUnits'] == null ? undefined : json['consumedUnits'],
        'metricDescription': json['metricDescription'] == null ? undefined : json['metricDescription'],
        'metricName': json['metricName'] == null ? undefined : json['metricName'],
        'metricId': json['metricId'] == null ? undefined : json['metricId'],
    };
}

export function MetricUsageToJSON(json: any): MetricUsage {
    return MetricUsageToJSONTyped(json, false);
}

export function MetricUsageToJSONTyped(value?: Omit<MetricUsage, 'consumedUnits'|'metricDescription'|'metricName'|'metricId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

