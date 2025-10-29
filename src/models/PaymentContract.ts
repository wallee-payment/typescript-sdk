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
import type { PaymentContractState } from './PaymentContractState';
import {
    PaymentContractStateFromJSON,
    PaymentContractStateFromJSONTyped,
    PaymentContractStateToJSON,
} from './PaymentContractState';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
} from './FailureReason';
import type { PaymentContractType } from './PaymentContractType';
import {
    PaymentContractTypeFromJSON,
    PaymentContractTypeFromJSONTyped,
    PaymentContractTypeToJSON,
} from './PaymentContractType';

/**
 * 
 * @export
 * @interface PaymentContract
 */
export interface PaymentContract {
    /**
     * 
     * @type {PaymentContractType}
     * @memberof PaymentContract
     */
    contractType?: PaymentContractType;
    /**
     * The ID of the user the contract was terminated by.
     * @type {number}
     * @memberof PaymentContract
     */
    readonly terminatedBy?: number;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentContract
     */
    readonly externalId?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof PaymentContract
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentContract
     */
    readonly version?: number;
    /**
     * The date and time when the contract was terminated.
     * @type {Date}
     * @memberof PaymentContract
     */
    readonly terminatedOn?: Date;
    /**
     * The date and time when the contract was activated.
     * @type {Date}
     * @memberof PaymentContract
     */
    readonly activatedOn?: Date;
    /**
     * The date and time when the termination process of the contract was started.
     * @type {Date}
     * @memberof PaymentContract
     */
    readonly startTerminatingOn?: Date;
    /**
     * The ID of the user the contract was created by.
     * @type {number}
     * @memberof PaymentContract
     */
    readonly createdBy?: number;
    /**
     * The identifier of the contract.
     * @type {string}
     * @memberof PaymentContract
     */
    readonly contractIdentifier?: string;
    /**
     * The date and time when the contract was rejected.
     * @type {Date}
     * @memberof PaymentContract
     */
    readonly rejectedOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentContract
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentContractState}
     * @memberof PaymentContract
     */
    state?: PaymentContractState;
    /**
     * 
     * @type {FailureReason}
     * @memberof PaymentContract
     */
    rejectionReason?: FailureReason;
    /**
     * This account that the contract belongs to.
     * @type {number}
     * @memberof PaymentContract
     */
    readonly account?: number;
}

/**
 * Check if a given object implements the PaymentContract interface.
 */
export function instanceOfPaymentContract(value: object): value is PaymentContract {
    return true;
}

export function PaymentContractFromJSON(json: any): PaymentContract {
    return PaymentContractFromJSONTyped(json, false);
}

export function PaymentContractFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentContract {
    if (json == null) {
        return json;
    }
    return {
        
        'contractType': json['contractType'] == null ? undefined : PaymentContractTypeFromJSON(json['contractType']),
        'terminatedBy': json['terminatedBy'] == null ? undefined : json['terminatedBy'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'terminatedOn': json['terminatedOn'] == null ? undefined : (new Date(json['terminatedOn'])),
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'startTerminatingOn': json['startTerminatingOn'] == null ? undefined : (new Date(json['startTerminatingOn'])),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'contractIdentifier': json['contractIdentifier'] == null ? undefined : json['contractIdentifier'],
        'rejectedOn': json['rejectedOn'] == null ? undefined : (new Date(json['rejectedOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentContractStateFromJSON(json['state']),
        'rejectionReason': json['rejectionReason'] == null ? undefined : FailureReasonFromJSON(json['rejectionReason']),
        'account': json['account'] == null ? undefined : json['account'],
    };
}

export function PaymentContractToJSON(value?: Omit<PaymentContract, 'terminatedBy'|'externalId'|'createdOn'|'version'|'terminatedOn'|'activatedOn'|'startTerminatingOn'|'createdBy'|'contractIdentifier'|'rejectedOn'|'id'|'account'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'contractType': PaymentContractTypeToJSON(value['contractType']),
        'state': PaymentContractStateToJSON(value['state']),
        'rejectionReason': FailureReasonToJSON(value['rejectionReason']),
    };
}

