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
import type { RestCustomerEmailAddress } from './RestCustomerEmailAddress';
import {
    RestCustomerEmailAddressFromJSON,
    RestCustomerEmailAddressFromJSONTyped,
    RestCustomerEmailAddressToJSON,
    RestCustomerEmailAddressToJSONTyped,
} from './RestCustomerEmailAddress';

/**
 * 
 * @export
 * @interface CustomerEmailAddressListResponse
 */
export interface CustomerEmailAddressListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<RestCustomerEmailAddress>}
     * @memberof CustomerEmailAddressListResponse
     */
    readonly data?: Array<RestCustomerEmailAddress>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof CustomerEmailAddressListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof CustomerEmailAddressListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the CustomerEmailAddressListResponse interface.
 */
export function instanceOfCustomerEmailAddressListResponse(value: object): value is CustomerEmailAddressListResponse {
    return true;
}

export function CustomerEmailAddressListResponseFromJSON(json: any): CustomerEmailAddressListResponse {
    return CustomerEmailAddressListResponseFromJSONTyped(json, false);
}

export function CustomerEmailAddressListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerEmailAddressListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(RestCustomerEmailAddressFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function CustomerEmailAddressListResponseToJSON(json: any): CustomerEmailAddressListResponse {
    return CustomerEmailAddressListResponseToJSONTyped(json, false);
}

export function CustomerEmailAddressListResponseToJSONTyped(value?: Omit<CustomerEmailAddressListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

