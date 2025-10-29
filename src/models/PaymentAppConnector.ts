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
import type { PaymentAppProcessor } from './PaymentAppProcessor';
import {
    PaymentAppProcessorFromJSON,
    PaymentAppProcessorFromJSONTyped,
    PaymentAppProcessorToJSON,
} from './PaymentAppProcessor';
import type { PaymentConnectorConfiguration } from './PaymentConnectorConfiguration';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationFromJSONTyped,
    PaymentConnectorConfigurationToJSON,
} from './PaymentConnectorConfiguration';
import type { PaymentAppConnectorState } from './PaymentAppConnectorState';
import {
    PaymentAppConnectorStateFromJSON,
    PaymentAppConnectorStateFromJSONTyped,
    PaymentAppConnectorStateToJSON,
} from './PaymentAppConnectorState';
import type { PaymentAppCompletionConfiguration } from './PaymentAppCompletionConfiguration';
import {
    PaymentAppCompletionConfigurationFromJSON,
    PaymentAppCompletionConfigurationFromJSONTyped,
    PaymentAppCompletionConfigurationToJSON,
} from './PaymentAppCompletionConfiguration';
import type { PaymentAppRefundConfiguration } from './PaymentAppRefundConfiguration';
import {
    PaymentAppRefundConfigurationFromJSON,
    PaymentAppRefundConfigurationFromJSONTyped,
    PaymentAppRefundConfigurationToJSON,
} from './PaymentAppRefundConfiguration';

/**
 * 
 * @export
 * @interface PaymentAppConnector
 */
export interface PaymentAppConnector {
    /**
     * The URL where the user is redirected to process a payment. This endpoint is provided by the external service provider.
     * @type {string}
     * @memberof PaymentAppConnector
     */
    readonly paymentPageEndpoint?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentAppConnector
     */
    readonly externalId?: string;
    /**
     * The date and time when the connector was last updated.
     * @type {Date}
     * @memberof PaymentAppConnector
     */
    readonly updatedOn?: Date;
    /**
     * 
     * @type {PaymentAppCompletionConfiguration}
     * @memberof PaymentAppConnector
     */
    completionConfiguration?: PaymentAppCompletionConfiguration;
    /**
     * The date and time when the connector was created.
     * @type {Date}
     * @memberof PaymentAppConnector
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {PaymentAppProcessor}
     * @memberof PaymentAppConnector
     */
    processor?: PaymentAppProcessor;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentAppConnector
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentAppConnector
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {PaymentConnectorConfiguration}
     * @memberof PaymentAppConnector
     */
    connectorConfiguration?: PaymentConnectorConfiguration;
    /**
     * The duration within which the authorization process for a payment should complete.
     * @type {string}
     * @memberof PaymentAppConnector
     */
    readonly authorizationTimeout?: string;
    /**
     * The name used to identify the connector.
     * @type {string}
     * @memberof PaymentAppConnector
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentAppConnector
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentAppConnectorState}
     * @memberof PaymentAppConnector
     */
    state?: PaymentAppConnectorState;
    /**
     * 
     * @type {PaymentAppRefundConfiguration}
     * @memberof PaymentAppConnector
     */
    refundConfiguration?: PaymentAppRefundConfiguration;
}

/**
 * Check if a given object implements the PaymentAppConnector interface.
 */
export function instanceOfPaymentAppConnector(value: object): value is PaymentAppConnector {
    return true;
}

export function PaymentAppConnectorFromJSON(json: any): PaymentAppConnector {
    return PaymentAppConnectorFromJSONTyped(json, false);
}

export function PaymentAppConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppConnector {
    if (json == null) {
        return json;
    }
    return {
        
        'paymentPageEndpoint': json['paymentPageEndpoint'] == null ? undefined : json['paymentPageEndpoint'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'updatedOn': json['updatedOn'] == null ? undefined : (new Date(json['updatedOn'])),
        'completionConfiguration': json['completionConfiguration'] == null ? undefined : PaymentAppCompletionConfigurationFromJSON(json['completionConfiguration']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'processor': json['processor'] == null ? undefined : PaymentAppProcessorFromJSON(json['processor']),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'connectorConfiguration': json['connectorConfiguration'] == null ? undefined : PaymentConnectorConfigurationFromJSON(json['connectorConfiguration']),
        'authorizationTimeout': json['authorizationTimeout'] == null ? undefined : json['authorizationTimeout'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentAppConnectorStateFromJSON(json['state']),
        'refundConfiguration': json['refundConfiguration'] == null ? undefined : PaymentAppRefundConfigurationFromJSON(json['refundConfiguration']),
    };
}

export function PaymentAppConnectorToJSON(value?: Omit<PaymentAppConnector, 'paymentPageEndpoint'|'externalId'|'updatedOn'|'createdOn'|'version'|'linkedSpaceId'|'authorizationTimeout'|'name'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'completionConfiguration': PaymentAppCompletionConfigurationToJSON(value['completionConfiguration']),
        'processor': PaymentAppProcessorToJSON(value['processor']),
        'connectorConfiguration': PaymentConnectorConfigurationToJSON(value['connectorConfiguration']),
        'state': PaymentAppConnectorStateToJSON(value['state']),
        'refundConfiguration': PaymentAppRefundConfigurationToJSON(value['refundConfiguration']),
    };
}

