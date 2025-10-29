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
 * @interface SubscriptionAffiliate
 */
export interface SubscriptionAffiliate {
    /**
     * The reference used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliate
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionAffiliate
     */
    readonly linkedSpaceId?: number;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionAffiliate
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * The name used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliate
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionAffiliate
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionAffiliate
     */
    readonly externalId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionAffiliate
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionAffiliate
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SubscriptionAffiliate
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionAffiliate
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionAffiliate interface.
 */
export function instanceOfSubscriptionAffiliate(value: object): value is SubscriptionAffiliate {
    return true;
}

export function SubscriptionAffiliateFromJSON(json: any): SubscriptionAffiliate {
    return SubscriptionAffiliateFromJSONTyped(json, false);
}

export function SubscriptionAffiliateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAffiliate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'language': json['language'] == null ? undefined : json['language'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionAffiliateToJSON(value?: Omit<SubscriptionAffiliate, 'reference'|'linkedSpaceId'|'metaData'|'name'|'plannedPurgeDate'|'externalId'|'language'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

