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
import type { CustomersPresence } from './CustomersPresence';
import {
    CustomersPresenceFromJSON,
    CustomersPresenceFromJSONTyped,
    CustomersPresenceToJSON,
    CustomersPresenceToJSONTyped,
} from './CustomersPresence';
import type { PaymentConnectorConfiguration } from './PaymentConnectorConfiguration';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationFromJSONTyped,
    PaymentConnectorConfigurationToJSON,
    PaymentConnectorConfigurationToJSONTyped,
} from './PaymentConnectorConfiguration';
import type { WalletType } from './WalletType';
import {
    WalletTypeFromJSON,
    WalletTypeFromJSONTyped,
    WalletTypeToJSON,
    WalletTypeToJSONTyped,
} from './WalletType';
import type { ChargeAttemptState } from './ChargeAttemptState';
import {
    ChargeAttemptStateFromJSON,
    ChargeAttemptStateFromJSONTyped,
    ChargeAttemptStateToJSON,
    ChargeAttemptStateToJSONTyped,
} from './ChargeAttemptState';
import type { ConnectorInvocation } from './ConnectorInvocation';
import {
    ConnectorInvocationFromJSON,
    ConnectorInvocationFromJSONTyped,
    ConnectorInvocationToJSON,
    ConnectorInvocationToJSONTyped,
} from './ConnectorInvocation';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
    FailureReasonToJSONTyped,
} from './FailureReason';
import type { TransactionCompletionBehavior } from './TransactionCompletionBehavior';
import {
    TransactionCompletionBehaviorFromJSON,
    TransactionCompletionBehaviorFromJSONTyped,
    TransactionCompletionBehaviorToJSON,
    TransactionCompletionBehaviorToJSONTyped,
} from './TransactionCompletionBehavior';
import type { Charge } from './Charge';
import {
    ChargeFromJSON,
    ChargeFromJSONTyped,
    ChargeToJSON,
    ChargeToJSONTyped,
} from './Charge';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label';
import type { PaymentTerminal } from './PaymentTerminal';
import {
    PaymentTerminalFromJSON,
    PaymentTerminalFromJSONTyped,
    PaymentTerminalToJSON,
    PaymentTerminalToJSONTyped,
} from './PaymentTerminal';
import type { TokenVersion } from './TokenVersion';
import {
    TokenVersionFromJSON,
    TokenVersionFromJSONTyped,
    TokenVersionToJSON,
    TokenVersionToJSONTyped,
} from './TokenVersion';
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
 * @interface ChargeAttemptProjection
 */
export interface ChargeAttemptProjection {
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof ChargeAttemptProjection
     */
    readonly language?: string;
    /**
     * The sales channel through which the charge attempt was made.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly salesChannel?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly createdOn?: Date;
    /**
     * Whether a new token version is being initialized.
     * @type {boolean}
     * @memberof ChargeAttemptProjection
     */
    readonly initializingTokenVersion?: boolean;
    /**
     * 
     * @type {TokenVersion}
     * @memberof ChargeAttemptProjection
     */
    tokenVersion?: TokenVersion;
    /**
     * The date and time when the charge attempt succeeded.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly id?: number;
    /**
     * 
     * @type {ChargeAttemptState}
     * @memberof ChargeAttemptProjection
     */
    state?: ChargeAttemptState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly linkedTransaction?: number;
    /**
     * The URL to redirect the customer to after payment processing.
     * @type {string}
     * @memberof ChargeAttemptProjection
     */
    readonly redirectionUrl?: string;
    /**
     * 
     * @type {Charge}
     * @memberof ChargeAttemptProjection
     */
    charge?: Charge;
    /**
     * 
     * @type {WalletType}
     * @memberof ChargeAttemptProjection
     */
    wallet?: WalletType;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The time zone that this object is associated with.
     * @type {string}
     * @memberof ChargeAttemptProjection
     */
    readonly timeZone?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly spaceViewId?: number;
    /**
     * 
     * @type {PaymentTerminal}
     * @memberof ChargeAttemptProjection
     */
    terminal?: PaymentTerminal;
    /**
     * The message that can be displayed to the customer explaining why the charge attempt failed, in the customer's language.
     * @type {string}
     * @memberof ChargeAttemptProjection
     */
    readonly userFailureMessage?: string;
    /**
     * 
     * @type {TransactionCompletionBehavior}
     * @memberof ChargeAttemptProjection
     */
    completionBehavior?: TransactionCompletionBehavior;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof ChargeAttemptProjection
     */
    readonly labels?: Set<Label>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ChargeAttemptProjection
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the object will expire.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly timeoutOn?: Date;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof ChargeAttemptProjection
     */
    environment?: ChargeAttemptEnvironment;
    /**
     * 
     * @type {ConnectorInvocation}
     * @memberof ChargeAttemptProjection
     */
    invocation?: ConnectorInvocation;
    /**
     * 
     * @type {PaymentConnectorConfiguration}
     * @memberof ChargeAttemptProjection
     */
    connectorConfiguration?: PaymentConnectorConfiguration;
    /**
     * The date and time when the next update of the object's state is planned.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly nextUpdateOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof ChargeAttemptProjection
     */
    failureReason?: FailureReason;
    /**
     * 
     * @type {CustomersPresence}
     * @memberof ChargeAttemptProjection
     */
    customersPresence?: CustomersPresence;
    /**
     * The date and time when the charge attempt failed.
     * @type {Date}
     * @memberof ChargeAttemptProjection
     */
    readonly failedOn?: Date;
}



/**
 * Check if a given object implements the ChargeAttemptProjection interface.
 */
export function instanceOfChargeAttemptProjection(value: object): value is ChargeAttemptProjection {
    return true;
}

export function ChargeAttemptProjectionFromJSON(json: any): ChargeAttemptProjection {
    return ChargeAttemptProjectionFromJSONTyped(json, false);
}

export function ChargeAttemptProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeAttemptProjection {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : json['language'],
        'salesChannel': json['salesChannel'] == null ? undefined : json['salesChannel'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'initializingTokenVersion': json['initializingTokenVersion'] == null ? undefined : json['initializingTokenVersion'],
        'tokenVersion': json['tokenVersion'] == null ? undefined : TokenVersionFromJSON(json['tokenVersion']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ChargeAttemptStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'redirectionUrl': json['redirectionUrl'] == null ? undefined : json['redirectionUrl'],
        'charge': json['charge'] == null ? undefined : ChargeFromJSON(json['charge']),
        'wallet': json['wallet'] == null ? undefined : WalletTypeFromJSON(json['wallet']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'terminal': json['terminal'] == null ? undefined : PaymentTerminalFromJSON(json['terminal']),
        'userFailureMessage': json['userFailureMessage'] == null ? undefined : json['userFailureMessage'],
        'completionBehavior': json['completionBehavior'] == null ? undefined : TransactionCompletionBehaviorFromJSON(json['completionBehavior']),
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'environment': json['environment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['environment']),
        'invocation': json['invocation'] == null ? undefined : ConnectorInvocationFromJSON(json['invocation']),
        'connectorConfiguration': json['connectorConfiguration'] == null ? undefined : PaymentConnectorConfigurationFromJSON(json['connectorConfiguration']),
        'nextUpdateOn': json['nextUpdateOn'] == null ? undefined : (new Date(json['nextUpdateOn'])),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'customersPresence': json['customersPresence'] == null ? undefined : CustomersPresenceFromJSON(json['customersPresence']),
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
    };
}

export function ChargeAttemptProjectionToJSON(json: any): ChargeAttemptProjection {
    return ChargeAttemptProjectionToJSONTyped(json, false);
}

export function ChargeAttemptProjectionToJSONTyped(value?: Omit<ChargeAttemptProjection, 'language'|'salesChannel'|'createdOn'|'initializingTokenVersion'|'succeededOn'|'id'|'linkedTransaction'|'redirectionUrl'|'plannedPurgeDate'|'timeZone'|'spaceViewId'|'userFailureMessage'|'version'|'labels'|'linkedSpaceId'|'timeoutOn'|'nextUpdateOn'|'failedOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tokenVersion': TokenVersionToJSON(value['tokenVersion']),
        'state': ChargeAttemptStateToJSON(value['state']),
        'charge': ChargeToJSON(value['charge']),
        'wallet': WalletTypeToJSON(value['wallet']),
        'terminal': PaymentTerminalToJSON(value['terminal']),
        'completionBehavior': TransactionCompletionBehaviorToJSON(value['completionBehavior']),
        'environment': ChargeAttemptEnvironmentToJSON(value['environment']),
        'invocation': ConnectorInvocationToJSON(value['invocation']),
        'connectorConfiguration': PaymentConnectorConfigurationToJSON(value['connectorConfiguration']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'customersPresence': CustomersPresenceToJSON(value['customersPresence']),
    };
}

