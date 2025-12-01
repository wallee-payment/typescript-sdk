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
import type { SubscriptionVersion } from './SubscriptionVersion';
import {
    SubscriptionVersionFromJSON,
    SubscriptionVersionFromJSONTyped,
    SubscriptionVersionToJSON,
    SubscriptionVersionToJSONTyped,
} from './SubscriptionVersion';

/**
 * 
 * @export
 * @interface SubscriptionVersionListResponse
 */
export interface SubscriptionVersionListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionVersion>}
     * @memberof SubscriptionVersionListResponse
     */
    readonly data?: Array<SubscriptionVersion>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof SubscriptionVersionListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof SubscriptionVersionListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the SubscriptionVersionListResponse interface.
 */
export function instanceOfSubscriptionVersionListResponse(value: object): value is SubscriptionVersionListResponse {
    return true;
}

export function SubscriptionVersionListResponseFromJSON(json: any): SubscriptionVersionListResponse {
    return SubscriptionVersionListResponseFromJSONTyped(json, false);
}

export function SubscriptionVersionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionVersionListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionVersionFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function SubscriptionVersionListResponseToJSON(json: any): SubscriptionVersionListResponse {
    return SubscriptionVersionListResponseToJSONTyped(json, false);
}

export function SubscriptionVersionListResponseToJSONTyped(value?: Omit<SubscriptionVersionListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

