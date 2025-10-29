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
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface RefundSearchResponse
 */
export interface RefundSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<Refund>}
     * @memberof RefundSearchResponse
     */
    readonly data?: Array<Refund>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof RefundSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof RefundSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof RefundSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the RefundSearchResponse interface.
 */
export function instanceOfRefundSearchResponse(value: object): value is RefundSearchResponse {
    return true;
}

export function RefundSearchResponseFromJSON(json: any): RefundSearchResponse {
    return RefundSearchResponseFromJSONTyped(json, false);
}

export function RefundSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(RefundFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function RefundSearchResponseToJSON(value?: Omit<RefundSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

