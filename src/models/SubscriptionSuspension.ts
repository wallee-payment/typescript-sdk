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
import type { SubscriptionSuspensionReason } from './SubscriptionSuspensionReason';
import {
    SubscriptionSuspensionReasonFromJSON,
    SubscriptionSuspensionReasonFromJSONTyped,
    SubscriptionSuspensionReasonToJSON,
    SubscriptionSuspensionReasonToJSONTyped,
} from './SubscriptionSuspensionReason';
import type { SubscriptionSuspensionAction } from './SubscriptionSuspensionAction';
import {
    SubscriptionSuspensionActionFromJSON,
    SubscriptionSuspensionActionFromJSONTyped,
    SubscriptionSuspensionActionToJSON,
    SubscriptionSuspensionActionToJSONTyped,
} from './SubscriptionSuspensionAction';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
    SubscriptionToJSONTyped,
} from './Subscription';
import type { SubscriptionSuspensionState } from './SubscriptionSuspensionState';
import {
    SubscriptionSuspensionStateFromJSON,
    SubscriptionSuspensionStateFromJSONTyped,
    SubscriptionSuspensionStateToJSON,
    SubscriptionSuspensionStateToJSONTyped,
} from './SubscriptionSuspensionState';

/**
 * 
 * @export
 * @interface SubscriptionSuspension
 */
export interface SubscriptionSuspension {
    /**
     * The date and time when the suspension ended.
     * @type {Date}
     * @memberof SubscriptionSuspension
     */
    readonly effectiveEndDate?: Date;
    /**
     * A note that contains details about the suspension. It is not disclosed to the subscriber.
     * @type {string}
     * @memberof SubscriptionSuspension
     */
    readonly note?: string;
    /**
     * 
     * @type {SubscriptionSuspensionReason}
     * @memberof SubscriptionSuspension
     */
    reason?: SubscriptionSuspensionReason;
    /**
     * The period bill that led to the suspension of the subscription.
     * @type {number}
     * @memberof SubscriptionSuspension
     */
    readonly periodBill?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionSuspension
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionSuspension
     */
    readonly language?: string;
    /**
     * 
     * @type {Subscription}
     * @memberof SubscriptionSuspension
     */
    subscription?: Subscription;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof SubscriptionSuspension
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionSuspension
     */
    readonly version?: number;
    /**
     * The date and time when the suspension is planned to end.
     * @type {Date}
     * @memberof SubscriptionSuspension
     */
    readonly plannedEndDate?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionSuspension
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {SubscriptionSuspensionAction}
     * @memberof SubscriptionSuspension
     */
    endAction?: SubscriptionSuspensionAction;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionSuspension
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionSuspensionState}
     * @memberof SubscriptionSuspension
     */
    state?: SubscriptionSuspensionState;
}



/**
 * Check if a given object implements the SubscriptionSuspension interface.
 */
export function instanceOfSubscriptionSuspension(value: object): value is SubscriptionSuspension {
    return true;
}

export function SubscriptionSuspensionFromJSON(json: any): SubscriptionSuspension {
    return SubscriptionSuspensionFromJSONTyped(json, false);
}

export function SubscriptionSuspensionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSuspension {
    if (json == null) {
        return json;
    }
    return {
        
        'effectiveEndDate': json['effectiveEndDate'] == null ? undefined : (new Date(json['effectiveEndDate'])),
        'note': json['note'] == null ? undefined : json['note'],
        'reason': json['reason'] == null ? undefined : SubscriptionSuspensionReasonFromJSON(json['reason']),
        'periodBill': json['periodBill'] == null ? undefined : json['periodBill'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'language': json['language'] == null ? undefined : json['language'],
        'subscription': json['subscription'] == null ? undefined : SubscriptionFromJSON(json['subscription']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'plannedEndDate': json['plannedEndDate'] == null ? undefined : (new Date(json['plannedEndDate'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'endAction': json['endAction'] == null ? undefined : SubscriptionSuspensionActionFromJSON(json['endAction']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionSuspensionStateFromJSON(json['state']),
    };
}

export function SubscriptionSuspensionToJSON(json: any): SubscriptionSuspension {
    return SubscriptionSuspensionToJSONTyped(json, false);
}

export function SubscriptionSuspensionToJSONTyped(value?: Omit<SubscriptionSuspension, 'effectiveEndDate'|'note'|'periodBill'|'plannedPurgeDate'|'language'|'createdOn'|'version'|'plannedEndDate'|'linkedSpaceId'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reason': SubscriptionSuspensionReasonToJSON(value['reason']),
        'subscription': SubscriptionToJSON(value['subscription']),
        'endAction': SubscriptionSuspensionActionToJSON(value['endAction']),
        'state': SubscriptionSuspensionStateToJSON(value['state']),
    };
}

