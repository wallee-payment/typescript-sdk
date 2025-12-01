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
import type { TransactionVoidMode } from './TransactionVoidMode';
import {
    TransactionVoidModeFromJSON,
    TransactionVoidModeFromJSONTyped,
    TransactionVoidModeToJSON,
    TransactionVoidModeToJSONTyped,
} from './TransactionVoidMode';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';
import type { TransactionVoidState } from './TransactionVoidState';
import {
    TransactionVoidStateFromJSON,
    TransactionVoidStateFromJSONTyped,
    TransactionVoidStateToJSON,
    TransactionVoidStateToJSONTyped,
} from './TransactionVoidState';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
    FailureReasonToJSONTyped,
} from './FailureReason';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label';

/**
 * 
 * @export
 * @interface TransactionVoid
 */
export interface TransactionVoid {
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionVoid
     */
    readonly language?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly spaceViewId?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof TransactionVoid
     */
    readonly labels?: Set<Label>;
    /**
     * 
     * @type {TransactionVoidMode}
     * @memberof TransactionVoid
     */
    mode?: TransactionVoidMode;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the object will expire.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly timeoutOn?: Date;
    /**
     * The ID of the user the transaction void was created by.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly createdBy?: number;
    /**
     * The date and time when the next update of the object's state is planned.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly nextUpdateOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof TransactionVoid
     */
    failureReason?: FailureReason;
    /**
     * The date and time when the transaction void succeeded.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionVoidState}
     * @memberof TransactionVoid
     */
    state?: TransactionVoidState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof TransactionVoid
     */
    readonly linkedTransaction?: number;
    /**
     * The date and time when the transaction void failed.
     * @type {Date}
     * @memberof TransactionVoid
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionVoid
     */
    transaction?: Transaction;
    /**
     * The reference ID provided by the payment processor, used to trace the void through the external payment system.
     * @type {string}
     * @memberof TransactionVoid
     */
    readonly processorReference?: string;
}



/**
 * Check if a given object implements the TransactionVoid interface.
 */
export function instanceOfTransactionVoid(value: object): value is TransactionVoid {
    return true;
}

export function TransactionVoidFromJSON(json: any): TransactionVoid {
    return TransactionVoidFromJSONTyped(json, false);
}

export function TransactionVoidFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionVoid {
    if (json == null) {
        return json;
    }
    return {
        
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'language': json['language'] == null ? undefined : json['language'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'mode': json['mode'] == null ? undefined : TransactionVoidModeFromJSON(json['mode']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'nextUpdateOn': json['nextUpdateOn'] == null ? undefined : (new Date(json['nextUpdateOn'])),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionVoidStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
        'processorReference': json['processorReference'] == null ? undefined : json['processorReference'],
    };
}

export function TransactionVoidToJSON(json: any): TransactionVoid {
    return TransactionVoidToJSONTyped(json, false);
}

export function TransactionVoidToJSONTyped(value?: Omit<TransactionVoid, 'plannedPurgeDate'|'language'|'spaceViewId'|'createdOn'|'version'|'labels'|'linkedSpaceId'|'timeoutOn'|'createdBy'|'nextUpdateOn'|'succeededOn'|'id'|'linkedTransaction'|'failedOn'|'processorReference'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mode': TransactionVoidModeToJSON(value['mode']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'state': TransactionVoidStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

