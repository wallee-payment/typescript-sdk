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
 * 
 * @export
 * @interface WebhookUrlUpdate
 */
export interface WebhookUrlUpdate {
    /**
     * The name used to identify the webhook URL.
     * @type {string}
     * @memberof WebhookUrlUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookUrlUpdate
     */
    state?: CreationEntityState;
    /**
     * The actual URL where notifications about entity changes are sent to.
     * @type {string}
     * @memberof WebhookUrlUpdate
     */
    url?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof WebhookUrlUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the WebhookUrlUpdate interface.
 */
export function instanceOfWebhookUrlUpdate(value: object): value is WebhookUrlUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function WebhookUrlUpdateFromJSON(json: any): WebhookUrlUpdate {
    return WebhookUrlUpdateFromJSONTyped(json, false);
}

export function WebhookUrlUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookUrlUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'url': json['url'] == null ? undefined : json['url'],
        'version': json['version'],
    };
}

export function WebhookUrlUpdateToJSON(json: any): WebhookUrlUpdate {
    return WebhookUrlUpdateToJSONTyped(json, false);
}

export function WebhookUrlUpdateToJSONTyped(value?: WebhookUrlUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'url': value['url'],
        'version': value['version'],
    };
}

