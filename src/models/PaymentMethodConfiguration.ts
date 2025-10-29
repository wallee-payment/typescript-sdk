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
import type { OneClickPaymentMode } from './OneClickPaymentMode';
import {
    OneClickPaymentModeFromJSON,
    OneClickPaymentModeFromJSONTyped,
    OneClickPaymentModeToJSON,
} from './OneClickPaymentMode';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
} from './PaymentMethod';
import type { DataCollectionType } from './DataCollectionType';
import {
    DataCollectionTypeFromJSON,
    DataCollectionTypeFromJSONTyped,
    DataCollectionTypeToJSON,
} from './DataCollectionType';

/**
 * 
 * @export
 * @interface PaymentMethodConfiguration
 */
export interface PaymentMethodConfiguration {
    /**
     * 
     * @type {DataCollectionType}
     * @memberof PaymentMethodConfiguration
     */
    dataCollectionType?: DataCollectionType;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentMethodConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A customer-facing custom description for the payment method.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfiguration
     */
    readonly description?: { [key: string]: string; };
    /**
     * The URL to the image of the payment method displayed to the customer. If a custom image is defined, it will be used; otherwise, the default image of the payment method will be shown.
     * @type {string}
     * @memberof PaymentMethodConfiguration
     */
    readonly resolvedImageUrl?: string;
    /**
     * 
     * @type {OneClickPaymentMode}
     * @memberof PaymentMethodConfiguration
     */
    oneClickPaymentMode?: OneClickPaymentMode;
    /**
     * A customer-facing custom title for the payment method.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfiguration
     */
    readonly title?: { [key: string]: string; };
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentMethodConfiguration
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentMethodConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentMethodConfiguration
     */
    readonly spaceId?: number;
    /**
     * The resource path to a custom image for the payment method, displayed to the customer for visual identification.
     * @type {string}
     * @memberof PaymentMethodConfiguration
     */
    readonly imageResourcePath?: string;
    /**
     * When listing payment methods, they can be sorted by this number.
     * @type {number}
     * @memberof PaymentMethodConfiguration
     */
    readonly sortOrder?: number;
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof PaymentMethodConfiguration
     */
    readonly name?: string;
    /**
     * The description of the payment method displayed to the customer. If a custom description is defined, it will be used; otherwise, the default description of the payment method will be shown.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfiguration
     */
    readonly resolvedDescription?: { [key: string]: string; };
    /**
     * The title of the payment method displayed to the customer. If a custom title is defined, it will be used; otherwise, the default title of the payment method will be shown.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfiguration
     */
    readonly resolvedTitle?: { [key: string]: string; };
    /**
     * 
     * @type {PaymentMethod}
     * @memberof PaymentMethodConfiguration
     */
    paymentMethod?: PaymentMethod;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentMethodConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentMethodConfiguration
     */
    state?: CreationEntityState;
}

/**
 * Check if a given object implements the PaymentMethodConfiguration interface.
 */
export function instanceOfPaymentMethodConfiguration(value: object): value is PaymentMethodConfiguration {
    return true;
}

export function PaymentMethodConfigurationFromJSON(json: any): PaymentMethodConfiguration {
    return PaymentMethodConfigurationFromJSONTyped(json, false);
}

export function PaymentMethodConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'dataCollectionType': json['dataCollectionType'] == null ? undefined : DataCollectionTypeFromJSON(json['dataCollectionType']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'resolvedImageUrl': json['resolvedImageUrl'] == null ? undefined : json['resolvedImageUrl'],
        'oneClickPaymentMode': json['oneClickPaymentMode'] == null ? undefined : OneClickPaymentModeFromJSON(json['oneClickPaymentMode']),
        'title': json['title'] == null ? undefined : json['title'],
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'spaceId': json['spaceId'] == null ? undefined : json['spaceId'],
        'imageResourcePath': json['imageResourcePath'] == null ? undefined : json['imageResourcePath'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'resolvedDescription': json['resolvedDescription'] == null ? undefined : json['resolvedDescription'],
        'resolvedTitle': json['resolvedTitle'] == null ? undefined : json['resolvedTitle'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : PaymentMethodFromJSON(json['paymentMethod']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function PaymentMethodConfigurationToJSON(value?: Omit<PaymentMethodConfiguration, 'plannedPurgeDate'|'description'|'resolvedImageUrl'|'title'|'version'|'linkedSpaceId'|'spaceId'|'imageResourcePath'|'sortOrder'|'name'|'resolvedDescription'|'resolvedTitle'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dataCollectionType': DataCollectionTypeToJSON(value['dataCollectionType']),
        'oneClickPaymentMode': OneClickPaymentModeToJSON(value['oneClickPaymentMode']),
        'paymentMethod': PaymentMethodToJSON(value['paymentMethod']),
        'state': CreationEntityStateToJSON(value['state']),
    };
}

