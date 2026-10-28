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
import type { InvoiceReconciliationRecordType } from './InvoiceReconciliationRecordType';
import {
    InvoiceReconciliationRecordTypeFromJSON,
    InvoiceReconciliationRecordTypeFromJSONTyped,
    InvoiceReconciliationRecordTypeToJSON,
    InvoiceReconciliationRecordTypeToJSONTyped,
} from './InvoiceReconciliationRecordType';
import type { InvoiceReconciliationRecordState } from './InvoiceReconciliationRecordState';
import {
    InvoiceReconciliationRecordStateFromJSON,
    InvoiceReconciliationRecordStateFromJSONTyped,
    InvoiceReconciliationRecordStateToJSON,
    InvoiceReconciliationRecordStateToJSONTyped,
} from './InvoiceReconciliationRecordState';
import type { BankPaymentType } from './BankPaymentType';
import {
    BankPaymentTypeFromJSON,
    BankPaymentTypeFromJSONTyped,
    BankPaymentTypeToJSON,
    BankPaymentTypeToJSONTyped,
} from './BankPaymentType';
import type { InvoiceReconciliationRecordRejectionStatus } from './InvoiceReconciliationRecordRejectionStatus';
import {
    InvoiceReconciliationRecordRejectionStatusFromJSON,
    InvoiceReconciliationRecordRejectionStatusFromJSONTyped,
    InvoiceReconciliationRecordRejectionStatusToJSON,
    InvoiceReconciliationRecordRejectionStatusToJSONTyped,
} from './InvoiceReconciliationRecordRejectionStatus';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
    FailureReasonToJSONTyped,
} from './FailureReason';
import type { ChargeAttemptEnvironment } from './ChargeAttemptEnvironment';
import {
    ChargeAttemptEnvironmentFromJSON,
    ChargeAttemptEnvironmentFromJSONTyped,
    ChargeAttemptEnvironmentToJSON,
    ChargeAttemptEnvironmentToJSONTyped,
} from './ChargeAttemptEnvironment';

/**
 * 
 * @export
 * @interface InvoiceReconciliationRecord
 */
export interface InvoiceReconciliationRecord {
    /**
     * The discarded on date indicates when the bank transaction has been discarded.
     * @type {Date}
     * @memberof InvoiceReconciliationRecord
     */
    readonly discardedOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof InvoiceReconciliationRecord
     */
    lastResolutionFailure?: FailureReason;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly country?: string;
    /**
     * 
     * @type {InvoiceReconciliationRecordRejectionStatus}
     * @memberof InvoiceReconciliationRecord
     */
    rejectionStatus?: InvoiceReconciliationRecordRejectionStatus;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly city?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly resolvedBy?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly discardedBy?: number;
    /**
     * 
     * @type {InvoiceReconciliationRecordType}
     * @memberof InvoiceReconciliationRecord
     */
    type?: InvoiceReconciliationRecordType;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof InvoiceReconciliationRecord
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly paymentFeeCurrency?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly paymentReason?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly referenceNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly street?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly familyName?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly currency?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly id?: number;
    /**
     * 
     * @type {InvoiceReconciliationRecordState}
     * @memberof InvoiceReconciliationRecord
     */
    state?: InvoiceReconciliationRecordState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly linkedTransaction?: number;
    /**
     * The resolved on date indicates when the bank transaction has been resolved.
     * @type {Date}
     * @memberof InvoiceReconciliationRecord
     */
    readonly resolvedOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly amount?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly address?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly givenName?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof InvoiceReconciliationRecord
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {BankPaymentType}
     * @memberof InvoiceReconciliationRecord
     */
    bankPaymentType?: BankPaymentType;
    /**
     * 
     * @type {Date}
     * @memberof InvoiceReconciliationRecord
     */
    readonly valueDate?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly version?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly paymentFeeAmount?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof InvoiceReconciliationRecord
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof InvoiceReconciliationRecord
     */
    environment?: ChargeAttemptEnvironment;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly senderBankAccount?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly participantNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly iban?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly postCode?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReconciliationRecord
     */
    readonly uniqueId?: string;
}



/**
 * Check if a given object implements the InvoiceReconciliationRecord interface.
 */
export function instanceOfInvoiceReconciliationRecord(value: object): value is InvoiceReconciliationRecord {
    return true;
}

export function InvoiceReconciliationRecordFromJSON(json: any): InvoiceReconciliationRecord {
    return InvoiceReconciliationRecordFromJSONTyped(json, false);
}

export function InvoiceReconciliationRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReconciliationRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'discardedOn': json['discardedOn'] == null ? undefined : (new Date(json['discardedOn'])),
        'lastResolutionFailure': json['lastResolutionFailure'] == null ? undefined : FailureReasonFromJSON(json['lastResolutionFailure']),
        'country': json['country'] == null ? undefined : json['country'],
        'rejectionStatus': json['rejectionStatus'] == null ? undefined : InvoiceReconciliationRecordRejectionStatusFromJSON(json['rejectionStatus']),
        'city': json['city'] == null ? undefined : json['city'],
        'resolvedBy': json['resolvedBy'] == null ? undefined : json['resolvedBy'],
        'discardedBy': json['discardedBy'] == null ? undefined : json['discardedBy'],
        'type': json['type'] == null ? undefined : InvoiceReconciliationRecordTypeFromJSON(json['type']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'paymentFeeCurrency': json['paymentFeeCurrency'] == null ? undefined : json['paymentFeeCurrency'],
        'paymentReason': json['paymentReason'] == null ? undefined : json['paymentReason'],
        'referenceNumber': json['referenceNumber'] == null ? undefined : json['referenceNumber'],
        'street': json['street'] == null ? undefined : json['street'],
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : InvoiceReconciliationRecordStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'resolvedOn': json['resolvedOn'] == null ? undefined : (new Date(json['resolvedOn'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'address': json['address'] == null ? undefined : json['address'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'bankPaymentType': json['bankPaymentType'] == null ? undefined : BankPaymentTypeFromJSON(json['bankPaymentType']),
        'valueDate': json['valueDate'] == null ? undefined : (new Date(json['valueDate'])),
        'version': json['version'] == null ? undefined : json['version'],
        'paymentFeeAmount': json['paymentFeeAmount'] == null ? undefined : json['paymentFeeAmount'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['environment']),
        'senderBankAccount': json['senderBankAccount'] == null ? undefined : json['senderBankAccount'],
        'participantNumber': json['participantNumber'] == null ? undefined : json['participantNumber'],
        'iban': json['iban'] == null ? undefined : json['iban'],
        'postCode': json['postCode'] == null ? undefined : json['postCode'],
        'uniqueId': json['uniqueId'] == null ? undefined : json['uniqueId'],
    };
}

export function InvoiceReconciliationRecordToJSON(json: any): InvoiceReconciliationRecord {
    return InvoiceReconciliationRecordToJSONTyped(json, false);
}

export function InvoiceReconciliationRecordToJSONTyped(value?: Omit<InvoiceReconciliationRecord, 'discardedOn'|'country'|'city'|'resolvedBy'|'discardedBy'|'createdOn'|'paymentFeeCurrency'|'paymentReason'|'referenceNumber'|'street'|'familyName'|'currency'|'id'|'linkedTransaction'|'resolvedOn'|'amount'|'address'|'givenName'|'plannedPurgeDate'|'valueDate'|'version'|'paymentFeeAmount'|'linkedSpaceId'|'senderBankAccount'|'participantNumber'|'iban'|'postCode'|'uniqueId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lastResolutionFailure': FailureReasonToJSON(value['lastResolutionFailure']),
        'rejectionStatus': InvoiceReconciliationRecordRejectionStatusToJSON(value['rejectionStatus']),
        'type': InvoiceReconciliationRecordTypeToJSON(value['type']),
        'state': InvoiceReconciliationRecordStateToJSON(value['state']),
        'bankPaymentType': BankPaymentTypeToJSON(value['bankPaymentType']),
        'environment': ChargeAttemptEnvironmentToJSON(value['environment']),
    };
}

