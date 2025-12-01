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
import type { SubscriptionProductComponentReferenceState } from './SubscriptionProductComponentReferenceState';
import {
    SubscriptionProductComponentReferenceStateFromJSON,
    SubscriptionProductComponentReferenceStateFromJSONTyped,
    SubscriptionProductComponentReferenceStateToJSON,
    SubscriptionProductComponentReferenceStateToJSONTyped,
} from './SubscriptionProductComponentReferenceState';

/**
 * The product component reference links components from different product versions, which makes it possible to carry out migrations.
 * @export
 * @interface SubscriptionProductComponentReference
 */
export interface SubscriptionProductComponentReference {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductComponentReference
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the component reference.
     * @type {string}
     * @memberof SubscriptionProductComponentReference
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionProductComponentReference
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductComponentReference
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionProductComponentReferenceState}
     * @memberof SubscriptionProductComponentReference
     */
    state?: SubscriptionProductComponentReferenceState;
    /**
     * The component reference sku as a unique identifier.
     * @type {string}
     * @memberof SubscriptionProductComponentReference
     */
    readonly sku?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductComponentReference
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the SubscriptionProductComponentReference interface.
 */
export function instanceOfSubscriptionProductComponentReference(value: object): value is SubscriptionProductComponentReference {
    return true;
}

export function SubscriptionProductComponentReferenceFromJSON(json: any): SubscriptionProductComponentReference {
    return SubscriptionProductComponentReferenceFromJSONTyped(json, false);
}

export function SubscriptionProductComponentReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponentReference {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionProductComponentReferenceStateFromJSON(json['state']),
        'sku': json['sku'] == null ? undefined : json['sku'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionProductComponentReferenceToJSON(json: any): SubscriptionProductComponentReference {
    return SubscriptionProductComponentReferenceToJSONTyped(json, false);
}

export function SubscriptionProductComponentReferenceToJSONTyped(value?: Omit<SubscriptionProductComponentReference, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'sku'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': SubscriptionProductComponentReferenceStateToJSON(value['state']),
    };
}

