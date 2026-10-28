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
import type { FulfillmentState } from './FulfillmentState';
import {
    FulfillmentStateFromJSON,
    FulfillmentStateFromJSONTyped,
    FulfillmentStateToJSON,
    FulfillmentStateToJSONTyped,
} from './FulfillmentState';
import type { TransactionCompletion } from './TransactionCompletion';
import {
    TransactionCompletionFromJSON,
    TransactionCompletionFromJSONTyped,
    TransactionCompletionToJSON,
    TransactionCompletionToJSONTyped,
} from './TransactionCompletion';

/**
 * 
 * @export
 * @interface Fulfillment
 */
export interface Fulfillment {
    /**
     * 
     * @type {TransactionCompletion}
     * @memberof Fulfillment
     */
    completion?: TransactionCompletion;
    /**
     * 
     * @type {number}
     * @memberof Fulfillment
     */
    readonly overriddenBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Fulfillment
     */
    readonly overrideReason?: string;
    /**
     * 
     * @type {string}
     * @memberof Fulfillment
     */
    readonly description?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof Fulfillment
     */
    readonly externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof Fulfillment
     */
    readonly grossAmount?: number;
    /**
     * 
     * @type {Date}
     * @memberof Fulfillment
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Fulfillment
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Fulfillment
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {number}
     * @memberof Fulfillment
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Fulfillment
     */
    readonly failureReason?: string;
    /**
     * 
     * @type {number}
     * @memberof Fulfillment
     */
    readonly fulfilledBy?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Fulfillment
     */
    readonly inStorePickup?: boolean;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Fulfillment
     */
    readonly id?: number;
    /**
     * 
     * @type {FulfillmentState}
     * @memberof Fulfillment
     */
    state?: FulfillmentState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof Fulfillment
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {string}
     * @memberof Fulfillment
     */
    readonly trackingNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof Fulfillment
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Fulfillment
     */
    readonly overriddenOn?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Fulfillment
     */
    readonly fulfilledOn?: Date;
}



/**
 * Check if a given object implements the Fulfillment interface.
 */
export function instanceOfFulfillment(value: object): value is Fulfillment {
    return true;
}

export function FulfillmentFromJSON(json: any): Fulfillment {
    return FulfillmentFromJSONTyped(json, false);
}

export function FulfillmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fulfillment {
    if (json == null) {
        return json;
    }
    return {
        
        'completion': json['completion'] == null ? undefined : TransactionCompletionFromJSON(json['completion']),
        'overriddenBy': json['overriddenBy'] == null ? undefined : json['overriddenBy'],
        'overrideReason': json['overrideReason'] == null ? undefined : json['overrideReason'],
        'description': json['description'] == null ? undefined : json['description'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'grossAmount': json['grossAmount'] == null ? undefined : json['grossAmount'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'failureReason': json['failureReason'] == null ? undefined : json['failureReason'],
        'fulfilledBy': json['fulfilledBy'] == null ? undefined : json['fulfilledBy'],
        'inStorePickup': json['inStorePickup'] == null ? undefined : json['inStorePickup'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : FulfillmentStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'trackingNumber': json['trackingNumber'] == null ? undefined : json['trackingNumber'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'overriddenOn': json['overriddenOn'] == null ? undefined : (new Date(json['overriddenOn'])),
        'fulfilledOn': json['fulfilledOn'] == null ? undefined : (new Date(json['fulfilledOn'])),
    };
}

export function FulfillmentToJSON(json: any): Fulfillment {
    return FulfillmentToJSONTyped(json, false);
}

export function FulfillmentToJSONTyped(value?: Omit<Fulfillment, 'overriddenBy'|'overrideReason'|'description'|'externalId'|'grossAmount'|'createdOn'|'version'|'linkedSpaceId'|'createdBy'|'failureReason'|'fulfilledBy'|'inStorePickup'|'id'|'linkedTransaction'|'trackingNumber'|'failedOn'|'overriddenOn'|'fulfilledOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'completion': TransactionCompletionToJSON(value['completion']),
        'state': FulfillmentStateToJSON(value['state']),
    };
}

