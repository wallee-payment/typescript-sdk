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
 * @interface SubscriptionAffiliateDeleting
 */
export interface SubscriptionAffiliateDeleting {
    /**
     * The reference used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly linkedSpaceId?: number;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * The name used to identify the affiliate.
     * @type {string}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly externalId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SubscriptionAffiliateDeleting
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionAffiliateDeleting
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the SubscriptionAffiliateDeleting interface.
 */
export function instanceOfSubscriptionAffiliateDeleting(value: object): value is SubscriptionAffiliateDeleting {
    return true;
}

export function SubscriptionAffiliateDeletingFromJSON(json: any): SubscriptionAffiliateDeleting {
    return SubscriptionAffiliateDeletingFromJSONTyped(json, false);
}

export function SubscriptionAffiliateDeletingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAffiliateDeleting {
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

export function SubscriptionAffiliateDeletingToJSON(json: any): SubscriptionAffiliateDeleting {
    return SubscriptionAffiliateDeletingToJSONTyped(json, false);
}

export function SubscriptionAffiliateDeletingToJSONTyped(value?: Omit<SubscriptionAffiliateDeleting, 'reference'|'linkedSpaceId'|'metaData'|'name'|'plannedPurgeDate'|'externalId'|'language'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

