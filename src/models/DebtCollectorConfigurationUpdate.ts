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
 * @interface DebtCollectorConfigurationUpdate
 */
export interface DebtCollectorConfigurationUpdate {
    /**
     * Whether the review of debt collection cases is skipped.
     * @type {boolean}
     * @memberof DebtCollectorConfigurationUpdate
     */
    skipReviewEnabled?: boolean;
    /**
     * The name used to identify the debt collector configuration.
     * @type {string}
     * @memberof DebtCollectorConfigurationUpdate
     */
    name?: string;
    /**
     * The space views for which the debt collector configuration is enabled. If empty, it is enabled for all space views.
     * @type {Set<number>}
     * @memberof DebtCollectorConfigurationUpdate
     */
    enabledSpaceViews?: Set<number>;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DebtCollectorConfigurationUpdate
     */
    state?: CreationEntityState;
    /**
     * Conditions allow to define criteria that a debt collection case must fulfill in order for the debt collector configuration to be considered for processing the case.
     * @type {Array<DebtCollectorCondition>}
     * @memberof DebtCollectorConfigurationUpdate
     */
    conditions?: Array<DebtCollectorCondition>;
    /**
     * The priority that determines the order in which debt collector configurations are taken into account when processing a case. Low values are considered first.
     * @type {number}
     * @memberof DebtCollectorConfigurationUpdate
     */
    priority?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof DebtCollectorConfigurationUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the DebtCollectorConfigurationUpdate interface.
 */
export function instanceOfDebtCollectorConfigurationUpdate(value: object): value is DebtCollectorConfigurationUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function DebtCollectorConfigurationUpdateFromJSON(json: any): DebtCollectorConfigurationUpdate {
    return DebtCollectorConfigurationUpdateFromJSONTyped(json, false);
}

export function DebtCollectorConfigurationUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorConfigurationUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'skipReviewEnabled': json['skipReviewEnabled'] == null ? undefined : json['skipReviewEnabled'],
        'name': json['name'] == null ? undefined : json['name'],
        'enabledSpaceViews': json['enabledSpaceViews'] == null ? undefined : new Set(json['enabledSpaceViews']),
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(DebtCollectorConditionFromJSON)),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'version': json['version'],
    };
}

export function DebtCollectorConfigurationUpdateToJSON(json: any): DebtCollectorConfigurationUpdate {
    return DebtCollectorConfigurationUpdateToJSONTyped(json, false);
}

export function DebtCollectorConfigurationUpdateToJSONTyped(value?: DebtCollectorConfigurationUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'skipReviewEnabled': value['skipReviewEnabled'],
        'name': value['name'],
        'enabledSpaceViews': value['enabledSpaceViews'] == null ? undefined : Array.from(value['enabledSpaceViews'] as Set<any>),
        'state': CreationEntityStateToJSON(value['state']),
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(DebtCollectorConditionToJSON)),
        'priority': value['priority'],
        'version': value['version'],
    };
}

