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
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
} from './FailureReason';
import type { RefundType } from './RefundType';
import {
    RefundTypeFromJSON,
    RefundTypeFromJSONTyped,
    RefundTypeToJSON,
} from './RefundType';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
} from './Label';
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
} from './Environment';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';
import type { LineItemReduction } from './LineItemReduction';
import {
    LineItemReductionFromJSON,
    LineItemReductionFromJSONTyped,
    LineItemReductionToJSON,
} from './LineItemReduction';
import type { RefundState } from './RefundState';
import {
    RefundStateFromJSON,
    RefundStateFromJSONTyped,
    RefundStateToJSON,
} from './RefundState';

/**
 * A refund is a credit issued to the customer, which can be initiated either by the merchant or by the customer as a reversal.
 * @export
 * @interface Refund
 */
export interface Refund {
    /**
     * The total amount settled for the refund, factoring in reductions, taxes, and any additional applied fees.
     * @type {number}
     * @memberof Refund
     */
    readonly totalSettledAmount?: number;
    /**
     * The reductions applied on the original transaction items, detailing specific adjustments associated with the refund.
     * @type {Array<LineItemReduction>}
     * @memberof Refund
     */
    readonly reductions?: Array<LineItemReduction>;
    /**
     * The original base line items from the transaction prior to the refund, serving as a reference for the refunded amounts.
     * @type {Array<LineItem>}
     * @memberof Refund
     */
    readonly baseLineItems?: Array<LineItem>;
    /**
     * The date and time when the processing of the refund was started.
     * @type {Date}
     * @memberof Refund
     */
    readonly processingOn?: Date;
    /**
     * The tax breakdown applied to the refund amount, helping with tax calculations or reporting.
     * @type {Set<Tax>}
     * @memberof Refund
     */
    readonly taxes?: Set<Tax>;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Refund
     */
    readonly language?: string;
    /**
     * 
     * @type {RefundType}
     * @memberof Refund
     */
    type?: RefundType;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof Refund
     */
    readonly createdOn?: Date;
    /**
     * The line items included in the refund, representing the reductions.
     * @type {Array<LineItem>}
     * @memberof Refund
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The date and time when the refund succeeded.
     * @type {Date}
     * @memberof Refund
     */
    readonly succeededOn?: Date;
    /**
     * The line items from the original transaction, adjusted to reflect any reductions applied during the refund process.
     * @type {Array<LineItem>}
     * @memberof Refund
     */
    readonly reducedLineItems?: Array<LineItem>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Refund
     */
    readonly id?: number;
    /**
     * 
     * @type {RefundState}
     * @memberof Refund
     */
    state?: RefundState;
    /**
     * The merchant's reference used to identify the refund.
     * @type {string}
     * @memberof Refund
     */
    readonly merchantReference?: string;
    /**
     * The transaction completion that the refund belongs to.
     * @type {number}
     * @memberof Refund
     */
    readonly completion?: number;
    /**
     * The total monetary amount of the refund, representing the exact credit issued to the customer.
     * @type {number}
     * @memberof Refund
     */
    readonly amount?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Refund
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof Refund
     */
    readonly externalId?: string;
    /**
     * The time zone that this object is associated with.
     * @type {string}
     * @memberof Refund
     */
    readonly timeZone?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Refund
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof Refund
     */
    readonly labels?: Set<Label>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Refund
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the object will expire.
     * @type {Date}
     * @memberof Refund
     */
    readonly timeoutOn?: Date;
    /**
     * 
     * @type {Environment}
     * @memberof Refund
     */
    environment?: Environment;
    /**
     * The ID of the user the refund was created by.
     * @type {number}
     * @memberof Refund
     */
    readonly createdBy?: number;
    /**
     * The date and time when the next update of the object's state is planned.
     * @type {Date}
     * @memberof Refund
     */
    readonly nextUpdateOn?: Date;
    /**
     * An updated invoice reflecting adjustments made by the refund.
     * @type {number}
     * @memberof Refund
     */
    readonly updatedInvoice?: number;
    /**
     * 
     * @type {FailureReason}
     * @memberof Refund
     */
    failureReason?: FailureReason;
    /**
     * The sum of fees applied to the refund transaction, such as processing or service charges.
     * @type {number}
     * @memberof Refund
     */
    readonly totalAppliedFees?: number;
    /**
     * The date and time when the refund failed.
     * @type {Date}
     * @memberof Refund
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {Transaction}
     * @memberof Refund
     */
    transaction?: Transaction;
    /**
     * The reference ID provided by the payment processor, used to trace the refund through the external payment system.
     * @type {string}
     * @memberof Refund
     */
    readonly processorReference?: string;
}

/**
 * Check if a given object implements the Refund interface.
 */
export function instanceOfRefund(value: object): value is Refund {
    return true;
}

export function RefundFromJSON(json: any): Refund {
    return RefundFromJSONTyped(json, false);
}

export function RefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Refund {
    if (json == null) {
        return json;
    }
    return {
        
        'totalSettledAmount': json['totalSettledAmount'] == null ? undefined : json['totalSettledAmount'],
        'reductions': json['reductions'] == null ? undefined : ((json['reductions'] as Array<any>).map(LineItemReductionFromJSON)),
        'baseLineItems': json['baseLineItems'] == null ? undefined : ((json['baseLineItems'] as Array<any>).map(LineItemFromJSON)),
        'processingOn': json['processingOn'] == null ? undefined : (new Date(json['processingOn'])),
        'taxes': json['taxes'] == null ? undefined : (new Set((json['taxes'] as Array<any>).map(TaxFromJSON))),
        'language': json['language'] == null ? undefined : json['language'],
        'type': json['type'] == null ? undefined : RefundTypeFromJSON(json['type']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'reducedLineItems': json['reducedLineItems'] == null ? undefined : ((json['reducedLineItems'] as Array<any>).map(LineItemFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : RefundStateFromJSON(json['state']),
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
        'completion': json['completion'] == null ? undefined : json['completion'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'nextUpdateOn': json['nextUpdateOn'] == null ? undefined : (new Date(json['nextUpdateOn'])),
        'updatedInvoice': json['updatedInvoice'] == null ? undefined : json['updatedInvoice'],
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'totalAppliedFees': json['totalAppliedFees'] == null ? undefined : json['totalAppliedFees'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
        'processorReference': json['processorReference'] == null ? undefined : json['processorReference'],
    };
}

export function RefundToJSON(value?: Omit<Refund, 'totalSettledAmount'|'reductions'|'baseLineItems'|'processingOn'|'taxes'|'language'|'createdOn'|'lineItems'|'succeededOn'|'reducedLineItems'|'id'|'merchantReference'|'completion'|'amount'|'plannedPurgeDate'|'externalId'|'timeZone'|'version'|'labels'|'linkedSpaceId'|'timeoutOn'|'createdBy'|'nextUpdateOn'|'updatedInvoice'|'totalAppliedFees'|'failedOn'|'processorReference'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': RefundTypeToJSON(value['type']),
        'state': RefundStateToJSON(value['state']),
        'environment': EnvironmentToJSON(value['environment']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

