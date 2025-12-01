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
 * @interface AbstractWebhookUrlUpdate
 */
export interface AbstractWebhookUrlUpdate {
    /**
     * The name used to identify the webhook URL.
     * @type {string}
     * @memberof AbstractWebhookUrlUpdate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractWebhookUrlUpdate
     */
    state?: CreationEntityState;
    /**
     * The actual URL where notifications about entity changes are sent to.
     * @type {string}
     * @memberof AbstractWebhookUrlUpdate
     */
    url?: string;
}



/**
 * Check if a given object implements the AbstractWebhookUrlUpdate interface.
 */
export function instanceOfAbstractWebhookUrlUpdate(value: object): value is AbstractWebhookUrlUpdate {
    return true;
}

export function AbstractWebhookUrlUpdateFromJSON(json: any): AbstractWebhookUrlUpdate {
    return AbstractWebhookUrlUpdateFromJSONTyped(json, false);
}

export function AbstractWebhookUrlUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractWebhookUrlUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function AbstractWebhookUrlUpdateToJSON(json: any): AbstractWebhookUrlUpdate {
    return AbstractWebhookUrlUpdateToJSONTyped(json, false);
}

export function AbstractWebhookUrlUpdateToJSONTyped(value?: AbstractWebhookUrlUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'url': value['url'],
    };
}

