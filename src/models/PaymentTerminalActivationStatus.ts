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
 * @interface PaymentTerminalActivationStatus
 */
export interface PaymentTerminalActivationStatus {
    /**
     * Whether the activation code is active on the acquirer side
     * @type {boolean}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly activationCodeActive?: boolean;
    /**
     * The environment (TEST/PRODUCTION) the payment terminal belongs to.
     * @type {string}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly environment?: string;
    /**
     * Time when the payment terminal got activated on acquirer side
     * @type {Date}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly activatedOn?: Date;
    /**
     * The ID of the location that the payment terminal belongs to
     * @type {number}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly locationId?: number;
    /**
     * Activation code that is used to link the terminal
     * @type {string}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly activationCode?: string;
    /**
     * The ID of the configuration that the payment terminal belongs to
     * @type {number}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly configurationId?: number;
    /**
     * The ID of the payment terminal
     * @type {string}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly terminalId?: string;
    /**
     * The ID of the space that the payment terminal belongs to
     * @type {number}
     * @memberof PaymentTerminalActivationStatus
     */
    readonly space?: number;
}

/**
 * Check if a given object implements the PaymentTerminalActivationStatus interface.
 */
export function instanceOfPaymentTerminalActivationStatus(value: object): value is PaymentTerminalActivationStatus {
    return true;
}

export function PaymentTerminalActivationStatusFromJSON(json: any): PaymentTerminalActivationStatus {
    return PaymentTerminalActivationStatusFromJSONTyped(json, false);
}

export function PaymentTerminalActivationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalActivationStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'activationCodeActive': json['activationCodeActive'] == null ? undefined : json['activationCodeActive'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'locationId': json['locationId'] == null ? undefined : json['locationId'],
        'activationCode': json['activationCode'] == null ? undefined : json['activationCode'],
        'configurationId': json['configurationId'] == null ? undefined : json['configurationId'],
        'terminalId': json['terminalId'] == null ? undefined : json['terminalId'],
        'space': json['space'] == null ? undefined : json['space'],
    };
}

export function PaymentTerminalActivationStatusToJSON(json: any): PaymentTerminalActivationStatus {
    return PaymentTerminalActivationStatusToJSONTyped(json, false);
}

export function PaymentTerminalActivationStatusToJSONTyped(value?: Omit<PaymentTerminalActivationStatus, 'activationCodeActive'|'environment'|'activatedOn'|'locationId'|'activationCode'|'configurationId'|'terminalId'|'space'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

