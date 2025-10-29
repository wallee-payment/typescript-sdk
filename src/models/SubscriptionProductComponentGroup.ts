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
import type { SubscriptionProductVersion } from './SubscriptionProductVersion';
import {
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionFromJSONTyped,
    SubscriptionProductVersionToJSON,
} from './SubscriptionProductVersion';

/**
 * 
 * @export
 * @interface SubscriptionProductComponentGroup
 */
export interface SubscriptionProductComponentGroup {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {SubscriptionProductVersion}
     * @memberof SubscriptionProductComponentGroup
     */
    productVersion?: SubscriptionProductVersion;
    /**
     * When listing component groups, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly sortOrder?: number;
    /**
     * The localized name of the component group that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly name?: { [key: string]: string; };
    /**
     * Whether the component group is optional, i.e. the customer does not have to select any component.
     * @type {boolean}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly optional?: boolean;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProductComponentGroup
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionProductComponentGroup interface.
 */
export function instanceOfSubscriptionProductComponentGroup(value: object): value is SubscriptionProductComponentGroup {
    return true;
}

export function SubscriptionProductComponentGroupFromJSON(json: any): SubscriptionProductComponentGroup {
    return SubscriptionProductComponentGroupFromJSONTyped(json, false);
}

export function SubscriptionProductComponentGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponentGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'productVersion': json['productVersion'] == null ? undefined : SubscriptionProductVersionFromJSON(json['productVersion']),
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'optional': json['optional'] == null ? undefined : json['optional'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionProductComponentGroupToJSON(value?: Omit<SubscriptionProductComponentGroup, 'linkedSpaceId'|'sortOrder'|'name'|'optional'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'productVersion': SubscriptionProductVersionToJSON(value['productVersion']),
    };
}

