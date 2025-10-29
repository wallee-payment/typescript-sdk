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
import type { Customer } from './Customer';
import {
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';

/**
 * 
 * @export
 * @interface CustomerListResponse
 */
export interface CustomerListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<Customer>}
     * @memberof CustomerListResponse
     */
    readonly data?: Array<Customer>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof CustomerListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof CustomerListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the CustomerListResponse interface.
 */
export function instanceOfCustomerListResponse(value: object): value is CustomerListResponse {
    return true;
}

export function CustomerListResponseFromJSON(json: any): CustomerListResponse {
    return CustomerListResponseFromJSONTyped(json, false);
}

export function CustomerListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CustomerFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function CustomerListResponseToJSON(value?: Omit<CustomerListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

