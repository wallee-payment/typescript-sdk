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

/**
 * The webhook identity represents a set of keys that will be used to sign the webhook messages.
 * @export
 * @interface WebhookIdentity
 */
export interface WebhookIdentity {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof WebhookIdentity
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the webhook identity.
     * @type {string}
     * @memberof WebhookIdentity
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof WebhookIdentity
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof WebhookIdentity
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookIdentity
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof WebhookIdentity
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the WebhookIdentity interface.
 */
export function instanceOfWebhookIdentity(value: object): value is WebhookIdentity {
    return true;
}

export function WebhookIdentityFromJSON(json: any): WebhookIdentity {
    return WebhookIdentityFromJSONTyped(json, false);
}

export function WebhookIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookIdentity {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function WebhookIdentityToJSON(json: any): WebhookIdentity {
    return WebhookIdentityToJSONTyped(json, false);
}

export function WebhookIdentityToJSONTyped(value?: Omit<WebhookIdentity, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

