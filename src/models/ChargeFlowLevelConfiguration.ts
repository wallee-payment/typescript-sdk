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
import type { ChargeFlow } from './ChargeFlow';
import {
    ChargeFlowFromJSON,
    ChargeFlowFromJSONTyped,
    ChargeFlowToJSON,
    ChargeFlowToJSONTyped,
} from './ChargeFlow';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface ChargeFlowLevelConfiguration
 */
export interface ChargeFlowLevelConfiguration {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * The duration specifies how long the level remains active before transitioning to the next one.
     * @type {string}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly period?: string;
    /**
     * The name used to identify the charge flow level configuration.
     * @type {string}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ChargeFlowLevelConfiguration
     */
    state?: CreationEntityState;
    /**
     * The priority that determines the order in which level configurations are taken into account when processing a charge flow. Low values are considered first.
     * @type {number}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly priority?: number;
    /**
     * The type defines the method of delivering the payment link to the customer.
     * @type {number}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly type?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ChargeFlowLevelConfiguration
     */
    readonly version?: number;
    /**
     * 
     * @type {ChargeFlow}
     * @memberof ChargeFlowLevelConfiguration
     */
    flow?: ChargeFlow;
}



/**
 * Check if a given object implements the ChargeFlowLevelConfiguration interface.
 */
export function instanceOfChargeFlowLevelConfiguration(value: object): value is ChargeFlowLevelConfiguration {
    return true;
}

export function ChargeFlowLevelConfigurationFromJSON(json: any): ChargeFlowLevelConfiguration {
    return ChargeFlowLevelConfigurationFromJSONTyped(json, false);
}

export function ChargeFlowLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowLevelConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'period': json['period'] == null ? undefined : json['period'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
        'flow': json['flow'] == null ? undefined : ChargeFlowFromJSON(json['flow']),
    };
}

export function ChargeFlowLevelConfigurationToJSON(json: any): ChargeFlowLevelConfiguration {
    return ChargeFlowLevelConfigurationToJSONTyped(json, false);
}

export function ChargeFlowLevelConfigurationToJSONTyped(value?: Omit<ChargeFlowLevelConfiguration, 'linkedSpaceId'|'period'|'name'|'plannedPurgeDate'|'id'|'priority'|'type'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'flow': ChargeFlowToJSON(value['flow']),
    };
}

