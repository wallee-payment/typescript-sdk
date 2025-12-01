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
import type { LabelDescriptor } from './LabelDescriptor';
import {
    LabelDescriptorFromJSON,
    LabelDescriptorFromJSONTyped,
    LabelDescriptorToJSON,
    LabelDescriptorToJSONTyped,
} from './LabelDescriptor';

/**
 * 
 * @export
 * @interface LabelDescriptorListResponse
 */
export interface LabelDescriptorListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<LabelDescriptor>}
     * @memberof LabelDescriptorListResponse
     */
    readonly data?: Array<LabelDescriptor>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof LabelDescriptorListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof LabelDescriptorListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the LabelDescriptorListResponse interface.
 */
export function instanceOfLabelDescriptorListResponse(value: object): value is LabelDescriptorListResponse {
    return true;
}

export function LabelDescriptorListResponseFromJSON(json: any): LabelDescriptorListResponse {
    return LabelDescriptorListResponseFromJSONTyped(json, false);
}

export function LabelDescriptorListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelDescriptorListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(LabelDescriptorFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function LabelDescriptorListResponseToJSON(json: any): LabelDescriptorListResponse {
    return LabelDescriptorListResponseToJSONTyped(json, false);
}

export function LabelDescriptorListResponseToJSONTyped(value?: Omit<LabelDescriptorListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

