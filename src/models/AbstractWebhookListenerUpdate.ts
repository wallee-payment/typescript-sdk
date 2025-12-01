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
 * @interface AbstractWebhookListenerUpdate
 */
export interface AbstractWebhookListenerUpdate {
    /**
     * The entity's target states that are to be monitored.
     * @type {Set<string>}
     * @memberof AbstractWebhookListenerUpdate
     */
    entityStates?: Set<string>;
    /**
     * The name used to identify the webhook listener.
     * @type {string}
     * @memberof AbstractWebhookListenerUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractWebhookListenerUpdate
     */
    state?: CreationEntityState;
    /**
     * Whether every update of the entity or only state changes are to be monitored.
     * @type {boolean}
     * @memberof AbstractWebhookListenerUpdate
     */
    notifyEveryChange?: boolean;
}



/**
 * Check if a given object implements the AbstractWebhookListenerUpdate interface.
 */
export function instanceOfAbstractWebhookListenerUpdate(value: object): value is AbstractWebhookListenerUpdate {
    return true;
}

export function AbstractWebhookListenerUpdateFromJSON(json: any): AbstractWebhookListenerUpdate {
    return AbstractWebhookListenerUpdateFromJSONTyped(json, false);
}

export function AbstractWebhookListenerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractWebhookListenerUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'entityStates': json['entityStates'] == null ? undefined : new Set(json['entityStates']),
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'notifyEveryChange': json['notifyEveryChange'] == null ? undefined : json['notifyEveryChange'],
    };
}

export function AbstractWebhookListenerUpdateToJSON(json: any): AbstractWebhookListenerUpdate {
    return AbstractWebhookListenerUpdateToJSONTyped(json, false);
}

export function AbstractWebhookListenerUpdateToJSONTyped(value?: AbstractWebhookListenerUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'entityStates': value['entityStates'] == null ? undefined : Array.from(value['entityStates'] as Set<any>),
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'notifyEveryChange': value['notifyEveryChange'],
    };
}

