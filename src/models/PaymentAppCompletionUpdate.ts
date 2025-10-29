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
import type { PaymentAppCompletionTargetState } from './PaymentAppCompletionTargetState';
import {
    PaymentAppCompletionTargetStateFromJSON,
    PaymentAppCompletionTargetStateFromJSONTyped,
    PaymentAppCompletionTargetStateToJSON,
} from './PaymentAppCompletionTargetState';

/**
 * A request to update the state of a completion. The completion must be associated with a processor created by the invoking payment web app.
 * @export
 * @interface PaymentAppCompletionUpdate
 */
export interface PaymentAppCompletionUpdate {
    /**
     * A unique identifier for the completion within the systems of the external service provider. This field is mandatory when the target state is set to 'SUCCESSFUL'.
     * @type {string}
     * @memberof PaymentAppCompletionUpdate
     */
    reference?: string;
    /**
     * 
     * @type {PaymentAppCompletionTargetState}
     * @memberof PaymentAppCompletionUpdate
     */
    targetState?: PaymentAppCompletionTargetState;
    /**
     * The reason for the completion's failure. This field is mandatory when the target state is set to 'FAILED'.
     * @type {number}
     * @memberof PaymentAppCompletionUpdate
     */
    failureReason?: number;
}

/**
 * Check if a given object implements the PaymentAppCompletionUpdate interface.
 */
export function instanceOfPaymentAppCompletionUpdate(value: object): value is PaymentAppCompletionUpdate {
    return true;
}

export function PaymentAppCompletionUpdateFromJSON(json: any): PaymentAppCompletionUpdate {
    return PaymentAppCompletionUpdateFromJSONTyped(json, false);
}

export function PaymentAppCompletionUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppCompletionUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'targetState': json['targetState'] == null ? undefined : PaymentAppCompletionTargetStateFromJSON(json['targetState']),
        'failureReason': json['failureReason'] == null ? undefined : json['failureReason'],
    };
}

export function PaymentAppCompletionUpdateToJSON(value?: PaymentAppCompletionUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
        'targetState': PaymentAppCompletionTargetStateToJSON(value['targetState']),
        'failureReason': value['failureReason'],
    };
}

