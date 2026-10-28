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
import type { RestCountryState } from './RestCountryState';
import {
    RestCountryStateFromJSON,
    RestCountryStateFromJSONTyped,
    RestCountryStateToJSON,
    RestCountryStateToJSONTyped,
} from './RestCountryState';

/**
 * 
 * @export
 * @interface StateListResponse
 */
export interface StateListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<RestCountryState>}
     * @memberof StateListResponse
     */
    readonly data?: Array<RestCountryState>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof StateListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof StateListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the StateListResponse interface.
 */
export function instanceOfStateListResponse(value: object): value is StateListResponse {
    return true;
}

export function StateListResponseFromJSON(json: any): StateListResponse {
    return StateListResponseFromJSONTyped(json, false);
}

export function StateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(RestCountryStateFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function StateListResponseToJSON(json: any): StateListResponse {
    return StateListResponseToJSONTyped(json, false);
}

export function StateListResponseToJSONTyped(value?: Omit<StateListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

