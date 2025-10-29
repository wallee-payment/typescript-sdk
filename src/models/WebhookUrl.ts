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
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface WebhookUrl
 */
export interface WebhookUrl {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof WebhookUrl
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the webhook URL is managed by the application, and therefore cannot be changed via the user interface.
     * @type {boolean}
     * @memberof WebhookUrl
     */
    readonly applicationManaged?: boolean;
    /**
     * The name used to identify the webhook URL.
     * @type {string}
     * @memberof WebhookUrl
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof WebhookUrl
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof WebhookUrl
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookUrl
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof WebhookUrl
     */
    readonly version?: number;
    /**
     * The actual URL where notifications about entity changes are sent to.
     * @type {string}
     * @memberof WebhookUrl
     */
    readonly url?: string;
}

/**
 * Check if a given object implements the WebhookUrl interface.
 */
export function instanceOfWebhookUrl(value: object): value is WebhookUrl {
    return true;
}

export function WebhookUrlFromJSON(json: any): WebhookUrl {
    return WebhookUrlFromJSONTyped(json, false);
}

export function WebhookUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'applicationManaged': json['applicationManaged'] == null ? undefined : json['applicationManaged'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WebhookUrlToJSON(value?: Omit<WebhookUrl, 'linkedSpaceId'|'applicationManaged'|'name'|'plannedPurgeDate'|'id'|'version'|'url'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

