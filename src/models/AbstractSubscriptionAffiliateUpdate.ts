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
 * @interface AbstractSubscriptionAffiliateUpdate
 */
export interface AbstractSubscriptionAffiliateUpdate {
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof AbstractSubscriptionAffiliateUpdate
     */
    metaData?: { [key: string]: string; };
    /**
     * The name used to identify the affiliate.
     * @type {string}
     * @memberof AbstractSubscriptionAffiliateUpdate
     */
    name?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof AbstractSubscriptionAffiliateUpdate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractSubscriptionAffiliateUpdate
     */
    state?: CreationEntityState;
}

/**
 * Check if a given object implements the AbstractSubscriptionAffiliateUpdate interface.
 */
export function instanceOfAbstractSubscriptionAffiliateUpdate(value: object): value is AbstractSubscriptionAffiliateUpdate {
    return true;
}

export function AbstractSubscriptionAffiliateUpdateFromJSON(json: any): AbstractSubscriptionAffiliateUpdate {
    return AbstractSubscriptionAffiliateUpdateFromJSONTyped(json, false);
}

export function AbstractSubscriptionAffiliateUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractSubscriptionAffiliateUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'name': json['name'] == null ? undefined : json['name'],
        'language': json['language'] == null ? undefined : json['language'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function AbstractSubscriptionAffiliateUpdateToJSON(value?: AbstractSubscriptionAffiliateUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metaData': value['metaData'],
        'name': value['name'],
        'language': value['language'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

