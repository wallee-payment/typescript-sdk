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
} from './AddressCreate';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * A subscriber represents everyone who is subscribed to a product.
 * @export
 * @interface SubscriberCreate
 */
export interface SubscriberCreate {
    /**
     * The merchant's reference used to identify the subscriber.
     * @type {string}
     * @memberof SubscriberCreate
     */
    reference?: string;
    /**
     * Allow the subscriber to use these payment methods even if subscription products do not accept them.
     * @type {Array<number>}
     * @memberof SubscriberCreate
     */
    additionalAllowedPaymentMethodConfigurations?: Array<number>;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriberCreate
     */
    metaData?: { [key: string]: string; };
    /**
     * The email address that is used to communicate with the subscriber. There can be only one subscriber per space with the same email address.
     * @type {string}
     * @memberof SubscriberCreate
     */
    emailAddress?: string;
    /**
     * Prevent the subscriber from using these payment methods even if subscription products do accept them.
     * @type {Array<number>}
     * @memberof SubscriberCreate
     */
    disallowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The description used to identify the subscriber.
     * @type {string}
     * @memberof SubscriberCreate
     */
    description?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof SubscriberCreate
     */
    shippingAddress?: AddressCreate;
    /**
     * The language that is used when communicating with the subscriber via emails and documents.
     * @type {string}
     * @memberof SubscriberCreate
     */
    language?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof SubscriberCreate
     */
    billingAddress?: AddressCreate;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriberCreate
     */
    externalId: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SubscriberCreate
     */
    state?: CreationEntityState;
}

/**
 * Check if a given object implements the SubscriberCreate interface.
 */
export function instanceOfSubscriberCreate(value: object): value is SubscriberCreate {
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function SubscriberCreateFromJSON(json: any): SubscriberCreate {
    return SubscriberCreateFromJSONTyped(json, false);
}

export function SubscriberCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriberCreate {
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
        'externalId': json['externalId'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function SubscriberCreateToJSON(value?: SubscriberCreate | null): any {
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
        'externalId': value['externalId'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

