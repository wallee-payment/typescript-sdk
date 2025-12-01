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
 * @interface SubscriptionProductComponentGroupUpdate
 */
export interface SubscriptionProductComponentGroupUpdate {
    /**
     * The product version that the component group belongs to.
     * @type {number}
     * @memberof SubscriptionProductComponentGroupUpdate
     */
    productVersion?: number;
    /**
     * When listing component groups, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProductComponentGroupUpdate
     */
    sortOrder?: number;
    /**
     * The localized name of the component group that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponentGroupUpdate
     */
    name?: { [key: string]: string; };
    /**
     * Whether the component group is optional, i.e. the customer does not have to select any component.
     * @type {boolean}
     * @memberof SubscriptionProductComponentGroupUpdate
     */
    optional?: boolean;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriptionProductComponentGroupUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the SubscriptionProductComponentGroupUpdate interface.
 */
export function instanceOfSubscriptionProductComponentGroupUpdate(value: object): value is SubscriptionProductComponentGroupUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriptionProductComponentGroupUpdateFromJSON(json: any): SubscriptionProductComponentGroupUpdate {
    return SubscriptionProductComponentGroupUpdateFromJSONTyped(json, false);
}

export function SubscriptionProductComponentGroupUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponentGroupUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'productVersion': json['productVersion'] == null ? undefined : json['productVersion'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'optional': json['optional'] == null ? undefined : json['optional'],
        'version': json['version'],
    };
}

export function SubscriptionProductComponentGroupUpdateToJSON(json: any): SubscriptionProductComponentGroupUpdate {
    return SubscriptionProductComponentGroupUpdateToJSONTyped(json, false);
}

export function SubscriptionProductComponentGroupUpdateToJSONTyped(value?: SubscriptionProductComponentGroupUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'productVersion': value['productVersion'],
        'sortOrder': value['sortOrder'],
        'name': value['name'],
        'optional': value['optional'],
        'version': value['version'],
    };
}

