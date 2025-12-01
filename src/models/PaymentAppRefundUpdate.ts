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
import type { PaymentAppRefundTargetState } from './PaymentAppRefundTargetState';
import {
    PaymentAppRefundTargetStateFromJSON,
    PaymentAppRefundTargetStateFromJSONTyped,
    PaymentAppRefundTargetStateToJSON,
    PaymentAppRefundTargetStateToJSONTyped,
} from './PaymentAppRefundTargetState';

/**
 * A request to update the state of a refund. The refund must be associated with a processor created by the invoking payment web app.
 * @export
 * @interface PaymentAppRefundUpdate
 */
export interface PaymentAppRefundUpdate {
    /**
     * A unique identifier for the refund within the systems of the external service provider. This field is mandatory when the target state is set to 'SUCCESSFUL'.
     * @type {string}
     * @memberof PaymentAppRefundUpdate
     */
    reference?: string;
    /**
     * 
     * @type {PaymentAppRefundTargetState}
     * @memberof PaymentAppRefundUpdate
     */
    targetState?: PaymentAppRefundTargetState;
    /**
     * The reason for the refund's failure. This field is mandatory when the target state is set to 'FAILED'.
     * @type {number}
     * @memberof PaymentAppRefundUpdate
     */
    failureReason?: number;
}



/**
 * Check if a given object implements the PaymentAppRefundUpdate interface.
 */
export function instanceOfPaymentAppRefundUpdate(value: object): value is PaymentAppRefundUpdate {
    return true;
}

export function PaymentAppRefundUpdateFromJSON(json: any): PaymentAppRefundUpdate {
    return PaymentAppRefundUpdateFromJSONTyped(json, false);
}

export function PaymentAppRefundUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppRefundUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'targetState': json['targetState'] == null ? undefined : PaymentAppRefundTargetStateFromJSON(json['targetState']),
        'failureReason': json['failureReason'] == null ? undefined : json['failureReason'],
    };
}

export function PaymentAppRefundUpdateToJSON(json: any): PaymentAppRefundUpdate {
    return PaymentAppRefundUpdateToJSONTyped(json, false);
}

export function PaymentAppRefundUpdateToJSONTyped(value?: PaymentAppRefundUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reference': value['reference'],
        'targetState': PaymentAppRefundTargetStateToJSON(value['targetState']),
        'failureReason': value['failureReason'],
    };
}

