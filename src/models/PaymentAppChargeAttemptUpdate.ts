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
import type { PaymentAppChargeAttemptTargetState } from './PaymentAppChargeAttemptTargetState';
import {
    PaymentAppChargeAttemptTargetStateFromJSON,
    PaymentAppChargeAttemptTargetStateFromJSONTyped,
    PaymentAppChargeAttemptTargetStateToJSON,
} from './PaymentAppChargeAttemptTargetState';

/**
 * A request to update the state of a charge attempt. The charge attempt must be associated with a processor created by the invoking payment web app.
 * @export
 * @interface PaymentAppChargeAttemptUpdate
 */
export interface PaymentAppChargeAttemptUpdate {
    /**
     * A unique identifier for the charge attempt within the systems of the external service provider. This field is mandatory when the target state is set to 'SUCCESSFUL'.
     * @type {string}
     * @memberof PaymentAppChargeAttemptUpdate
     */
    reference?: string;
    /**
     * 
     * @type {PaymentAppChargeAttemptTargetState}
     * @memberof PaymentAppChargeAttemptUpdate
     */
    targetState?: PaymentAppChargeAttemptTargetState;
    /**
     * The reason for the charge attempt's failure. This field is mandatory when the target state is set to 'FAILED'.
     * @type {number}
     * @memberof PaymentAppChargeAttemptUpdate
     */
    failureReason?: number;
    /**
     * A message explaining to the buyer why the payment failed. The message must be localized in the buyer's language, as specified in the payment page invocation URL.
     * @type {string}
     * @memberof PaymentAppChargeAttemptUpdate
     */
    endUserFailureMessage?: string;
}

/**
 * Check if a given object implements the PaymentAppChargeAttemptUpdate interface.
 */
export function instanceOfPaymentAppChargeAttemptUpdate(value: object): value is PaymentAppChargeAttemptUpdate {
    return true;
}

export function PaymentAppChargeAttemptUpdateFromJSON(json: any): PaymentAppChargeAttemptUpdate {
    return PaymentAppChargeAttemptUpdateFromJSONTyped(json, false);
}

export function PaymentAppChargeAttemptUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppChargeAttemptUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'targetState': json['targetState'] == null ? undefined : PaymentAppChargeAttemptTargetStateFromJSON(json['targetState']),
        'failureReason': json['failureReason'] == null ? undefined : json['failureReason'],
        'endUserFailureMessage': json['endUserFailureMessage'] == null ? undefined : json['endUserFailureMessage'],
    };
}

export function PaymentAppChargeAttemptUpdateToJSON(value?: PaymentAppChargeAttemptUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
        'targetState': PaymentAppChargeAttemptTargetStateToJSON(value['targetState']),
        'failureReason': value['failureReason'],
        'endUserFailureMessage': value['endUserFailureMessage'],
    };
}

