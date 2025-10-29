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
 * @interface SubscriptionPending
 */
export interface SubscriptionPending {
    /**
     * A description used to identify the subscription.
     * @type {string}
     * @memberof SubscriptionPending
     */
    description?: string;
    /**
     * The date and time when the subscription is planned to be terminated.
     * @type {Date}
     * @memberof SubscriptionPending
     */
    plannedTerminationDate?: Date;
    /**
     * The affiliate that led to the creation of the subscription.
     * @type {number}
     * @memberof SubscriptionPending
     */
    affiliate?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriptionPending
     */
    version: number;
    /**
     * The merchant's reference used to identify the subscription.
     * @type {string}
     * @memberof SubscriptionPending
     */
    reference?: string;
    /**
     * The subscriber that the subscription belongs to.
     * @type {number}
     * @memberof SubscriptionPending
     */
    subscriber?: number;
    /**
     * The payment token that is used to charge the customer.
     * @type {number}
     * @memberof SubscriptionPending
     */
    token?: number;
}

/**
 * Check if a given object implements the SubscriptionPending interface.
 */
export function instanceOfSubscriptionPending(value: object): value is SubscriptionPending {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriptionPendingFromJSON(json: any): SubscriptionPending {
    return SubscriptionPendingFromJSONTyped(json, false);
}

export function SubscriptionPendingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPending {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'plannedTerminationDate': json['plannedTerminationDate'] == null ? undefined : (new Date(json['plannedTerminationDate'])),
        'affiliate': json['affiliate'] == null ? undefined : json['affiliate'],
        'version': json['version'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'subscriber': json['subscriber'] == null ? undefined : json['subscriber'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function SubscriptionPendingToJSON(value?: SubscriptionPending | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'plannedTerminationDate': value['plannedTerminationDate'] == null ? undefined : ((value['plannedTerminationDate']).toISOString()),
        'affiliate': value['affiliate'],
        'version': value['version'],
        'reference': value['reference'],
        'subscriber': value['subscriber'],
        'token': value['token'],
    };
}

