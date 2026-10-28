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
import type { Fulfillment } from './Fulfillment';
import {
    FulfillmentFromJSON,
    FulfillmentFromJSONTyped,
    FulfillmentToJSON,
    FulfillmentToJSONTyped,
} from './Fulfillment';

/**
 * 
 * @export
 * @interface FulfillmentSearchResponse
 */
export interface FulfillmentSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<Fulfillment>}
     * @memberof FulfillmentSearchResponse
     */
    readonly data?: Array<Fulfillment>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof FulfillmentSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof FulfillmentSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof FulfillmentSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the FulfillmentSearchResponse interface.
 */
export function instanceOfFulfillmentSearchResponse(value: object): value is FulfillmentSearchResponse {
    return true;
}

export function FulfillmentSearchResponseFromJSON(json: any): FulfillmentSearchResponse {
    return FulfillmentSearchResponseFromJSONTyped(json, false);
}

export function FulfillmentSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(FulfillmentFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function FulfillmentSearchResponseToJSON(json: any): FulfillmentSearchResponse {
    return FulfillmentSearchResponseToJSONTyped(json, false);
}

export function FulfillmentSearchResponseToJSONTyped(value?: Omit<FulfillmentSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

