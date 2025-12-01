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
import type { SubscriptionSuspensionAction } from './SubscriptionSuspensionAction';
import {
    SubscriptionSuspensionActionFromJSON,
    SubscriptionSuspensionActionFromJSONTyped,
    SubscriptionSuspensionActionToJSON,
    SubscriptionSuspensionActionToJSONTyped,
} from './SubscriptionSuspensionAction';

/**
 * 
 * @export
 * @interface SuspensionCreationRequest
 */
export interface SuspensionCreationRequest {
    /**
     * A note that contains details about the suspension. It is not disclosed to the subscriber.
     * @type {string}
     * @memberof SuspensionCreationRequest
     */
    note?: string;
    /**
     * 
     * @type {SubscriptionSuspensionAction}
     * @memberof SuspensionCreationRequest
     */
    endAction?: SubscriptionSuspensionAction;
    /**
     * The date and time when the suspension is planned to end.
     * @type {Date}
     * @memberof SuspensionCreationRequest
     */
    plannedEndDate?: Date;
}



/**
 * Check if a given object implements the SuspensionCreationRequest interface.
 */
export function instanceOfSuspensionCreationRequest(value: object): value is SuspensionCreationRequest {
    return true;
}

export function SuspensionCreationRequestFromJSON(json: any): SuspensionCreationRequest {
    return SuspensionCreationRequestFromJSONTyped(json, false);
}

export function SuspensionCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuspensionCreationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'note': json['note'] == null ? undefined : json['note'],
        'endAction': json['endAction'] == null ? undefined : SubscriptionSuspensionActionFromJSON(json['endAction']),
        'plannedEndDate': json['plannedEndDate'] == null ? undefined : (new Date(json['plannedEndDate'])),
    };
}

export function SuspensionCreationRequestToJSON(json: any): SuspensionCreationRequest {
    return SuspensionCreationRequestToJSONTyped(json, false);
}

export function SuspensionCreationRequestToJSONTyped(value?: SuspensionCreationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'note': value['note'],
        'endAction': SubscriptionSuspensionActionToJSON(value['endAction']),
        'plannedEndDate': value['plannedEndDate'] == null ? undefined : ((value['plannedEndDate']).toISOString()),
    };
}

