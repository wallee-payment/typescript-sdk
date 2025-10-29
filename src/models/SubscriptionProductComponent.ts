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
import type { SubscriptionProductComponentReference } from './SubscriptionProductComponentReference';
import {
    SubscriptionProductComponentReferenceFromJSON,
    SubscriptionProductComponentReferenceFromJSONTyped,
    SubscriptionProductComponentReferenceToJSON,
} from './SubscriptionProductComponentReference';
import type { SubscriptionProductComponentGroup } from './SubscriptionProductComponentGroup';
import {
    SubscriptionProductComponentGroupFromJSON,
    SubscriptionProductComponentGroupFromJSONTyped,
    SubscriptionProductComponentGroupToJSON,
} from './SubscriptionProductComponentGroup';
import type { TaxClass } from './TaxClass';
import {
    TaxClassFromJSON,
    TaxClassFromJSONTyped,
    TaxClassToJSON,
} from './TaxClass';

/**
 * 
 * @export
 * @interface SubscriptionProductComponent
 */
export interface SubscriptionProductComponent {
    /**
     * 
     * @type {TaxClass}
     * @memberof SubscriptionProductComponent
     */
    taxClass?: TaxClass;
    /**
     * The localized description of the component that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponent
     */
    readonly description?: { [key: string]: string; };
    /**
     * If switching from a component with a lower tier to a component with a higher one, this is considered an upgrade and a fee may be applied.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly componentChangeWeight?: number;
    /**
     * A maximum of the defined quantity can be selected for this component.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly maximalQuantity?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly version?: number;
    /**
     * A minimum of the defined quantity must be selected for this component.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly minimalQuantity?: number;
    /**
     * 
     * @type {SubscriptionProductComponentReference}
     * @memberof SubscriptionProductComponent
     */
    reference?: SubscriptionProductComponentReference;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly linkedSpaceId?: number;
    /**
     * The quantity step determines the interval in which the quantity can be increased.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly quantityStep?: number;
    /**
     * When listing components, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly sortOrder?: number;
    /**
     * 
     * @type {SubscriptionProductComponentGroup}
     * @memberof SubscriptionProductComponent
     */
    componentGroup?: SubscriptionProductComponentGroup;
    /**
     * The localized name of the component that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponent
     */
    readonly name?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductComponent
     */
    readonly id?: number;
    /**
     * Whether this is the default component in its group and preselected.
     * @type {boolean}
     * @memberof SubscriptionProductComponent
     */
    readonly defaultComponent?: boolean;
}

/**
 * Check if a given object implements the SubscriptionProductComponent interface.
 */
export function instanceOfSubscriptionProductComponent(value: object): value is SubscriptionProductComponent {
    return true;
}

export function SubscriptionProductComponentFromJSON(json: any): SubscriptionProductComponent {
    return SubscriptionProductComponentFromJSONTyped(json, false);
}

export function SubscriptionProductComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'taxClass': json['taxClass'] == null ? undefined : TaxClassFromJSON(json['taxClass']),
        'description': json['description'] == null ? undefined : json['description'],
        'componentChangeWeight': json['componentChangeWeight'] == null ? undefined : json['componentChangeWeight'],
        'maximalQuantity': json['maximalQuantity'] == null ? undefined : json['maximalQuantity'],
        'version': json['version'] == null ? undefined : json['version'],
        'minimalQuantity': json['minimalQuantity'] == null ? undefined : json['minimalQuantity'],
        'reference': json['reference'] == null ? undefined : SubscriptionProductComponentReferenceFromJSON(json['reference']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'quantityStep': json['quantityStep'] == null ? undefined : json['quantityStep'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'componentGroup': json['componentGroup'] == null ? undefined : SubscriptionProductComponentGroupFromJSON(json['componentGroup']),
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'defaultComponent': json['defaultComponent'] == null ? undefined : json['defaultComponent'],
    };
}

export function SubscriptionProductComponentToJSON(value?: Omit<SubscriptionProductComponent, 'description'|'componentChangeWeight'|'maximalQuantity'|'version'|'minimalQuantity'|'linkedSpaceId'|'quantityStep'|'sortOrder'|'name'|'id'|'defaultComponent'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'taxClass': TaxClassToJSON(value['taxClass']),
        'reference': SubscriptionProductComponentReferenceToJSON(value['reference']),
        'componentGroup': SubscriptionProductComponentGroupToJSON(value['componentGroup']),
    };
}

