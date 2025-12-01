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
import type { SubscriptionAffiliate } from './SubscriptionAffiliate';
import {
    SubscriptionAffiliateFromJSON,
    SubscriptionAffiliateFromJSONTyped,
    SubscriptionAffiliateToJSON,
    SubscriptionAffiliateToJSONTyped,
} from './SubscriptionAffiliate';
import type { Subscriber } from './Subscriber';
import {
    SubscriberFromJSON,
    SubscriberFromJSONTyped,
    SubscriberToJSON,
    SubscriberToJSONTyped,
} from './Subscriber';
import type { SubscriptionState } from './SubscriptionState';
import {
    SubscriptionStateFromJSON,
    SubscriptionStateFromJSONTyped,
    SubscriptionStateToJSON,
    SubscriptionStateToJSONTyped,
} from './SubscriptionState';
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
    TokenToJSONTyped,
} from './Token';
import type { SubscriptionProductVersion } from './SubscriptionProductVersion';
import {
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionFromJSONTyped,
    SubscriptionProductVersionToJSON,
    SubscriptionProductVersionToJSONTyped,
} from './SubscriptionProductVersion';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {Subscriber}
     * @memberof Subscription
     */
    subscriber?: Subscriber;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Subscription
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The ID of the user the subscription was terminated by.
     * @type {number}
     * @memberof Subscription
     */
    readonly terminatedBy?: number;
    /**
     * A description used to identify the subscription.
     * @type {string}
     * @memberof Subscription
     */
    readonly description?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Subscription
     */
    readonly language?: string;
    /**
     * The date and time when the subscription was initialized.
     * @type {Date}
     * @memberof Subscription
     */
    readonly initializedOn?: Date;
    /**
     * The date and time when the subscription was created.
     * @type {Date}
     * @memberof Subscription
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Subscription
     */
    readonly version?: number;
    /**
     * 
     * @type {Token}
     * @memberof Subscription
     */
    token?: Token;
    /**
     * The merchant's reference used to identify the subscription.
     * @type {string}
     * @memberof Subscription
     */
    readonly reference?: string;
    /**
     * The date and time when the subscription was terminated.
     * @type {Date}
     * @memberof Subscription
     */
    readonly terminatedOn?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Subscription
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the subscription was activate.
     * @type {Date}
     * @memberof Subscription
     */
    readonly activatedOn?: Date;
    /**
     * The date and time when the termination of the subscription started.
     * @type {Date}
     * @memberof Subscription
     */
    readonly terminatingOn?: Date;
    /**
     * 
     * @type {SubscriptionProductVersion}
     * @memberof Subscription
     */
    currentProductVersion?: SubscriptionProductVersion;
    /**
     * The date and time when the subscription is planned to be terminated.
     * @type {Date}
     * @memberof Subscription
     */
    readonly plannedTerminationDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Subscription
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionState}
     * @memberof Subscription
     */
    state?: SubscriptionState;
    /**
     * 
     * @type {SubscriptionAffiliate}
     * @memberof Subscription
     */
    affiliate?: SubscriptionAffiliate;
    /**
     * The date and time when the subscription was scheduled to be terminated.
     * @type {Date}
     * @memberof Subscription
     */
    readonly terminationScheduledOn?: Date;
}



/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): value is Subscription {
    return true;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if (json == null) {
        return json;
    }
    return {
        
        'subscriber': json['subscriber'] == null ? undefined : SubscriberFromJSON(json['subscriber']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'terminatedBy': json['terminatedBy'] == null ? undefined : json['terminatedBy'],
        'description': json['description'] == null ? undefined : json['description'],
        'language': json['language'] == null ? undefined : json['language'],
        'initializedOn': json['initializedOn'] == null ? undefined : (new Date(json['initializedOn'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'token': json['token'] == null ? undefined : TokenFromJSON(json['token']),
        'reference': json['reference'] == null ? undefined : json['reference'],
        'terminatedOn': json['terminatedOn'] == null ? undefined : (new Date(json['terminatedOn'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'terminatingOn': json['terminatingOn'] == null ? undefined : (new Date(json['terminatingOn'])),
        'currentProductVersion': json['currentProductVersion'] == null ? undefined : SubscriptionProductVersionFromJSON(json['currentProductVersion']),
        'plannedTerminationDate': json['plannedTerminationDate'] == null ? undefined : (new Date(json['plannedTerminationDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionStateFromJSON(json['state']),
        'affiliate': json['affiliate'] == null ? undefined : SubscriptionAffiliateFromJSON(json['affiliate']),
        'terminationScheduledOn': json['terminationScheduledOn'] == null ? undefined : (new Date(json['terminationScheduledOn'])),
    };
}

export function SubscriptionToJSON(json: any): Subscription {
    return SubscriptionToJSONTyped(json, false);
}

export function SubscriptionToJSONTyped(value?: Omit<Subscription, 'plannedPurgeDate'|'terminatedBy'|'description'|'language'|'initializedOn'|'createdOn'|'version'|'reference'|'terminatedOn'|'linkedSpaceId'|'activatedOn'|'terminatingOn'|'plannedTerminationDate'|'id'|'terminationScheduledOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscriber': SubscriberToJSON(value['subscriber']),
        'token': TokenToJSON(value['token']),
        'currentProductVersion': SubscriptionProductVersionToJSON(value['currentProductVersion']),
        'state': SubscriptionStateToJSON(value['state']),
        'affiliate': SubscriptionAffiliateToJSON(value['affiliate']),
    };
}

