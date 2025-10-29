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
 * @interface PaymentAppRefundConfigurationCreate
 */
export interface PaymentAppRefundConfigurationCreate {
    /**
     * The maximum time (in minutes) to wait for a response from the payment service provider after a refund request is triggered. If no feedback or final status is received within this period, the refund is considered failed.
     * @type {number}
     * @memberof PaymentAppRefundConfigurationCreate
     */
    refundTimeoutInMinutes?: number;
    /**
     * Whether the payment connector can process multiple refunds for a single transaction.
     * @type {boolean}
     * @memberof PaymentAppRefundConfigurationCreate
     */
    multipleRefundsSupported?: boolean;
    /**
     * The URL that the payment service provider will invoke to process a refund request. This endpoint handles communication with the provider for initiating and managing refunds.
     * @type {string}
     * @memberof PaymentAppRefundConfigurationCreate
     */
    refundEndpoint?: string;
}

/**
 * Check if a given object implements the PaymentAppRefundConfigurationCreate interface.
 */
export function instanceOfPaymentAppRefundConfigurationCreate(value: object): value is PaymentAppRefundConfigurationCreate {
    return true;
}

export function PaymentAppRefundConfigurationCreateFromJSON(json: any): PaymentAppRefundConfigurationCreate {
    return PaymentAppRefundConfigurationCreateFromJSONTyped(json, false);
}

export function PaymentAppRefundConfigurationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppRefundConfigurationCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'refundTimeoutInMinutes': json['refundTimeoutInMinutes'] == null ? undefined : json['refundTimeoutInMinutes'],
        'multipleRefundsSupported': json['multipleRefundsSupported'] == null ? undefined : json['multipleRefundsSupported'],
        'refundEndpoint': json['refundEndpoint'] == null ? undefined : json['refundEndpoint'],
    };
}

export function PaymentAppRefundConfigurationCreateToJSON(value?: PaymentAppRefundConfigurationCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'refundTimeoutInMinutes': value['refundTimeoutInMinutes'],
        'multipleRefundsSupported': value['multipleRefundsSupported'],
        'refundEndpoint': value['refundEndpoint'],
    };
}

