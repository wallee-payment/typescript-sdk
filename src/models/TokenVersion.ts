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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { PaymentConnectorConfiguration } from './PaymentConnectorConfiguration';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationFromJSONTyped,
    PaymentConnectorConfigurationToJSON,
} from './PaymentConnectorConfiguration';
import type { PaymentInformationHash } from './PaymentInformationHash';
import {
    PaymentInformationHashFromJSON,
    PaymentInformationHashFromJSONTyped,
    PaymentInformationHashToJSON,
} from './PaymentInformationHash';
import type { TokenVersionState } from './TokenVersionState';
import {
    TokenVersionStateFromJSON,
    TokenVersionStateFromJSONTyped,
    TokenVersionStateToJSON,
} from './TokenVersionState';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
} from './Label';
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
} from './PaymentMethod';
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './Token';
import type { PaymentMethodBrand } from './PaymentMethodBrand';
import {
    PaymentMethodBrandFromJSON,
    PaymentMethodBrandFromJSONTyped,
    PaymentMethodBrandToJSON,
} from './PaymentMethodBrand';
import type { ChargeAttemptEnvironment } from './ChargeAttemptEnvironment';
import {
    ChargeAttemptEnvironmentFromJSON,
    ChargeAttemptEnvironmentFromJSONTyped,
    ChargeAttemptEnvironmentToJSON,
} from './ChargeAttemptEnvironment';
import type { TokenVersionRetryStrategy } from './TokenVersionRetryStrategy';
import {
    TokenVersionRetryStrategyFromJSON,
    TokenVersionRetryStrategyFromJSONTyped,
    TokenVersionRetryStrategyToJSON,
} from './TokenVersionRetryStrategy';
import type { TokenVersionType } from './TokenVersionType';
import {
    TokenVersionTypeFromJSON,
    TokenVersionTypeFromJSONTyped,
    TokenVersionTypeToJSON,
} from './TokenVersionType';

/**
 * 
 * @export
 * @interface TokenVersion
 */
export interface TokenVersion {
    /**
     * The hashed payment information that the token version represents.
     * @type {Set<PaymentInformationHash>}
     * @memberof TokenVersion
     */
    readonly paymentInformationHashes?: Set<PaymentInformationHash>;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TokenVersion
     */
    readonly language?: string;
    /**
     * 
     * @type {TokenVersionType}
     * @memberof TokenVersion
     */
    type?: TokenVersionType;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly createdOn?: Date;
    /**
     * Retry interval when the strategy advises retrying later.
     * @type {string}
     * @memberof TokenVersion
     */
    readonly retryIn?: string;
    /**
     * 
     * @type {PaymentConnectorConfiguration}
     * @memberof TokenVersion
     */
    paymentConnectorConfiguration?: PaymentConnectorConfiguration;
    /**
     * The date and time when the token version was marked obsolete.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly obsoletedOn?: Date;
    /**
     * The date and time when the token version is set to expire, after which it will be marked as obsolete.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly expiresOn?: Date;
    /**
     * The URL to the token's icon displayed to the customer.
     * @type {string}
     * @memberof TokenVersion
     */
    readonly iconUrl?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TokenVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {TokenVersionState}
     * @memberof TokenVersion
     */
    state?: TokenVersionState;
    /**
     * The token name as specified by the processor.
     * @type {string}
     * @memberof TokenVersion
     */
    readonly processorToken?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {PaymentMethodBrand}
     * @memberof TokenVersion
     */
    paymentMethodBrand?: PaymentMethodBrand;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TokenVersion
     */
    readonly version?: number;
    /**
     * The date and time when the system last attempted a retry for this token version.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly lastRetriedOn?: Date;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof TokenVersion
     */
    readonly labels?: Set<Label>;
    /**
     * 
     * @type {Token}
     * @memberof TokenVersion
     */
    token?: Token;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TokenVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof TokenVersion
     */
    environment?: ChargeAttemptEnvironment;
    /**
     * The date and time when the token version was activated.
     * @type {Date}
     * @memberof TokenVersion
     */
    readonly activatedOn?: Date;
    /**
     * The name used to identify the token.
     * @type {string}
     * @memberof TokenVersion
     */
    readonly name?: string;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof TokenVersion
     */
    paymentMethod?: PaymentMethod;
    /**
     * 
     * @type {Address}
     * @memberof TokenVersion
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof TokenVersion
     */
    billingAddress?: Address;
    /**
     * 
     * @type {TokenVersionRetryStrategy}
     * @memberof TokenVersion
     */
    retryStrategy?: TokenVersionRetryStrategy;
}

/**
 * Check if a given object implements the TokenVersion interface.
 */
export function instanceOfTokenVersion(value: object): value is TokenVersion {
    return true;
}

export function TokenVersionFromJSON(json: any): TokenVersion {
    return TokenVersionFromJSONTyped(json, false);
}

export function TokenVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'paymentInformationHashes': json['paymentInformationHashes'] == null ? undefined : (new Set((json['paymentInformationHashes'] as Array<any>).map(PaymentInformationHashFromJSON))),
        'language': json['language'] == null ? undefined : json['language'],
        'type': json['type'] == null ? undefined : TokenVersionTypeFromJSON(json['type']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'retryIn': json['retryIn'] == null ? undefined : json['retryIn'],
        'paymentConnectorConfiguration': json['paymentConnectorConfiguration'] == null ? undefined : PaymentConnectorConfigurationFromJSON(json['paymentConnectorConfiguration']),
        'obsoletedOn': json['obsoletedOn'] == null ? undefined : (new Date(json['obsoletedOn'])),
        'expiresOn': json['expiresOn'] == null ? undefined : (new Date(json['expiresOn'])),
        'iconUrl': json['iconUrl'] == null ? undefined : json['iconUrl'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TokenVersionStateFromJSON(json['state']),
        'processorToken': json['processorToken'] == null ? undefined : json['processorToken'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'paymentMethodBrand': json['paymentMethodBrand'] == null ? undefined : PaymentMethodBrandFromJSON(json['paymentMethodBrand']),
        'version': json['version'] == null ? undefined : json['version'],
        'lastRetriedOn': json['lastRetriedOn'] == null ? undefined : (new Date(json['lastRetriedOn'])),
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'token': json['token'] == null ? undefined : TokenFromJSON(json['token']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['environment']),
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'name': json['name'] == null ? undefined : json['name'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : PaymentMethodFromJSON(json['paymentMethod']),
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressFromJSON(json['shippingAddress']),
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'retryStrategy': json['retryStrategy'] == null ? undefined : TokenVersionRetryStrategyFromJSON(json['retryStrategy']),
    };
}

export function TokenVersionToJSON(value?: Omit<TokenVersion, 'paymentInformationHashes'|'language'|'createdOn'|'retryIn'|'obsoletedOn'|'expiresOn'|'iconUrl'|'id'|'processorToken'|'plannedPurgeDate'|'version'|'lastRetriedOn'|'labels'|'linkedSpaceId'|'activatedOn'|'name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': TokenVersionTypeToJSON(value['type']),
        'paymentConnectorConfiguration': PaymentConnectorConfigurationToJSON(value['paymentConnectorConfiguration']),
        'state': TokenVersionStateToJSON(value['state']),
        'paymentMethodBrand': PaymentMethodBrandToJSON(value['paymentMethodBrand']),
        'token': TokenToJSON(value['token']),
        'environment': ChargeAttemptEnvironmentToJSON(value['environment']),
        'paymentMethod': PaymentMethodToJSON(value['paymentMethod']),
        'shippingAddress': AddressToJSON(value['shippingAddress']),
        'billingAddress': AddressToJSON(value['billingAddress']),
        'retryStrategy': TokenVersionRetryStrategyToJSON(value['retryStrategy']),
    };
}

