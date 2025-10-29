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
import type { ConditionType } from './ConditionType';
import {
    ConditionTypeFromJSON,
    ConditionTypeFromJSONTyped,
    ConditionTypeToJSON,
} from './ConditionType';

/**
 * 
 * @export
 * @interface ConditionTypeListResponse
 */
export interface ConditionTypeListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ConditionType>}
     * @memberof ConditionTypeListResponse
     */
    readonly data?: Array<ConditionType>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ConditionTypeListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ConditionTypeListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ConditionTypeListResponse interface.
 */
export function instanceOfConditionTypeListResponse(value: object): value is ConditionTypeListResponse {
    return true;
}

export function ConditionTypeListResponseFromJSON(json: any): ConditionTypeListResponse {
    return ConditionTypeListResponseFromJSONTyped(json, false);
}

export function ConditionTypeListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionTypeListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ConditionTypeFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ConditionTypeListResponseToJSON(value?: Omit<ConditionTypeListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

