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
 * @interface DebtCollectorConfigurationCreate
 */
export interface DebtCollectorConfigurationCreate {
    /**
     * Whether the review of debt collection cases is skipped.
     * @type {boolean}
     * @memberof DebtCollectorConfigurationCreate
     */
    skipReviewEnabled?: boolean;
    /**
     * The name used to identify the debt collector configuration.
     * @type {string}
     * @memberof DebtCollectorConfigurationCreate
     */
    name?: string;
    /**
     * The space views for which the debt collector configuration is enabled. If empty, it is enabled for all space views.
     * @type {Set<number>}
     * @memberof DebtCollectorConfigurationCreate
     */
    enabledSpaceViews?: Set<number>;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DebtCollectorConfigurationCreate
     */
    state?: CreationEntityState;
    /**
     * Conditions allow to define criteria that a debt collection case must fulfill in order for the debt collector configuration to be considered for processing the case.
     * @type {Array<DebtCollectorCondition>}
     * @memberof DebtCollectorConfigurationCreate
     */
    conditions?: Array<DebtCollectorCondition>;
    /**
     * The priority that determines the order in which debt collector configurations are taken into account when processing a case. Low values are considered first.
     * @type {number}
     * @memberof DebtCollectorConfigurationCreate
     */
    priority?: number;
    /**
     * The debt collector that the configuration is for.
     * @type {number}
     * @memberof DebtCollectorConfigurationCreate
     */
    collector: number;
}



/**
 * Check if a given object implements the DebtCollectorConfigurationCreate interface.
 */
export function instanceOfDebtCollectorConfigurationCreate(value: object): value is DebtCollectorConfigurationCreate {
    if (!('collector' in value) || value['collector'] === undefined) return false;
    return true;
}

export function DebtCollectorConfigurationCreateFromJSON(json: any): DebtCollectorConfigurationCreate {
    return DebtCollectorConfigurationCreateFromJSONTyped(json, false);
}

export function DebtCollectorConfigurationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorConfigurationCreate {
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
        'collector': json['collector'],
    };
}

export function DebtCollectorConfigurationCreateToJSON(json: any): DebtCollectorConfigurationCreate {
    return DebtCollectorConfigurationCreateToJSONTyped(json, false);
}

export function DebtCollectorConfigurationCreateToJSONTyped(value?: DebtCollectorConfigurationCreate | null, ignoreDiscriminator: boolean = false): any {
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
        'collector': value['collector'],
    };
}

