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
import type { PaymentLink } from './PaymentLink';
import {
    PaymentLinkFromJSON,
    PaymentLinkFromJSONTyped,
    PaymentLinkToJSON,
    PaymentLinkToJSONTyped,
} from './PaymentLink';

/**
 * 
 * @export
 * @interface PaymentLinkSearchResponse
 */
export interface PaymentLinkSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentLink>}
     * @memberof PaymentLinkSearchResponse
     */
    readonly data?: Array<PaymentLink>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof PaymentLinkSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof PaymentLinkSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof PaymentLinkSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the PaymentLinkSearchResponse interface.
 */
export function instanceOfPaymentLinkSearchResponse(value: object): value is PaymentLinkSearchResponse {
    return true;
}

export function PaymentLinkSearchResponseFromJSON(json: any): PaymentLinkSearchResponse {
    return PaymentLinkSearchResponseFromJSONTyped(json, false);
}

export function PaymentLinkSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentLinkSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentLinkFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function PaymentLinkSearchResponseToJSON(json: any): PaymentLinkSearchResponse {
    return PaymentLinkSearchResponseToJSONTyped(json, false);
}

export function PaymentLinkSearchResponseToJSONTyped(value?: Omit<PaymentLinkSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

