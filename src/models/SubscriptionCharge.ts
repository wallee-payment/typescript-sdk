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
import type { SubscriptionLedgerEntry } from './SubscriptionLedgerEntry';
import {
    SubscriptionLedgerEntryFromJSON,
    SubscriptionLedgerEntryFromJSONTyped,
    SubscriptionLedgerEntryToJSON,
} from './SubscriptionLedgerEntry';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';
import type { SubscriptionChargeState } from './SubscriptionChargeState';
import {
    SubscriptionChargeStateFromJSON,
    SubscriptionChargeStateFromJSONTyped,
    SubscriptionChargeStateToJSON,
} from './SubscriptionChargeState';
import type { SubscriptionChargeProcessingType } from './SubscriptionChargeProcessingType';
import {
    SubscriptionChargeProcessingTypeFromJSON,
    SubscriptionChargeProcessingTypeFromJSONTyped,
    SubscriptionChargeProcessingTypeToJSON,
} from './SubscriptionChargeProcessingType';
import type { SubscriptionChargeType } from './SubscriptionChargeType';
import {
    SubscriptionChargeTypeFromJSON,
    SubscriptionChargeTypeFromJSONTyped,
    SubscriptionChargeTypeToJSON,
} from './SubscriptionChargeType';

/**
 * The subscription charge represents a single charge carried out for a particular subscription.
 * @export
 * @interface SubscriptionCharge
 */
export interface SubscriptionCharge {
    /**
     * The date and time when the charge was discarded.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly discardedOn?: Date;
    /**
     * The date and time when the execution of the charge is planned.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly plannedExecutionDate?: Date;
    /**
     * 
     * @type {SubscriptionChargeProcessingType}
     * @memberof SubscriptionCharge
     */
    processingType?: SubscriptionChargeProcessingType;
    /**
     * The ledger entries that belong to the charge.
     * @type {Set<SubscriptionLedgerEntry>}
     * @memberof SubscriptionCharge
     */
    readonly ledgerEntries?: Set<SubscriptionLedgerEntry>;
    /**
     * The ID of the user the charge was discarded by.
     * @type {number}
     * @memberof SubscriptionCharge
     */
    readonly discardedBy?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionCharge
     */
    readonly externalId?: string;
    /**
     * The URL to redirect the customer back to after they successfully authenticated their payment.
     * @type {string}
     * @memberof SubscriptionCharge
     */
    readonly successUrl?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionCharge
     */
    readonly language?: string;
    /**
     * 
     * @type {Subscription}
     * @memberof SubscriptionCharge
     */
    subscription?: Subscription;
    /**
     * 
     * @type {SubscriptionChargeType}
     * @memberof SubscriptionCharge
     */
    type?: SubscriptionChargeType;
    /**
     * The date and time when the charge was created.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionCharge
     */
    readonly version?: number;
    /**
     * The merchant's reference used to identify the charge.
     * @type {string}
     * @memberof SubscriptionCharge
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionCharge
     */
    readonly linkedSpaceId?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionCharge
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionChargeState}
     * @memberof SubscriptionCharge
     */
    state?: SubscriptionChargeState;
    /**
     * The date and time when the charge failed.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {Transaction}
     * @memberof SubscriptionCharge
     */
    transaction?: Transaction;
    /**
     * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
     * @type {string}
     * @memberof SubscriptionCharge
     */
    readonly failedUrl?: string;
    /**
     * The date and time when the charge succeeded.
     * @type {Date}
     * @memberof SubscriptionCharge
     */
    readonly succeedOn?: Date;
}

/**
 * Check if a given object implements the SubscriptionCharge interface.
 */
export function instanceOfSubscriptionCharge(value: object): value is SubscriptionCharge {
    return true;
}

export function SubscriptionChargeFromJSON(json: any): SubscriptionCharge {
    return SubscriptionChargeFromJSONTyped(json, false);
}

export function SubscriptionChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCharge {
    if (json == null) {
        return json;
    }
    return {
        
        'discardedOn': json['discardedOn'] == null ? undefined : (new Date(json['discardedOn'])),
        'plannedExecutionDate': json['plannedExecutionDate'] == null ? undefined : (new Date(json['plannedExecutionDate'])),
        'processingType': json['processingType'] == null ? undefined : SubscriptionChargeProcessingTypeFromJSON(json['processingType']),
        'ledgerEntries': json['ledgerEntries'] == null ? undefined : (new Set((json['ledgerEntries'] as Array<any>).map(SubscriptionLedgerEntryFromJSON))),
        'discardedBy': json['discardedBy'] == null ? undefined : json['discardedBy'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'successUrl': json['successUrl'] == null ? undefined : json['successUrl'],
        'language': json['language'] == null ? undefined : json['language'],
        'subscription': json['subscription'] == null ? undefined : SubscriptionFromJSON(json['subscription']),
        'type': json['type'] == null ? undefined : SubscriptionChargeTypeFromJSON(json['type']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionChargeStateFromJSON(json['state']),
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
        'failedUrl': json['failedUrl'] == null ? undefined : json['failedUrl'],
        'succeedOn': json['succeedOn'] == null ? undefined : (new Date(json['succeedOn'])),
    };
}

export function SubscriptionChargeToJSON(value?: Omit<SubscriptionCharge, 'discardedOn'|'plannedExecutionDate'|'ledgerEntries'|'discardedBy'|'plannedPurgeDate'|'externalId'|'successUrl'|'language'|'createdOn'|'version'|'reference'|'linkedSpaceId'|'id'|'failedOn'|'failedUrl'|'succeedOn'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'processingType': SubscriptionChargeProcessingTypeToJSON(value['processingType']),
        'subscription': SubscriptionToJSON(value['subscription']),
        'type': SubscriptionChargeTypeToJSON(value['type']),
        'state': SubscriptionChargeStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

