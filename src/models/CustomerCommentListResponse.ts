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
import type { CustomerComment } from './CustomerComment';
import {
    CustomerCommentFromJSON,
    CustomerCommentFromJSONTyped,
    CustomerCommentToJSON,
    CustomerCommentToJSONTyped,
} from './CustomerComment';

/**
 * 
 * @export
 * @interface CustomerCommentListResponse
 */
export interface CustomerCommentListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<CustomerComment>}
     * @memberof CustomerCommentListResponse
     */
    readonly data?: Array<CustomerComment>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof CustomerCommentListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof CustomerCommentListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the CustomerCommentListResponse interface.
 */
export function instanceOfCustomerCommentListResponse(value: object): value is CustomerCommentListResponse {
    return true;
}

export function CustomerCommentListResponseFromJSON(json: any): CustomerCommentListResponse {
    return CustomerCommentListResponseFromJSONTyped(json, false);
}

export function CustomerCommentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCommentListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CustomerCommentFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function CustomerCommentListResponseToJSON(json: any): CustomerCommentListResponse {
    return CustomerCommentListResponseToJSONTyped(json, false);
}

export function CustomerCommentListResponseToJSONTyped(value?: Omit<CustomerCommentListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

