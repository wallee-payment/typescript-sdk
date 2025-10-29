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
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
} from './PaymentMethod';

/**
 * 
 * @export
 * @interface PaymentMethodListResponse
 */
export interface PaymentMethodListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentMethod>}
     * @memberof PaymentMethodListResponse
     */
    readonly data?: Array<PaymentMethod>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof PaymentMethodListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof PaymentMethodListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the PaymentMethodListResponse interface.
 */
export function instanceOfPaymentMethodListResponse(value: object): value is PaymentMethodListResponse {
    return true;
}

export function PaymentMethodListResponseFromJSON(json: any): PaymentMethodListResponse {
    return PaymentMethodListResponseFromJSONTyped(json, false);
}

export function PaymentMethodListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentMethodFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function PaymentMethodListResponseToJSON(value?: Omit<PaymentMethodListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

