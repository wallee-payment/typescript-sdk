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
import type { ChargeFlowLevel } from './ChargeFlowLevel';
import {
    ChargeFlowLevelFromJSON,
    ChargeFlowLevelFromJSONTyped,
    ChargeFlowLevelToJSON,
    ChargeFlowLevelToJSONTyped,
} from './ChargeFlowLevel';

/**
 * 
 * @export
 * @interface ChargeFlowLevelSearchResponse
 */
export interface ChargeFlowLevelSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ChargeFlowLevel>}
     * @memberof ChargeFlowLevelSearchResponse
     */
    readonly data?: Array<ChargeFlowLevel>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof ChargeFlowLevelSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ChargeFlowLevelSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ChargeFlowLevelSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ChargeFlowLevelSearchResponse interface.
 */
export function instanceOfChargeFlowLevelSearchResponse(value: object): value is ChargeFlowLevelSearchResponse {
    return true;
}

export function ChargeFlowLevelSearchResponseFromJSON(json: any): ChargeFlowLevelSearchResponse {
    return ChargeFlowLevelSearchResponseFromJSONTyped(json, false);
}

export function ChargeFlowLevelSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowLevelSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ChargeFlowLevelFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ChargeFlowLevelSearchResponseToJSON(json: any): ChargeFlowLevelSearchResponse {
    return ChargeFlowLevelSearchResponseToJSONTyped(json, false);
}

export function ChargeFlowLevelSearchResponseToJSONTyped(value?: Omit<ChargeFlowLevelSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

