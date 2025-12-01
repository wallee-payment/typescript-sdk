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
import type { DebtCollector } from './DebtCollector';
import {
    DebtCollectorFromJSON,
    DebtCollectorFromJSONTyped,
    DebtCollectorToJSON,
    DebtCollectorToJSONTyped,
} from './DebtCollector';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';
import type { DebtCollectorCondition } from './DebtCollectorCondition';
import {
    DebtCollectorConditionFromJSON,
    DebtCollectorConditionFromJSONTyped,
    DebtCollectorConditionToJSON,
    DebtCollectorConditionToJSONTyped,
} from './DebtCollectorCondition';

/**
 * The debt collector configuration defines the behavior of the collection process for a particular collector.
 * @export
 * @interface DebtCollectorConfiguration
 */
export interface DebtCollectorConfiguration {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DebtCollectorConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the review of debt collection cases is skipped.
     * @type {boolean}
     * @memberof DebtCollectorConfiguration
     */
    readonly skipReviewEnabled?: boolean;
    /**
     * The name used to identify the debt collector configuration.
     * @type {string}
     * @memberof DebtCollectorConfiguration
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DebtCollectorConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The space views for which the debt collector configuration is enabled. If empty, it is enabled for all space views.
     * @type {Set<number>}
     * @memberof DebtCollectorConfiguration
     */
    readonly enabledSpaceViews?: Set<number>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectorConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DebtCollectorConfiguration
     */
    state?: CreationEntityState;
    /**
     * Conditions allow to define criteria that a debt collection case must fulfill in order for the debt collector configuration to be considered for processing the case.
     * @type {Array<DebtCollectorCondition>}
     * @memberof DebtCollectorConfiguration
     */
    readonly conditions?: Array<DebtCollectorCondition>;
    /**
     * The priority that determines the order in which debt collector configurations are taken into account when processing a case. Low values are considered first.
     * @type {number}
     * @memberof DebtCollectorConfiguration
     */
    readonly priority?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DebtCollectorConfiguration
     */
    readonly version?: number;
    /**
     * 
     * @type {DebtCollector}
     * @memberof DebtCollectorConfiguration
     */
    collector?: DebtCollector;
}



/**
 * Check if a given object implements the DebtCollectorConfiguration interface.
 */
export function instanceOfDebtCollectorConfiguration(value: object): value is DebtCollectorConfiguration {
    return true;
}

export function DebtCollectorConfigurationFromJSON(json: any): DebtCollectorConfiguration {
    return DebtCollectorConfigurationFromJSONTyped(json, false);
}

export function DebtCollectorConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'skipReviewEnabled': json['skipReviewEnabled'] == null ? undefined : json['skipReviewEnabled'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'enabledSpaceViews': json['enabledSpaceViews'] == null ? undefined : new Set(json['enabledSpaceViews']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(DebtCollectorConditionFromJSON)),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'version': json['version'] == null ? undefined : json['version'],
        'collector': json['collector'] == null ? undefined : DebtCollectorFromJSON(json['collector']),
    };
}

export function DebtCollectorConfigurationToJSON(json: any): DebtCollectorConfiguration {
    return DebtCollectorConfigurationToJSONTyped(json, false);
}

export function DebtCollectorConfigurationToJSONTyped(value?: Omit<DebtCollectorConfiguration, 'linkedSpaceId'|'skipReviewEnabled'|'name'|'plannedPurgeDate'|'enabledSpaceViews'|'id'|'conditions'|'priority'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'collector': DebtCollectorToJSON(value['collector']),
    };
}

