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
/**
 * 
 * @export
 * @interface SubscriptionPartialUpdateRequest
 */
export interface SubscriptionPartialUpdateRequest {
    /**
     * A description used to identify the subscription.
     * @type {string}
     * @memberof SubscriptionPartialUpdateRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the SubscriptionPartialUpdateRequest interface.
 */
export function instanceOfSubscriptionPartialUpdateRequest(value: object): value is SubscriptionPartialUpdateRequest {
    return true;
}

export function SubscriptionPartialUpdateRequestFromJSON(json: any): SubscriptionPartialUpdateRequest {
    return SubscriptionPartialUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionPartialUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPartialUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function SubscriptionPartialUpdateRequestToJSON(json: any): SubscriptionPartialUpdateRequest {
    return SubscriptionPartialUpdateRequestToJSONTyped(json, false);
}

export function SubscriptionPartialUpdateRequestToJSONTyped(value?: SubscriptionPartialUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
    };
}

