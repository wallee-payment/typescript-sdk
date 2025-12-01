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
import type { DeliveryIndication } from './DeliveryIndication';
import {
    DeliveryIndicationFromJSON,
    DeliveryIndicationFromJSONTyped,
    DeliveryIndicationToJSON,
    DeliveryIndicationToJSONTyped,
} from './DeliveryIndication';

/**
 * 
 * @export
 * @interface DeliveryIndicationSearchResponse
 */
export interface DeliveryIndicationSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<DeliveryIndication>}
     * @memberof DeliveryIndicationSearchResponse
     */
    readonly data?: Array<DeliveryIndication>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof DeliveryIndicationSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof DeliveryIndicationSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof DeliveryIndicationSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the DeliveryIndicationSearchResponse interface.
 */
export function instanceOfDeliveryIndicationSearchResponse(value: object): value is DeliveryIndicationSearchResponse {
    return true;
}

export function DeliveryIndicationSearchResponseFromJSON(json: any): DeliveryIndicationSearchResponse {
    return DeliveryIndicationSearchResponseFromJSONTyped(json, false);
}

export function DeliveryIndicationSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryIndicationSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(DeliveryIndicationFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function DeliveryIndicationSearchResponseToJSON(json: any): DeliveryIndicationSearchResponse {
    return DeliveryIndicationSearchResponseToJSONTyped(json, false);
}

export function DeliveryIndicationSearchResponseToJSONTyped(value?: Omit<DeliveryIndicationSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

