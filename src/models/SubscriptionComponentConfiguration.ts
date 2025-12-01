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
/**
 * 
 * @export
 * @interface SubscriptionComponentConfiguration
 */
export interface SubscriptionComponentConfiguration {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionComponentConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * The component that is being configured.
     * @type {number}
     * @memberof SubscriptionComponentConfiguration
     */
    readonly component?: number;
    /**
     * The quantity that should be applied to the component.
     * @type {number}
     * @memberof SubscriptionComponentConfiguration
     */
    readonly quantity?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionComponentConfiguration
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionComponentConfiguration
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionComponentConfiguration interface.
 */
export function instanceOfSubscriptionComponentConfiguration(value: object): value is SubscriptionComponentConfiguration {
    return true;
}

export function SubscriptionComponentConfigurationFromJSON(json: any): SubscriptionComponentConfiguration {
    return SubscriptionComponentConfigurationFromJSONTyped(json, false);
}

export function SubscriptionComponentConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionComponentConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'component': json['component'] == null ? undefined : json['component'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionComponentConfigurationToJSON(json: any): SubscriptionComponentConfiguration {
    return SubscriptionComponentConfigurationToJSONTyped(json, false);
}

export function SubscriptionComponentConfigurationToJSONTyped(value?: Omit<SubscriptionComponentConfiguration, 'linkedSpaceId'|'component'|'quantity'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

