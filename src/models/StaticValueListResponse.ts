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
import type { StaticValue } from './StaticValue';
import {
    StaticValueFromJSON,
    StaticValueFromJSONTyped,
    StaticValueToJSON,
} from './StaticValue';

/**
 * 
 * @export
 * @interface StaticValueListResponse
 */
export interface StaticValueListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<StaticValue>}
     * @memberof StaticValueListResponse
     */
    readonly data?: Array<StaticValue>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof StaticValueListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof StaticValueListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the StaticValueListResponse interface.
 */
export function instanceOfStaticValueListResponse(value: object): value is StaticValueListResponse {
    return true;
}

export function StaticValueListResponseFromJSON(json: any): StaticValueListResponse {
    return StaticValueListResponseFromJSONTyped(json, false);
}

export function StaticValueListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaticValueListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(StaticValueFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function StaticValueListResponseToJSON(value?: Omit<StaticValueListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

