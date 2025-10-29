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
import type { DebtCollectorConfiguration } from './DebtCollectorConfiguration';
import {
    DebtCollectorConfigurationFromJSON,
    DebtCollectorConfigurationFromJSONTyped,
    DebtCollectorConfigurationToJSON,
} from './DebtCollectorConfiguration';

/**
 * 
 * @export
 * @interface DebtCollectorConfigurationSearchResponse
 */
export interface DebtCollectorConfigurationSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<DebtCollectorConfiguration>}
     * @memberof DebtCollectorConfigurationSearchResponse
     */
    readonly data?: Array<DebtCollectorConfiguration>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof DebtCollectorConfigurationSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof DebtCollectorConfigurationSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof DebtCollectorConfigurationSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the DebtCollectorConfigurationSearchResponse interface.
 */
export function instanceOfDebtCollectorConfigurationSearchResponse(value: object): value is DebtCollectorConfigurationSearchResponse {
    return true;
}

export function DebtCollectorConfigurationSearchResponseFromJSON(json: any): DebtCollectorConfigurationSearchResponse {
    return DebtCollectorConfigurationSearchResponseFromJSONTyped(json, false);
}

export function DebtCollectorConfigurationSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorConfigurationSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(DebtCollectorConfigurationFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function DebtCollectorConfigurationSearchResponseToJSON(value?: Omit<DebtCollectorConfigurationSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

