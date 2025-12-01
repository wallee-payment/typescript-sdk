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
import type { SubscriptionChargeProcessingType } from './SubscriptionChargeProcessingType';
import {
    SubscriptionChargeProcessingTypeFromJSON,
    SubscriptionChargeProcessingTypeFromJSONTyped,
    SubscriptionChargeProcessingTypeToJSON,
    SubscriptionChargeProcessingTypeToJSONTyped,
} from './SubscriptionChargeProcessingType';

/**
 * The subscription charge represents a single charge carried out for a particular subscription.
 * @export
 * @interface SubscriptionChargeCreate
 */
export interface SubscriptionChargeCreate {
    /**
     * The merchant's reference used to identify the charge.
     * @type {string}
     * @memberof SubscriptionChargeCreate
     */
    reference?: string;
    /**
     * The date and time when the execution of the charge is planned.
     * @type {Date}
     * @memberof SubscriptionChargeCreate
     */
    plannedExecutionDate?: Date;
    /**
     * 
     * @type {SubscriptionChargeProcessingType}
     * @memberof SubscriptionChargeCreate
     */
    processingType: SubscriptionChargeProcessingType;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionChargeCreate
     */
    externalId: string;
    /**
     * The URL to redirect the customer back to after they successfully authenticated their payment.
     * @type {string}
     * @memberof SubscriptionChargeCreate
     */
    successUrl?: string;
    /**
     * The subscription that the charge belongs to.
     * @type {number}
     * @memberof SubscriptionChargeCreate
     */
    subscription: number;
    /**
     * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
     * @type {string}
     * @memberof SubscriptionChargeCreate
     */
    failedUrl?: string;
}



/**
 * Check if a given object implements the SubscriptionChargeCreate interface.
 */
export function instanceOfSubscriptionChargeCreate(value: object): value is SubscriptionChargeCreate {
    if (!('processingType' in value) || value['processingType'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    return true;
}

export function SubscriptionChargeCreateFromJSON(json: any): SubscriptionChargeCreate {
    return SubscriptionChargeCreateFromJSONTyped(json, false);
}

export function SubscriptionChargeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionChargeCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'plannedExecutionDate': json['plannedExecutionDate'] == null ? undefined : (new Date(json['plannedExecutionDate'])),
        'processingType': SubscriptionChargeProcessingTypeFromJSON(json['processingType']),
        'externalId': json['externalId'],
        'successUrl': json['successUrl'] == null ? undefined : json['successUrl'],
        'subscription': json['subscription'],
        'failedUrl': json['failedUrl'] == null ? undefined : json['failedUrl'],
    };
}

export function SubscriptionChargeCreateToJSON(json: any): SubscriptionChargeCreate {
    return SubscriptionChargeCreateToJSONTyped(json, false);
}

export function SubscriptionChargeCreateToJSONTyped(value?: SubscriptionChargeCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reference': value['reference'],
        'plannedExecutionDate': value['plannedExecutionDate'] == null ? undefined : ((value['plannedExecutionDate']).toISOString()),
        'processingType': SubscriptionChargeProcessingTypeToJSON(value['processingType']),
        'externalId': value['externalId'],
        'successUrl': value['successUrl'],
        'subscription': value['subscription'],
        'failedUrl': value['failedUrl'],
    };
}

