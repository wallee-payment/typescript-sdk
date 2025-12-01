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
import type { WebhookListener } from './WebhookListener';
import {
    WebhookListenerFromJSON,
    WebhookListenerFromJSONTyped,
    WebhookListenerToJSON,
    WebhookListenerToJSONTyped,
} from './WebhookListener';

/**
 * 
 * @export
 * @interface WebhookListenerListResponse
 */
export interface WebhookListenerListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<WebhookListener>}
     * @memberof WebhookListenerListResponse
     */
    readonly data?: Array<WebhookListener>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof WebhookListenerListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof WebhookListenerListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the WebhookListenerListResponse interface.
 */
export function instanceOfWebhookListenerListResponse(value: object): value is WebhookListenerListResponse {
    return true;
}

export function WebhookListenerListResponseFromJSON(json: any): WebhookListenerListResponse {
    return WebhookListenerListResponseFromJSONTyped(json, false);
}

export function WebhookListenerListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookListenerListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(WebhookListenerFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function WebhookListenerListResponseToJSON(json: any): WebhookListenerListResponse {
    return WebhookListenerListResponseToJSONTyped(json, false);
}

export function WebhookListenerListResponseToJSONTyped(value?: Omit<WebhookListenerListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

