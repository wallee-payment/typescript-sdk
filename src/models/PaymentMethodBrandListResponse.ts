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
import type { PaymentMethodBrand } from './PaymentMethodBrand';
import {
    PaymentMethodBrandFromJSON,
    PaymentMethodBrandFromJSONTyped,
    PaymentMethodBrandToJSON,
    PaymentMethodBrandToJSONTyped,
} from './PaymentMethodBrand';

/**
 * 
 * @export
 * @interface PaymentMethodBrandListResponse
 */
export interface PaymentMethodBrandListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentMethodBrand>}
     * @memberof PaymentMethodBrandListResponse
     */
    readonly data?: Array<PaymentMethodBrand>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof PaymentMethodBrandListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof PaymentMethodBrandListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the PaymentMethodBrandListResponse interface.
 */
export function instanceOfPaymentMethodBrandListResponse(value: object): value is PaymentMethodBrandListResponse {
    return true;
}

export function PaymentMethodBrandListResponseFromJSON(json: any): PaymentMethodBrandListResponse {
    return PaymentMethodBrandListResponseFromJSONTyped(json, false);
}

export function PaymentMethodBrandListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodBrandListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentMethodBrandFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function PaymentMethodBrandListResponseToJSON(json: any): PaymentMethodBrandListResponse {
    return PaymentMethodBrandListResponseToJSONTyped(json, false);
}

export function PaymentMethodBrandListResponseToJSONTyped(value?: Omit<PaymentMethodBrandListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

