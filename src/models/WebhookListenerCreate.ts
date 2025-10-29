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
 * @interface WebhookListenerCreate
 */
export interface WebhookListenerCreate {
    /**
     * The entity's target states that are to be monitored.
     * @type {Set<string>}
     * @memberof WebhookListenerCreate
     */
    entityStates?: Set<string>;
    /**
     * The name used to identify the webhook listener.
     * @type {string}
     * @memberof WebhookListenerCreate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookListenerCreate
     */
    state?: CreationEntityState;
    /**
     * Whether every update of the entity or only state changes are to be monitored.
     * @type {boolean}
     * @memberof WebhookListenerCreate
     */
    notifyEveryChange?: boolean;
    /**
     * The identity used to sign messages.
     * @type {number}
     * @memberof WebhookListenerCreate
     */
    identity?: number;
    /**
     * The entity that is to be monitored.
     * @type {number}
     * @memberof WebhookListenerCreate
     */
    entity: number;
    /**
     * The URL where notifications about entity changes are sent to.
     * @type {number}
     * @memberof WebhookListenerCreate
     */
    url: number;
}

/**
 * Check if a given object implements the WebhookListenerCreate interface.
 */
export function instanceOfWebhookListenerCreate(value: object): value is WebhookListenerCreate {
    if (!('entity' in value) || value['entity'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function WebhookListenerCreateFromJSON(json: any): WebhookListenerCreate {
    return WebhookListenerCreateFromJSONTyped(json, false);
}

export function WebhookListenerCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookListenerCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'entityStates': json['entityStates'] == null ? undefined : json['entityStates'],
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'notifyEveryChange': json['notifyEveryChange'] == null ? undefined : json['notifyEveryChange'],
        'identity': json['identity'] == null ? undefined : json['identity'],
        'entity': json['entity'],
        'url': json['url'],
    };
}

export function WebhookListenerCreateToJSON(value?: WebhookListenerCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entityStates': value['entityStates'] == null ? undefined : Array.from(value['entityStates'] as Set<any>),
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'notifyEveryChange': value['notifyEveryChange'],
        'identity': value['identity'],
        'entity': value['entity'],
        'url': value['url'],
    };
}

