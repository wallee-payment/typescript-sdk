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
 * @interface SubscriptionProductComponentUpdate
 */
export interface SubscriptionProductComponentUpdate {
    /**
     * The reference is used to link components across different product versions.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    reference?: number;
    /**
     * The tax class to be applied to fees.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    taxClass?: number;
    /**
     * The quantity step determines the interval in which the quantity can be increased.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    quantityStep?: number;
    /**
     * When listing components, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    sortOrder?: number;
    /**
     * The group that the component belongs to.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    componentGroup?: number;
    /**
     * The localized name of the component that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponentUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the component that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponentUpdate
     */
    description?: { [key: string]: string; };
    /**
     * If switching from a component with a lower tier to a component with a higher one, this is considered an upgrade and a fee may be applied.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    componentChangeWeight?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    version: number;
    /**
     * A maximum of the defined quantity can be selected for this component.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    maximalQuantity?: number;
    /**
     * Whether this is the default component in its group and preselected.
     * @type {boolean}
     * @memberof SubscriptionProductComponentUpdate
     */
    defaultComponent?: boolean;
    /**
     * A minimum of the defined quantity must be selected for this component.
     * @type {number}
     * @memberof SubscriptionProductComponentUpdate
     */
    minimalQuantity?: number;
}

/**
 * Check if a given object implements the SubscriptionProductComponentUpdate interface.
 */
export function instanceOfSubscriptionProductComponentUpdate(value: object): value is SubscriptionProductComponentUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriptionProductComponentUpdateFromJSON(json: any): SubscriptionProductComponentUpdate {
    return SubscriptionProductComponentUpdateFromJSONTyped(json, false);
}

export function SubscriptionProductComponentUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponentUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'taxClass': json['taxClass'] == null ? undefined : json['taxClass'],
        'quantityStep': json['quantityStep'] == null ? undefined : json['quantityStep'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'componentGroup': json['componentGroup'] == null ? undefined : json['componentGroup'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'componentChangeWeight': json['componentChangeWeight'] == null ? undefined : json['componentChangeWeight'],
        'version': json['version'],
        'maximalQuantity': json['maximalQuantity'] == null ? undefined : json['maximalQuantity'],
        'defaultComponent': json['defaultComponent'] == null ? undefined : json['defaultComponent'],
        'minimalQuantity': json['minimalQuantity'] == null ? undefined : json['minimalQuantity'],
    };
}

export function SubscriptionProductComponentUpdateToJSON(json: any): SubscriptionProductComponentUpdate {
    return SubscriptionProductComponentUpdateToJSONTyped(json, false);
}

export function SubscriptionProductComponentUpdateToJSONTyped(value?: SubscriptionProductComponentUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reference': value['reference'],
        'taxClass': value['taxClass'],
        'quantityStep': value['quantityStep'],
        'sortOrder': value['sortOrder'],
        'componentGroup': value['componentGroup'],
        'name': value['name'],
        'description': value['description'],
        'componentChangeWeight': value['componentChangeWeight'],
        'version': value['version'],
        'maximalQuantity': value['maximalQuantity'],
        'defaultComponent': value['defaultComponent'],
        'minimalQuantity': value['minimalQuantity'],
    };
}

