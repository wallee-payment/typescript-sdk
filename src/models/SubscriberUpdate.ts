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
import type { AddressCreate } from './AddressCreate';
import {
    AddressCreateFromJSON,
    AddressCreateFromJSONTyped,
    AddressCreateToJSON,
    AddressCreateToJSONTyped,
} from './AddressCreate';

/**
 * A subscriber represents everyone who is subscribed to a product.
 * @export
 * @interface SubscriberUpdate
 */
export interface SubscriberUpdate {
    /**
     * The merchant's reference used to identify the subscriber.
     * @type {string}
     * @memberof SubscriberUpdate
     */
    reference?: string;
    /**
     * Allow the subscriber to use these payment methods even if subscription products do not accept them.
     * @type {Array<number>}
     * @memberof SubscriberUpdate
     */
    additionalAllowedPaymentMethodConfigurations?: Array<number>;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriberUpdate
     */
    metaData?: { [key: string]: string; };
    /**
     * The email address that is used to communicate with the subscriber. There can be only one subscriber per space with the same email address.
     * @type {string}
     * @memberof SubscriberUpdate
     */
    emailAddress?: string;
    /**
     * Prevent the subscriber from using these payment methods even if subscription products do accept them.
     * @type {Array<number>}
     * @memberof SubscriberUpdate
     */
    disallowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The description used to identify the subscriber.
     * @type {string}
     * @memberof SubscriberUpdate
     */
    description?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof SubscriberUpdate
     */
    shippingAddress?: AddressCreate;
    /**
     * The language that is used when communicating with the subscriber via emails and documents.
     * @type {string}
     * @memberof SubscriberUpdate
     */
    language?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof SubscriberUpdate
     */
    billingAddress?: AddressCreate;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriberUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the SubscriberUpdate interface.
 */
export function instanceOfSubscriberUpdate(value: object): value is SubscriberUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriberUpdateFromJSON(json: any): SubscriberUpdate {
    return SubscriberUpdateFromJSONTyped(json, false);
}

export function SubscriberUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'additionalAllowedPaymentMethodConfigurations': json['additionalAllowedPaymentMethodConfigurations'] == null ? undefined : json['additionalAllowedPaymentMethodConfigurations'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'disallowedPaymentMethodConfigurations': json['disallowedPaymentMethodConfigurations'] == null ? undefined : json['disallowedPaymentMethodConfigurations'],
        'description': json['description'] == null ? undefined : json['description'],
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressCreateFromJSON(json['shippingAddress']),
        'language': json['language'] == null ? undefined : json['language'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressCreateFromJSON(json['billingAddress']),
        'version': json['version'],
    };
}

export function SubscriberUpdateToJSON(json: any): SubscriberUpdate {
    return SubscriberUpdateToJSONTyped(json, false);
}

export function SubscriberUpdateToJSONTyped(value?: SubscriberUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reference': value['reference'],
        'additionalAllowedPaymentMethodConfigurations': value['additionalAllowedPaymentMethodConfigurations'],
        'metaData': value['metaData'],
        'emailAddress': value['emailAddress'],
        'disallowedPaymentMethodConfigurations': value['disallowedPaymentMethodConfigurations'],
        'description': value['description'],
        'shippingAddress': AddressCreateToJSON(value['shippingAddress']),
        'language': value['language'],
        'billingAddress': AddressCreateToJSON(value['billingAddress']),
        'version': value['version'],
    };
}

