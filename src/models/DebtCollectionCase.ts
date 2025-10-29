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
import type { DebtCollectionCaseState } from './DebtCollectionCaseState';
import {
    DebtCollectionCaseStateFromJSON,
    DebtCollectionCaseStateFromJSONTyped,
    DebtCollectionCaseStateToJSON,
} from './DebtCollectionCaseState';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
} from './FailureReason';
import type { DebtCollectionCaseSource } from './DebtCollectionCaseSource';
import {
    DebtCollectionCaseSourceFromJSON,
    DebtCollectionCaseSourceFromJSONTyped,
    DebtCollectionCaseSourceToJSON,
} from './DebtCollectionCaseSource';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
} from './Label';
import type { DebtCollectorConfiguration } from './DebtCollectorConfiguration';
import {
    DebtCollectorConfigurationFromJSON,
    DebtCollectorConfigurationFromJSONTyped,
    DebtCollectorConfigurationToJSON,
} from './DebtCollectorConfiguration';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';
import type { DebtCollectionEnvironment } from './DebtCollectionEnvironment';
import {
    DebtCollectionEnvironmentFromJSON,
    DebtCollectionEnvironmentFromJSONTyped,
    DebtCollectionEnvironmentToJSON,
} from './DebtCollectionEnvironment';

/**
 * The debt collection case represents a try to collect the money from the debtor.
 * @export
 * @interface DebtCollectionCase
 */
export interface DebtCollectionCase {
    /**
     * The date and time when the contract with the debtor was signed.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly contractDate?: Date;
    /**
     * The date and time when the claim was due.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly dueDate?: Date;
    /**
     * The date and time when the case was closed.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly closedOn?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof DebtCollectionCase
     */
    readonly language?: string;
    /**
     * 
     * @type {DebtCollectionCaseSource}
     * @memberof DebtCollectionCase
     */
    source?: DebtCollectionCaseSource;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly createdOn?: Date;
    /**
     * The line items that are subject of this debt collection case.
     * @type {Array<LineItem>}
     * @memberof DebtCollectionCase
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * A unique reference to identify the debt collection case in communication with the debtor.
     * @type {string}
     * @memberof DebtCollectionCase
     */
    readonly reference?: string;
    /**
     * The three-letter code (ISO 4217 format) of the case's currency.
     * @type {string}
     * @memberof DebtCollectionCase
     */
    readonly currency?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly id?: number;
    /**
     * 
     * @type {DebtCollectionCaseState}
     * @memberof DebtCollectionCase
     */
    state?: DebtCollectionCaseState;
    /**
     * The date and time when the processing of the case times out.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly processingTimeoutOn?: Date;
    /**
     * The sum of all unpaid item prices in the case's currency. The amount can no longer be changed once the case has been reviewed.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly amount?: number;
    /**
     * The ID of the user the case was created by.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly creator?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof DebtCollectionCase
     */
    readonly externalId?: string;
    /**
     * 
     * @type {DebtCollectorConfiguration}
     * @memberof DebtCollectionCase
     */
    collectorConfiguration?: DebtCollectorConfiguration;
    /**
     * The ID of the user the case was reviewed by.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly reviewer?: number;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly spaceViewId?: number;
    /**
     * The date and time when the review of the case was started.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly reviewStartedOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof DebtCollectionCase
     */
    readonly labels?: Set<Label>;
    /**
     * The date and time when the processing of the case was started.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly processingStartedOn?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {DebtCollectionEnvironment}
     * @memberof DebtCollectionCase
     */
    environment?: DebtCollectionEnvironment;
    /**
     * The date and time when the case was reviewed.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly reviewedOn?: Date;
    /**
     * The ID of the object that is the source of the case. Only defined if the case was created by an internal process.
     * @type {number}
     * @memberof DebtCollectionCase
     */
    readonly sourceEntityId?: number;
    /**
     * 
     * @type {FailureReason}
     * @memberof DebtCollectionCase
     */
    failureReason?: FailureReason;
    /**
     * 
     * @type {Address}
     * @memberof DebtCollectionCase
     */
    billingAddress?: Address;
    /**
     * The date and time when the case failed.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly failedOn?: Date;
    /**
     * The date and time when the next attempt at processing the case will be made.
     * @type {Date}
     * @memberof DebtCollectionCase
     */
    readonly nextAttemptOn?: Date;
}

/**
 * Check if a given object implements the DebtCollectionCase interface.
 */
export function instanceOfDebtCollectionCase(value: object): value is DebtCollectionCase {
    return true;
}

export function DebtCollectionCaseFromJSON(json: any): DebtCollectionCase {
    return DebtCollectionCaseFromJSONTyped(json, false);
}

export function DebtCollectionCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCase {
    if (json == null) {
        return json;
    }
    return {
        
        'contractDate': json['contractDate'] == null ? undefined : (new Date(json['contractDate'])),
        'dueDate': json['dueDate'] == null ? undefined : (new Date(json['dueDate'])),
        'closedOn': json['closedOn'] == null ? undefined : (new Date(json['closedOn'])),
        'language': json['language'] == null ? undefined : json['language'],
        'source': json['source'] == null ? undefined : DebtCollectionCaseSourceFromJSON(json['source']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'reference': json['reference'] == null ? undefined : json['reference'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : DebtCollectionCaseStateFromJSON(json['state']),
        'processingTimeoutOn': json['processingTimeoutOn'] == null ? undefined : (new Date(json['processingTimeoutOn'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'creator': json['creator'] == null ? undefined : json['creator'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'collectorConfiguration': json['collectorConfiguration'] == null ? undefined : DebtCollectorConfigurationFromJSON(json['collectorConfiguration']),
        'reviewer': json['reviewer'] == null ? undefined : json['reviewer'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'reviewStartedOn': json['reviewStartedOn'] == null ? undefined : (new Date(json['reviewStartedOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'processingStartedOn': json['processingStartedOn'] == null ? undefined : (new Date(json['processingStartedOn'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : DebtCollectionEnvironmentFromJSON(json['environment']),
        'reviewedOn': json['reviewedOn'] == null ? undefined : (new Date(json['reviewedOn'])),
        'sourceEntityId': json['sourceEntityId'] == null ? undefined : json['sourceEntityId'],
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'nextAttemptOn': json['nextAttemptOn'] == null ? undefined : (new Date(json['nextAttemptOn'])),
    };
}

export function DebtCollectionCaseToJSON(value?: Omit<DebtCollectionCase, 'contractDate'|'dueDate'|'closedOn'|'language'|'createdOn'|'lineItems'|'reference'|'currency'|'id'|'processingTimeoutOn'|'amount'|'creator'|'plannedPurgeDate'|'externalId'|'reviewer'|'spaceViewId'|'reviewStartedOn'|'version'|'labels'|'processingStartedOn'|'linkedSpaceId'|'reviewedOn'|'sourceEntityId'|'failedOn'|'nextAttemptOn'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source': DebtCollectionCaseSourceToJSON(value['source']),
        'state': DebtCollectionCaseStateToJSON(value['state']),
        'collectorConfiguration': DebtCollectorConfigurationToJSON(value['collectorConfiguration']),
        'environment': DebtCollectionEnvironmentToJSON(value['environment']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'billingAddress': AddressToJSON(value['billingAddress']),
    };
}

