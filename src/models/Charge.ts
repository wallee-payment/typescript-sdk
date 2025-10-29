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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { ChargeType } from './ChargeType';
import {
    ChargeTypeFromJSON,
    ChargeTypeFromJSONTyped,
    ChargeTypeToJSON,
} from './ChargeType';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
} from './FailureReason';
import type { ChargeState } from './ChargeState';
import {
    ChargeStateFromJSON,
    ChargeStateFromJSONTyped,
    ChargeStateToJSON,
} from './ChargeState';

/**
 * 
 * @export
 * @interface Charge
 */
export interface Charge {
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Charge
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The time zone that this object is associated with.
     * @type {string}
     * @memberof Charge
     */
    readonly timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Charge
     */
    readonly language?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof Charge
     */
    readonly spaceViewId?: number;
    /**
     * 
     * @type {ChargeType}
     * @memberof Charge
     */
    type?: ChargeType;
    /**
     * The message that can be displayed to the customer explaining why the charge failed, in the customer's language.
     * @type {string}
     * @memberof Charge
     */
    readonly userFailureMessage?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof Charge
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Charge
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Charge
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the charge will expire.
     * @type {Date}
     * @memberof Charge
     */
    readonly timeoutOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof Charge
     */
    failureReason?: FailureReason;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Charge
     */
    readonly id?: number;
    /**
     * 
     * @type {ChargeState}
     * @memberof Charge
     */
    state?: ChargeState;
    /**
     * 
     * @type {Transaction}
     * @memberof Charge
     */
    transaction?: Transaction;
}

/**
 * Check if a given object implements the Charge interface.
 */
export function instanceOfCharge(value: object): value is Charge {
    return true;
}

export function ChargeFromJSON(json: any): Charge {
    return ChargeFromJSONTyped(json, false);
}

export function ChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Charge {
    if (json == null) {
        return json;
    }
    return {
        
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'type': json['type'] == null ? undefined : ChargeTypeFromJSON(json['type']),
        'userFailureMessage': json['userFailureMessage'] == null ? undefined : json['userFailureMessage'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ChargeStateFromJSON(json['state']),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function ChargeToJSON(value?: Omit<Charge, 'plannedPurgeDate'|'timeZone'|'language'|'spaceViewId'|'userFailureMessage'|'createdOn'|'version'|'linkedSpaceId'|'timeoutOn'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': ChargeTypeToJSON(value['type']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'state': ChargeStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

