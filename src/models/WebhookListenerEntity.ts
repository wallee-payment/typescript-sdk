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
/**
 * 
 * @export
 * @interface WebhookListenerEntity
 */
export interface WebhookListenerEntity {
    /**
     * The name used to identify the webhook listener entity.
     * @type {{ [key: string]: string; }}
     * @memberof WebhookListenerEntity
     */
    readonly name?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof WebhookListenerEntity
     */
    readonly id?: number;
    /**
     * The name used to programmatically identify the webhook listener entity.
     * @type {string}
     * @memberof WebhookListenerEntity
     */
    readonly technicalName?: string;
}

/**
 * Check if a given object implements the WebhookListenerEntity interface.
 */
export function instanceOfWebhookListenerEntity(value: object): value is WebhookListenerEntity {
    return true;
}

export function WebhookListenerEntityFromJSON(json: any): WebhookListenerEntity {
    return WebhookListenerEntityFromJSONTyped(json, false);
}

export function WebhookListenerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookListenerEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'technicalName': json['technicalName'] == null ? undefined : json['technicalName'],
    };
}

export function WebhookListenerEntityToJSON(value?: Omit<WebhookListenerEntity, 'name'|'id'|'technicalName'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

