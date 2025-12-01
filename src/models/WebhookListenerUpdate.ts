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
 * @interface WebhookListenerUpdate
 */
export interface WebhookListenerUpdate {
    /**
     * The entity's target states that are to be monitored.
     * @type {Set<string>}
     * @memberof WebhookListenerUpdate
     */
    entityStates?: Set<string>;
    /**
     * The name used to identify the webhook listener.
     * @type {string}
     * @memberof WebhookListenerUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookListenerUpdate
     */
    state?: CreationEntityState;
    /**
     * Whether every update of the entity or only state changes are to be monitored.
     * @type {boolean}
     * @memberof WebhookListenerUpdate
     */
    notifyEveryChange?: boolean;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof WebhookListenerUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the WebhookListenerUpdate interface.
 */
export function instanceOfWebhookListenerUpdate(value: object): value is WebhookListenerUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function WebhookListenerUpdateFromJSON(json: any): WebhookListenerUpdate {
    return WebhookListenerUpdateFromJSONTyped(json, false);
}

export function WebhookListenerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookListenerUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'entityStates': json['entityStates'] == null ? undefined : new Set(json['entityStates']),
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'notifyEveryChange': json['notifyEveryChange'] == null ? undefined : json['notifyEveryChange'],
        'version': json['version'],
    };
}

export function WebhookListenerUpdateToJSON(json: any): WebhookListenerUpdate {
    return WebhookListenerUpdateToJSONTyped(json, false);
}

export function WebhookListenerUpdateToJSONTyped(value?: WebhookListenerUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'entityStates': value['entityStates'] == null ? undefined : Array.from(value['entityStates'] as Set<any>),
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'notifyEveryChange': value['notifyEveryChange'],
        'version': value['version'],
    };
}

