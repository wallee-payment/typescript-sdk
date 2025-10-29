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
 * @interface PaymentMethodSearchResponse
 */
export interface PaymentMethodSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentMethod>}
     * @memberof PaymentMethodSearchResponse
     */
    readonly data?: Array<PaymentMethod>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof PaymentMethodSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof PaymentMethodSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof PaymentMethodSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the PaymentMethodSearchResponse interface.
 */
export function instanceOfPaymentMethodSearchResponse(value: object): value is PaymentMethodSearchResponse {
    return true;
}

export function PaymentMethodSearchResponseFromJSON(json: any): PaymentMethodSearchResponse {
    return PaymentMethodSearchResponseFromJSONTyped(json, false);
}

export function PaymentMethodSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentMethodFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function PaymentMethodSearchResponseToJSON(value?: Omit<PaymentMethodSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

