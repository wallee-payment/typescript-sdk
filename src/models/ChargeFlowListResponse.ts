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
import type { ChargeFlow } from './ChargeFlow';
import {
    ChargeFlowFromJSON,
    ChargeFlowFromJSONTyped,
    ChargeFlowToJSON,
} from './ChargeFlow';

/**
 * 
 * @export
 * @interface ChargeFlowListResponse
 */
export interface ChargeFlowListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ChargeFlow>}
     * @memberof ChargeFlowListResponse
     */
    readonly data?: Array<ChargeFlow>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ChargeFlowListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ChargeFlowListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ChargeFlowListResponse interface.
 */
export function instanceOfChargeFlowListResponse(value: object): value is ChargeFlowListResponse {
    return true;
}

export function ChargeFlowListResponseFromJSON(json: any): ChargeFlowListResponse {
    return ChargeFlowListResponseFromJSONTyped(json, false);
}

export function ChargeFlowListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ChargeFlowFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ChargeFlowListResponseToJSON(value?: Omit<ChargeFlowListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

