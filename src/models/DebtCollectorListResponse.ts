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
import type { DebtCollector } from './DebtCollector';
import {
    DebtCollectorFromJSON,
    DebtCollectorFromJSONTyped,
    DebtCollectorToJSON,
} from './DebtCollector';

/**
 * 
 * @export
 * @interface DebtCollectorListResponse
 */
export interface DebtCollectorListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<DebtCollector>}
     * @memberof DebtCollectorListResponse
     */
    readonly data?: Array<DebtCollector>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof DebtCollectorListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof DebtCollectorListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the DebtCollectorListResponse interface.
 */
export function instanceOfDebtCollectorListResponse(value: object): value is DebtCollectorListResponse {
    return true;
}

export function DebtCollectorListResponseFromJSON(json: any): DebtCollectorListResponse {
    return DebtCollectorListResponseFromJSONTyped(json, false);
}

export function DebtCollectorListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(DebtCollectorFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function DebtCollectorListResponseToJSON(value?: Omit<DebtCollectorListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

