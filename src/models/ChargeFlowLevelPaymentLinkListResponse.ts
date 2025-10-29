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
import type { ChargeFlowLevelPaymentLink } from './ChargeFlowLevelPaymentLink';
import {
    ChargeFlowLevelPaymentLinkFromJSON,
    ChargeFlowLevelPaymentLinkFromJSONTyped,
    ChargeFlowLevelPaymentLinkToJSON,
} from './ChargeFlowLevelPaymentLink';

/**
 * 
 * @export
 * @interface ChargeFlowLevelPaymentLinkListResponse
 */
export interface ChargeFlowLevelPaymentLinkListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ChargeFlowLevelPaymentLink>}
     * @memberof ChargeFlowLevelPaymentLinkListResponse
     */
    readonly data?: Array<ChargeFlowLevelPaymentLink>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ChargeFlowLevelPaymentLinkListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ChargeFlowLevelPaymentLinkListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ChargeFlowLevelPaymentLinkListResponse interface.
 */
export function instanceOfChargeFlowLevelPaymentLinkListResponse(value: object): value is ChargeFlowLevelPaymentLinkListResponse {
    return true;
}

export function ChargeFlowLevelPaymentLinkListResponseFromJSON(json: any): ChargeFlowLevelPaymentLinkListResponse {
    return ChargeFlowLevelPaymentLinkListResponseFromJSONTyped(json, false);
}

export function ChargeFlowLevelPaymentLinkListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowLevelPaymentLinkListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ChargeFlowLevelPaymentLinkFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ChargeFlowLevelPaymentLinkListResponseToJSON(value?: Omit<ChargeFlowLevelPaymentLinkListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

