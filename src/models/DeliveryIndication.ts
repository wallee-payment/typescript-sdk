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
import type { DeliveryIndicationState } from './DeliveryIndicationState';
import {
    DeliveryIndicationStateFromJSON,
    DeliveryIndicationStateFromJSONTyped,
    DeliveryIndicationStateToJSON,
    DeliveryIndicationStateToJSONTyped,
} from './DeliveryIndicationState';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';
import type { DeliveryIndicationDecisionReason } from './DeliveryIndicationDecisionReason';
import {
    DeliveryIndicationDecisionReasonFromJSON,
    DeliveryIndicationDecisionReasonFromJSONTyped,
    DeliveryIndicationDecisionReasonToJSON,
    DeliveryIndicationDecisionReasonToJSONTyped,
} from './DeliveryIndicationDecisionReason';
import type { TransactionCompletion } from './TransactionCompletion';
import {
    TransactionCompletionFromJSON,
    TransactionCompletionFromJSONTyped,
    TransactionCompletionToJSON,
    TransactionCompletionToJSONTyped,
} from './TransactionCompletion';

/**
 * 
 * @export
 * @interface DeliveryIndication
 */
export interface DeliveryIndication {
    /**
     * 
     * @type {TransactionCompletion}
     * @memberof DeliveryIndication
     */
    completion?: TransactionCompletion;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {DeliveryIndicationDecisionReason}
     * @memberof DeliveryIndication
     */
    automaticDecisionReason?: DeliveryIndicationDecisionReason;
    /**
     * The date and time when an automatic decision was made.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly automaticallyDecidedOn?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly createdOn?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DeliveryIndication
     */
    readonly linkedSpaceId?: number;
    /**
     * The ID of the user who manually decided the delivery indication's state.
     * @type {number}
     * @memberof DeliveryIndication
     */
    readonly manuallyDecidedBy?: number;
    /**
     * The date and time when the delivery indication will expire.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly timeoutOn?: Date;
    /**
     * The date and time by which a decision must be made before the system automatically proceeds according to the connector's predefined settings.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly manualDecisionTimeoutOn?: Date;
    /**
     * The date and time when a manual decision was made.
     * @type {Date}
     * @memberof DeliveryIndication
     */
    readonly manuallyDecidedOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DeliveryIndication
     */
    readonly id?: number;
    /**
     * 
     * @type {DeliveryIndicationState}
     * @memberof DeliveryIndication
     */
    state?: DeliveryIndicationState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof DeliveryIndication
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {Transaction}
     * @memberof DeliveryIndication
     */
    transaction?: Transaction;
}



/**
 * Check if a given object implements the DeliveryIndication interface.
 */
export function instanceOfDeliveryIndication(value: object): value is DeliveryIndication {
    return true;
}

export function DeliveryIndicationFromJSON(json: any): DeliveryIndication {
    return DeliveryIndicationFromJSONTyped(json, false);
}

export function DeliveryIndicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryIndication {
    if (json == null) {
        return json;
    }
    return {
        
        'completion': json['completion'] == null ? undefined : TransactionCompletionFromJSON(json['completion']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'automaticDecisionReason': json['automaticDecisionReason'] == null ? undefined : DeliveryIndicationDecisionReasonFromJSON(json['automaticDecisionReason']),
        'automaticallyDecidedOn': json['automaticallyDecidedOn'] == null ? undefined : (new Date(json['automaticallyDecidedOn'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'manuallyDecidedBy': json['manuallyDecidedBy'] == null ? undefined : json['manuallyDecidedBy'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'manualDecisionTimeoutOn': json['manualDecisionTimeoutOn'] == null ? undefined : (new Date(json['manualDecisionTimeoutOn'])),
        'manuallyDecidedOn': json['manuallyDecidedOn'] == null ? undefined : (new Date(json['manuallyDecidedOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : DeliveryIndicationStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function DeliveryIndicationToJSON(json: any): DeliveryIndication {
    return DeliveryIndicationToJSONTyped(json, false);
}

export function DeliveryIndicationToJSONTyped(value?: Omit<DeliveryIndication, 'plannedPurgeDate'|'automaticallyDecidedOn'|'createdOn'|'linkedSpaceId'|'manuallyDecidedBy'|'timeoutOn'|'manualDecisionTimeoutOn'|'manuallyDecidedOn'|'id'|'linkedTransaction'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'completion': TransactionCompletionToJSON(value['completion']),
        'automaticDecisionReason': DeliveryIndicationDecisionReasonToJSON(value['automaticDecisionReason']),
        'state': DeliveryIndicationStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

