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
import type { Condition } from './Condition';
import {
    ConditionFromJSON,
    ConditionFromJSONTyped,
    ConditionToJSON,
} from './Condition';
import type { SalesChannel } from './SalesChannel';
import {
    SalesChannelFromJSON,
    SalesChannelFromJSONTyped,
    SalesChannelToJSON,
} from './SalesChannel';
import type { PaymentConnector } from './PaymentConnector';
import {
    PaymentConnectorFromJSON,
    PaymentConnectorFromJSONTyped,
    PaymentConnectorToJSON,
} from './PaymentConnector';
import type { PaymentProcessorConfiguration } from './PaymentProcessorConfiguration';
import {
    PaymentProcessorConfigurationFromJSON,
    PaymentProcessorConfigurationFromJSONTyped,
    PaymentProcessorConfigurationToJSON,
} from './PaymentProcessorConfiguration';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { PaymentMethodConfiguration } from './PaymentMethodConfiguration';
import {
    PaymentMethodConfigurationFromJSON,
    PaymentMethodConfigurationFromJSONTyped,
    PaymentMethodConfigurationToJSON,
} from './PaymentMethodConfiguration';

/**
 * 
 * @export
 * @interface PaymentConnectorConfiguration
 */
export interface PaymentConnectorConfiguration {
    /**
     * 
     * @type {PaymentMethodConfiguration}
     * @memberof PaymentConnectorConfiguration
     */
    paymentMethodConfiguration?: PaymentMethodConfiguration;
    /**
     * The URL to the connector's image.
     * @type {string}
     * @memberof PaymentConnectorConfiguration
     */
    readonly imagePath?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentConnectorConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The priority that determines the order in which connector configurations are taken into account when processing a payment. Low values are considered first.
     * @type {number}
     * @memberof PaymentConnectorConfiguration
     */
    readonly priority?: number;
    /**
     * The sales channels for which the connector configuration is enabled. If empty, it is enabled for all sales channels.
     * @type {Set<SalesChannel>}
     * @memberof PaymentConnectorConfiguration
     */
    readonly enabledSalesChannels?: Set<SalesChannel>;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentConnectorConfiguration
     */
    readonly version?: number;
    /**
     * 
     * @type {PaymentProcessorConfiguration}
     * @memberof PaymentConnectorConfiguration
     */
    processorConfiguration?: PaymentProcessorConfiguration;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentConnectorConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {PaymentConnector}
     * @memberof PaymentConnectorConfiguration
     */
    connector?: PaymentConnector;
    /**
     * The name used to identify the connector configuration.
     * @type {string}
     * @memberof PaymentConnectorConfiguration
     */
    readonly name?: string;
    /**
     * The space views for which the connector configuration is enabled. If empty, it is enabled for all space views.
     * @type {Set<number>}
     * @memberof PaymentConnectorConfiguration
     */
    readonly enabledSpaceViews?: Set<number>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentConnectorConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentConnectorConfiguration
     */
    state?: CreationEntityState;
    /**
     * Whether this connector configuration is enabled for processing payments, taking into account the state of the processor and payment method configurations.
     * @type {boolean}
     * @memberof PaymentConnectorConfiguration
     */
    readonly applicableForTransactionProcessing?: boolean;
    /**
     * Conditions allow to define criteria that a transaction must fulfill in order for the connector configuration to be considered for processing the payment.
     * @type {Array<Condition>}
     * @memberof PaymentConnectorConfiguration
     */
    readonly conditions?: Array<Condition>;
}

/**
 * Check if a given object implements the PaymentConnectorConfiguration interface.
 */
export function instanceOfPaymentConnectorConfiguration(value: object): value is PaymentConnectorConfiguration {
    return true;
}

export function PaymentConnectorConfigurationFromJSON(json: any): PaymentConnectorConfiguration {
    return PaymentConnectorConfigurationFromJSONTyped(json, false);
}

export function PaymentConnectorConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConnectorConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'paymentMethodConfiguration': json['paymentMethodConfiguration'] == null ? undefined : PaymentMethodConfigurationFromJSON(json['paymentMethodConfiguration']),
        'imagePath': json['imagePath'] == null ? undefined : json['imagePath'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'enabledSalesChannels': json['enabledSalesChannels'] == null ? undefined : (new Set((json['enabledSalesChannels'] as Array<any>).map(SalesChannelFromJSON))),
        'version': json['version'] == null ? undefined : json['version'],
        'processorConfiguration': json['processorConfiguration'] == null ? undefined : PaymentProcessorConfigurationFromJSON(json['processorConfiguration']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'connector': json['connector'] == null ? undefined : PaymentConnectorFromJSON(json['connector']),
        'name': json['name'] == null ? undefined : json['name'],
        'enabledSpaceViews': json['enabledSpaceViews'] == null ? undefined : json['enabledSpaceViews'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'applicableForTransactionProcessing': json['applicableForTransactionProcessing'] == null ? undefined : json['applicableForTransactionProcessing'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(ConditionFromJSON)),
    };
}

export function PaymentConnectorConfigurationToJSON(value?: Omit<PaymentConnectorConfiguration, 'imagePath'|'plannedPurgeDate'|'priority'|'enabledSalesChannels'|'version'|'linkedSpaceId'|'name'|'enabledSpaceViews'|'id'|'applicableForTransactionProcessing'|'conditions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'paymentMethodConfiguration': PaymentMethodConfigurationToJSON(value['paymentMethodConfiguration']),
        'processorConfiguration': PaymentProcessorConfigurationToJSON(value['processorConfiguration']),
        'connector': PaymentConnectorToJSON(value['connector']),
        'state': CreationEntityStateToJSON(value['state']),
    };
}

