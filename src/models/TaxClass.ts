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
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface TaxClass
 */
export interface TaxClass {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TaxClass
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the tax class.
     * @type {string}
     * @memberof TaxClass
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TaxClass
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TaxClass
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof TaxClass
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TaxClass
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the TaxClass interface.
 */
export function instanceOfTaxClass(value: object): value is TaxClass {
    return true;
}

export function TaxClassFromJSON(json: any): TaxClass {
    return TaxClassFromJSONTyped(json, false);
}

export function TaxClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxClass {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function TaxClassToJSON(value?: Omit<TaxClass, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

