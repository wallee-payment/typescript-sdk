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

/**
 * 
 * @export
 * @interface PaymentConnectorConfigurationUpdate
 */
export interface PaymentConnectorConfigurationUpdate {
    /**
     * The name used to identify the connector configuration.
     * @type {string}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    name?: string;
    /**
     * The space views for which the connector configuration is enabled. If empty, it is enabled for all space views.
     * @type {Set<number>}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    enabledSpaceViews?: Set<number>;
    /**
     * Conditions allow to define criteria that a transaction must fulfill in order for the connector configuration to be considered for processing the payment.
     * @type {Array<Condition>}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    conditions?: Array<Condition>;
    /**
     * The priority that determines the order in which connector configurations are taken into account when processing a payment. Low values are considered first.
     * @type {number}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    priority?: number;
    /**
     * The sales channels for which the connector configuration is enabled. If empty, it is enabled for all sales channels.
     * @type {Set<SalesChannel>}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    enabledSalesChannels?: Set<SalesChannel>;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof PaymentConnectorConfigurationUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the PaymentConnectorConfigurationUpdate interface.
 */
export function instanceOfPaymentConnectorConfigurationUpdate(value: object): value is PaymentConnectorConfigurationUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PaymentConnectorConfigurationUpdateFromJSON(json: any): PaymentConnectorConfigurationUpdate {
    return PaymentConnectorConfigurationUpdateFromJSONTyped(json, false);
}

export function PaymentConnectorConfigurationUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConnectorConfigurationUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'enabledSpaceViews': json['enabledSpaceViews'] == null ? undefined : json['enabledSpaceViews'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(ConditionFromJSON)),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'enabledSalesChannels': json['enabledSalesChannels'] == null ? undefined : (new Set((json['enabledSalesChannels'] as Array<any>).map(SalesChannelFromJSON))),
        'version': json['version'],
    };
}

export function PaymentConnectorConfigurationUpdateToJSON(value?: PaymentConnectorConfigurationUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'enabledSpaceViews': value['enabledSpaceViews'] == null ? undefined : Array.from(value['enabledSpaceViews'] as Set<any>),
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(ConditionToJSON)),
        'priority': value['priority'],
        'enabledSalesChannels': value['enabledSalesChannels'] == null ? undefined : (Array.from(value['enabledSalesChannels'] as Set<any>).map(SalesChannelToJSON)),
        'version': value['version'],
    };
}

