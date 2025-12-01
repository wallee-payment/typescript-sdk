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
import type { SubscriptionComponentReferenceConfiguration } from './SubscriptionComponentReferenceConfiguration';
import {
    SubscriptionComponentReferenceConfigurationFromJSON,
    SubscriptionComponentReferenceConfigurationFromJSONTyped,
    SubscriptionComponentReferenceConfigurationToJSON,
    SubscriptionComponentReferenceConfigurationToJSONTyped,
} from './SubscriptionComponentReferenceConfiguration';
import type { SubscriptionPending } from './SubscriptionPending';
import {
    SubscriptionPendingFromJSON,
    SubscriptionPendingFromJSONTyped,
    SubscriptionPendingToJSON,
    SubscriptionPendingToJSONTyped,
} from './SubscriptionPending';

/**
 * 
 * @export
 * @interface SubscriptionCreateRequest
 */
export interface SubscriptionCreateRequest {
    /**
     * The configurations of the subscription's components.
     * @type {Set<SubscriptionComponentReferenceConfiguration>}
     * @memberof SubscriptionCreateRequest
     */
    componentConfigurations?: Set<SubscriptionComponentReferenceConfiguration>;
    /**
     * The product to subscribe to.
     * @type {number}
     * @memberof SubscriptionCreateRequest
     */
    product?: number;
    /**
     * The three-letter code (ISO 4217 format) of the currency used to invoice the customer. Must be one of the currencies supported by the product.
     * @type {string}
     * @memberof SubscriptionCreateRequest
     */
    currency?: string;
    /**
     * 
     * @type {SubscriptionPending}
     * @memberof SubscriptionCreateRequest
     */
    subscription?: SubscriptionPending;
}

/**
 * Check if a given object implements the SubscriptionCreateRequest interface.
 */
export function instanceOfSubscriptionCreateRequest(value: object): value is SubscriptionCreateRequest {
    return true;
}

export function SubscriptionCreateRequestFromJSON(json: any): SubscriptionCreateRequest {
    return SubscriptionCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'componentConfigurations': json['componentConfigurations'] == null ? undefined : (new Set((json['componentConfigurations'] as Array<any>).map(SubscriptionComponentReferenceConfigurationFromJSON))),
        'product': json['product'] == null ? undefined : json['product'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'subscription': json['subscription'] == null ? undefined : SubscriptionPendingFromJSON(json['subscription']),
    };
}

export function SubscriptionCreateRequestToJSON(json: any): SubscriptionCreateRequest {
    return SubscriptionCreateRequestToJSONTyped(json, false);
}

export function SubscriptionCreateRequestToJSONTyped(value?: SubscriptionCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'componentConfigurations': value['componentConfigurations'] == null ? undefined : (Array.from(value['componentConfigurations'] as Set<any>).map(SubscriptionComponentReferenceConfigurationToJSON)),
        'product': value['product'],
        'currency': value['currency'],
        'subscription': SubscriptionPendingToJSON(value['subscription']),
    };
}

