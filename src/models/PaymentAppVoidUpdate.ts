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
import type { PaymentAppVoidTargetState } from './PaymentAppVoidTargetState';
import {
    PaymentAppVoidTargetStateFromJSON,
    PaymentAppVoidTargetStateFromJSONTyped,
    PaymentAppVoidTargetStateToJSON,
} from './PaymentAppVoidTargetState';

/**
 * A request to update the state of a void. The void must be associated with a processor created by the invoking payment web app.
 * @export
 * @interface PaymentAppVoidUpdate
 */
export interface PaymentAppVoidUpdate {
    /**
     * A unique identifier for the void within the systems of the external service provider. This field is mandatory when the target state is set to 'SUCCESSFUL'.
     * @type {string}
     * @memberof PaymentAppVoidUpdate
     */
    reference?: string;
    /**
     * 
     * @type {PaymentAppVoidTargetState}
     * @memberof PaymentAppVoidUpdate
     */
    targetState?: PaymentAppVoidTargetState;
    /**
     * The reason for the void's failure. This field is mandatory when the target state is set to 'FAILED'.
     * @type {number}
     * @memberof PaymentAppVoidUpdate
     */
    failureReason?: number;
}

/**
 * Check if a given object implements the PaymentAppVoidUpdate interface.
 */
export function instanceOfPaymentAppVoidUpdate(value: object): value is PaymentAppVoidUpdate {
    return true;
}

export function PaymentAppVoidUpdateFromJSON(json: any): PaymentAppVoidUpdate {
    return PaymentAppVoidUpdateFromJSONTyped(json, false);
}

export function PaymentAppVoidUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppVoidUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'targetState': json['targetState'] == null ? undefined : PaymentAppVoidTargetStateFromJSON(json['targetState']),
        'failureReason': json['failureReason'] == null ? undefined : json['failureReason'],
    };
}

export function PaymentAppVoidUpdateToJSON(value?: PaymentAppVoidUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reference': value['reference'],
        'targetState': PaymentAppVoidTargetStateToJSON(value['targetState']),
        'failureReason': value['failureReason'],
    };
}

