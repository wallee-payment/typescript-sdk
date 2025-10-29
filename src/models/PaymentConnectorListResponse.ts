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
import type { PaymentConnector } from './PaymentConnector';
import {
    PaymentConnectorFromJSON,
    PaymentConnectorFromJSONTyped,
    PaymentConnectorToJSON,
} from './PaymentConnector';

/**
 * 
 * @export
 * @interface PaymentConnectorListResponse
 */
export interface PaymentConnectorListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentConnector>}
     * @memberof PaymentConnectorListResponse
     */
    readonly data?: Array<PaymentConnector>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof PaymentConnectorListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof PaymentConnectorListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the PaymentConnectorListResponse interface.
 */
export function instanceOfPaymentConnectorListResponse(value: object): value is PaymentConnectorListResponse {
    return true;
}

export function PaymentConnectorListResponseFromJSON(json: any): PaymentConnectorListResponse {
    return PaymentConnectorListResponseFromJSONTyped(json, false);
}

export function PaymentConnectorListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConnectorListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentConnectorFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function PaymentConnectorListResponseToJSON(value?: Omit<PaymentConnectorListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

