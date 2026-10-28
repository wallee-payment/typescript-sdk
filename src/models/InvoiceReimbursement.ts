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
import type { PaymentInitiationAdviceFile } from './PaymentInitiationAdviceFile';
import {
    PaymentInitiationAdviceFileFromJSON,
    PaymentInitiationAdviceFileFromJSONTyped,
    PaymentInitiationAdviceFileToJSON,
    PaymentInitiationAdviceFileToJSONTyped,
} from './PaymentInitiationAdviceFile';
import type { PaymentConnectorConfiguration } from './PaymentConnectorConfiguration';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationFromJSONTyped,
    PaymentConnectorConfigurationToJSON,
    PaymentConnectorConfigurationToJSONTyped,
} from './PaymentConnectorConfiguration';
import type { InvoiceProcessor } from './InvoiceProcessor';
import {
    InvoiceProcessorFromJSON,
    InvoiceProcessorFromJSONTyped,
    InvoiceProcessorToJSON,
    InvoiceProcessorToJSONTyped,
} from './InvoiceProcessor';
import type { InvoiceReimbursementState } from './InvoiceReimbursementState';
import {
    InvoiceReimbursementStateFromJSON,
    InvoiceReimbursementStateFromJSONTyped,
    InvoiceReimbursementStateToJSON,
    InvoiceReimbursementStateToJSONTyped,
} from './InvoiceReimbursementState';
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
 * @interface InvoiceReimbursement
 */
export interface InvoiceReimbursement {
    /**
     * 
     * @type {Date}
     * @memberof InvoiceReimbursement
     */
    readonly discardedOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly amount?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientGivenName?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientIban?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientOrganizationName?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientStreet?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly discardedBy?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly senderIban?: string;
    /**
     * 
     * @type {InvoiceProcessor}
     * @memberof InvoiceReimbursement
     */
    source?: InvoiceProcessor;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof InvoiceReimbursement
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof InvoiceReimbursement
     */
    environment?: ChargeAttemptEnvironment;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientFamilyName?: string;
    /**
     * 
     * @type {Date}
     * @memberof InvoiceReimbursement
     */
    readonly processedOn?: Date;
    /**
     * 
     * @type {PaymentConnectorConfiguration}
     * @memberof InvoiceReimbursement
     */
    paymentConnectorConfiguration?: PaymentConnectorConfiguration;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientPostcode?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly currency?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientCountry?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly id?: number;
    /**
     * 
     * @type {InvoiceReimbursementState}
     * @memberof InvoiceReimbursement
     */
    state?: InvoiceReimbursementState;
    /**
     * 
     * @type {number}
     * @memberof InvoiceReimbursement
     */
    readonly processedBy?: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceReimbursement
     */
    readonly recipientCity?: string;
    /**
     * 
     * @type {PaymentInitiationAdviceFile}
     * @memberof InvoiceReimbursement
     */
    paymentInitiationAdviceFile?: PaymentInitiationAdviceFile;
}



/**
 * Check if a given object implements the InvoiceReimbursement interface.
 */
export function instanceOfInvoiceReimbursement(value: object): value is InvoiceReimbursement {
    return true;
}

export function InvoiceReimbursementFromJSON(json: any): InvoiceReimbursement {
    return InvoiceReimbursementFromJSONTyped(json, false);
}

export function InvoiceReimbursementFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceReimbursement {
    if (json == null) {
        return json;
    }
    return {
        
        'discardedOn': json['discardedOn'] == null ? undefined : (new Date(json['discardedOn'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'recipientGivenName': json['recipientGivenName'] == null ? undefined : json['recipientGivenName'],
        'recipientIban': json['recipientIban'] == null ? undefined : json['recipientIban'],
        'recipientOrganizationName': json['recipientOrganizationName'] == null ? undefined : json['recipientOrganizationName'],
        'recipientStreet': json['recipientStreet'] == null ? undefined : json['recipientStreet'],
        'discardedBy': json['discardedBy'] == null ? undefined : json['discardedBy'],
        'senderIban': json['senderIban'] == null ? undefined : json['senderIban'],
        'source': json['source'] == null ? undefined : InvoiceProcessorFromJSON(json['source']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['environment']),
        'recipientFamilyName': json['recipientFamilyName'] == null ? undefined : json['recipientFamilyName'],
        'processedOn': json['processedOn'] == null ? undefined : (new Date(json['processedOn'])),
        'paymentConnectorConfiguration': json['paymentConnectorConfiguration'] == null ? undefined : PaymentConnectorConfigurationFromJSON(json['paymentConnectorConfiguration']),
        'recipientPostcode': json['recipientPostcode'] == null ? undefined : json['recipientPostcode'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'recipientCountry': json['recipientCountry'] == null ? undefined : json['recipientCountry'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : InvoiceReimbursementStateFromJSON(json['state']),
        'processedBy': json['processedBy'] == null ? undefined : json['processedBy'],
        'recipientCity': json['recipientCity'] == null ? undefined : json['recipientCity'],
        'paymentInitiationAdviceFile': json['paymentInitiationAdviceFile'] == null ? undefined : PaymentInitiationAdviceFileFromJSON(json['paymentInitiationAdviceFile']),
    };
}

export function InvoiceReimbursementToJSON(json: any): InvoiceReimbursement {
    return InvoiceReimbursementToJSONTyped(json, false);
}

export function InvoiceReimbursementToJSONTyped(value?: Omit<InvoiceReimbursement, 'discardedOn'|'amount'|'recipientGivenName'|'recipientIban'|'recipientOrganizationName'|'recipientStreet'|'discardedBy'|'senderIban'|'createdOn'|'version'|'linkedSpaceId'|'recipientFamilyName'|'processedOn'|'recipientPostcode'|'currency'|'recipientCountry'|'id'|'processedBy'|'recipientCity'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': InvoiceProcessorToJSON(value['source']),
        'environment': ChargeAttemptEnvironmentToJSON(value['environment']),
        'paymentConnectorConfiguration': PaymentConnectorConfigurationToJSON(value['paymentConnectorConfiguration']),
        'state': InvoiceReimbursementStateToJSON(value['state']),
        'paymentInitiationAdviceFile': PaymentInitiationAdviceFileToJSON(value['paymentInitiationAdviceFile']),
    };
}

