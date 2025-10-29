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
 * @interface PaymentAppCompletionConfigurationCreate
 */
export interface PaymentAppCompletionConfigurationCreate {
    /**
     * Whether the payment connector can process multiple completions for a single transaction.
     * @type {boolean}
     * @memberof PaymentAppCompletionConfigurationCreate
     */
    multipleCompletionsSupported?: boolean;
    /**
     * The maximum number of days after a transaction's authorization during which a
     * completion or void action can be triggered. Once this period has passed, neither
     * action can be executed.
     * @type {number}
     * @memberof PaymentAppCompletionConfigurationCreate
     */
    maximalCompletionDelayInDays?: number;
    /**
     * The URL that the payment service provider will invoke to process a completion request.
     * This endpoint handles communication with the provider for initiating and managing completions.
     * @type {string}
     * @memberof PaymentAppCompletionConfigurationCreate
     */
    completionEndpoint?: string;
    /**
     * The maximum time (in minutes) to wait for a response from the payment service provider
     * after a completion request is triggered. If no feedback or final status is received
     * within this period, the completion is considered failed.
     * @type {number}
     * @memberof PaymentAppCompletionConfigurationCreate
     */
    completionTimeoutInMinutes?: number;
    /**
     * The URL that the payment service provider will invoke to process a void request.
     * This endpoint handles communication with the provider for initiating and managing voids.
     * @type {string}
     * @memberof PaymentAppCompletionConfigurationCreate
     */
    voidEndpoint?: string;
}

/**
 * Check if a given object implements the PaymentAppCompletionConfigurationCreate interface.
 */
export function instanceOfPaymentAppCompletionConfigurationCreate(value: object): value is PaymentAppCompletionConfigurationCreate {
    return true;
}

export function PaymentAppCompletionConfigurationCreateFromJSON(json: any): PaymentAppCompletionConfigurationCreate {
    return PaymentAppCompletionConfigurationCreateFromJSONTyped(json, false);
}

export function PaymentAppCompletionConfigurationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppCompletionConfigurationCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'multipleCompletionsSupported': json['multipleCompletionsSupported'] == null ? undefined : json['multipleCompletionsSupported'],
        'maximalCompletionDelayInDays': json['maximalCompletionDelayInDays'] == null ? undefined : json['maximalCompletionDelayInDays'],
        'completionEndpoint': json['completionEndpoint'] == null ? undefined : json['completionEndpoint'],
        'completionTimeoutInMinutes': json['completionTimeoutInMinutes'] == null ? undefined : json['completionTimeoutInMinutes'],
        'voidEndpoint': json['voidEndpoint'] == null ? undefined : json['voidEndpoint'],
    };
}

export function PaymentAppCompletionConfigurationCreateToJSON(value?: PaymentAppCompletionConfigurationCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'multipleCompletionsSupported': value['multipleCompletionsSupported'],
        'maximalCompletionDelayInDays': value['maximalCompletionDelayInDays'],
        'completionEndpoint': value['completionEndpoint'],
        'completionTimeoutInMinutes': value['completionTimeoutInMinutes'],
        'voidEndpoint': value['voidEndpoint'],
    };
}

