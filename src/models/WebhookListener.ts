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
import type { WebhookUrl } from './WebhookUrl';
import {
    WebhookUrlFromJSON,
    WebhookUrlFromJSONTyped,
    WebhookUrlToJSON,
} from './WebhookUrl';
import type { WebhookIdentity } from './WebhookIdentity';
import {
    WebhookIdentityFromJSON,
    WebhookIdentityFromJSONTyped,
    WebhookIdentityToJSON,
} from './WebhookIdentity';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface WebhookListener
 */
export interface WebhookListener {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof WebhookListener
     */
    readonly linkedSpaceId?: number;
    /**
     * The entity's target states that are to be monitored.
     * @type {Set<string>}
     * @memberof WebhookListener
     */
    readonly entityStates?: Set<string>;
    /**
     * 
     * @type {WebhookIdentity}
     * @memberof WebhookListener
     */
    identity?: WebhookIdentity;
    /**
     * The name used to identify the webhook listener.
     * @type {string}
     * @memberof WebhookListener
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof WebhookListener
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof WebhookListener
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof WebhookListener
     */
    state?: CreationEntityState;
    /**
     * Whether every update of the entity or only state changes are to be monitored.
     * @type {boolean}
     * @memberof WebhookListener
     */
    readonly notifyEveryChange?: boolean;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof WebhookListener
     */
    readonly version?: number;
    /**
     * Whether signature header and 'state' property are enabled in webhook payload.
     * @type {boolean}
     * @memberof WebhookListener
     */
    readonly enablePayloadSignatureAndState?: boolean;
    /**
     * The entity that is to be monitored.
     * @type {number}
     * @memberof WebhookListener
     */
    readonly entity?: number;
    /**
     * 
     * @type {WebhookUrl}
     * @memberof WebhookListener
     */
    url?: WebhookUrl;
}

/**
 * Check if a given object implements the WebhookListener interface.
 */
export function instanceOfWebhookListener(value: object): value is WebhookListener {
    return true;
}

export function WebhookListenerFromJSON(json: any): WebhookListener {
    return WebhookListenerFromJSONTyped(json, false);
}

export function WebhookListenerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookListener {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'entityStates': json['entityStates'] == null ? undefined : json['entityStates'],
        'identity': json['identity'] == null ? undefined : WebhookIdentityFromJSON(json['identity']),
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'notifyEveryChange': json['notifyEveryChange'] == null ? undefined : json['notifyEveryChange'],
        'version': json['version'] == null ? undefined : json['version'],
        'enablePayloadSignatureAndState': json['enablePayloadSignatureAndState'] == null ? undefined : json['enablePayloadSignatureAndState'],
        'entity': json['entity'] == null ? undefined : json['entity'],
        'url': json['url'] == null ? undefined : WebhookUrlFromJSON(json['url']),
    };
}

export function WebhookListenerToJSON(value?: Omit<WebhookListener, 'linkedSpaceId'|'entityStates'|'name'|'plannedPurgeDate'|'id'|'notifyEveryChange'|'version'|'enablePayloadSignatureAndState'|'entity'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identity': WebhookIdentityToJSON(value['identity']),
        'state': CreationEntityStateToJSON(value['state']),
        'url': WebhookUrlToJSON(value['url']),
    };
}

