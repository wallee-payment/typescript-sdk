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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * A subscriber represents everyone who is subscribed to a product.
 * @export
 * @interface Subscriber
 */
export interface Subscriber {
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Subscriber
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The description used to identify the subscriber.
     * @type {string}
     * @memberof Subscriber
     */
    readonly description?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof Subscriber
     */
    readonly externalId?: string;
    /**
     * The language that is used when communicating with the subscriber via emails and documents.
     * @type {string}
     * @memberof Subscriber
     */
    readonly language?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Subscriber
     */
    readonly version?: number;
    /**
     * The merchant's reference used to identify the subscriber.
     * @type {string}
     * @memberof Subscriber
     */
    readonly reference?: string;
    /**
     * Allow the subscriber to use these payment methods even if subscription products do not accept them.
     * @type {Array<number>}
     * @memberof Subscriber
     */
    readonly additionalAllowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Subscriber
     */
    readonly linkedSpaceId?: number;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof Subscriber
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * The email address that is used to communicate with the subscriber. There can be only one subscriber per space with the same email address.
     * @type {string}
     * @memberof Subscriber
     */
    readonly emailAddress?: string;
    /**
     * Prevent the subscriber from using these payment methods even if subscription products do accept them.
     * @type {Array<number>}
     * @memberof Subscriber
     */
    readonly disallowedPaymentMethodConfigurations?: Array<number>;
    /**
     * 
     * @type {Address}
     * @memberof Subscriber
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof Subscriber
     */
    billingAddress?: Address;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Subscriber
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof Subscriber
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the Subscriber interface.
 */
export function instanceOfSubscriber(value: object): value is Subscriber {
    return true;
}

export function SubscriberFromJSON(json: any): Subscriber {
    return SubscriberFromJSONTyped(json, false);
}

export function SubscriberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscriber {
    if (json == null) {
        return json;
    }
    return {
        
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'language': json['language'] == null ? undefined : json['language'],
        'version': json['version'] == null ? undefined : json['version'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'additionalAllowedPaymentMethodConfigurations': json['additionalAllowedPaymentMethodConfigurations'] == null ? undefined : json['additionalAllowedPaymentMethodConfigurations'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'disallowedPaymentMethodConfigurations': json['disallowedPaymentMethodConfigurations'] == null ? undefined : json['disallowedPaymentMethodConfigurations'],
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressFromJSON(json['shippingAddress']),
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function SubscriberToJSON(json: any): Subscriber {
    return SubscriberToJSONTyped(json, false);
}

export function SubscriberToJSONTyped(value?: Omit<Subscriber, 'plannedPurgeDate'|'description'|'externalId'|'language'|'version'|'reference'|'additionalAllowedPaymentMethodConfigurations'|'linkedSpaceId'|'metaData'|'emailAddress'|'disallowedPaymentMethodConfigurations'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shippingAddress': AddressToJSON(value['shippingAddress']),
        'billingAddress': AddressToJSON(value['billingAddress']),
        'state': CreationEntityStateToJSON(value['state']),
    };
}

