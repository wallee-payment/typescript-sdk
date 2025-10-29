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
 * @interface SubscriptionAffiliateCreate
 */
export interface SubscriptionAffiliateCreate {
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionAffiliateCreate
     */
    metaData?: { [key: string]: string; };
    /**
     * The name used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliateCreate
     */
    name?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionAffiliateCreate
     */
    language?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SubscriptionAffiliateCreate
     */
    state?: CreationEntityState;
    /**
     * The reference used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliateCreate
     */
    reference: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionAffiliateCreate
     */
    externalId: string;
}

/**
 * Check if a given object implements the SubscriptionAffiliateCreate interface.
 */
export function instanceOfSubscriptionAffiliateCreate(value: object): value is SubscriptionAffiliateCreate {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function SubscriptionAffiliateCreateFromJSON(json: any): SubscriptionAffiliateCreate {
    return SubscriptionAffiliateCreateFromJSONTyped(json, false);
}

export function SubscriptionAffiliateCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAffiliateCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'name': json['name'] == null ? undefined : json['name'],
        'language': json['language'] == null ? undefined : json['language'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'reference': json['reference'],
        'externalId': json['externalId'],
    };
}

export function SubscriptionAffiliateCreateToJSON(value?: SubscriptionAffiliateCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metaData': value['metaData'],
        'name': value['name'],
        'language': value['language'],
        'state': CreationEntityStateToJSON(value['state']),
        'reference': value['reference'],
        'externalId': value['externalId'],
    };
}

