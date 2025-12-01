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
 * @interface LabelDescriptorGroup
 */
export interface LabelDescriptorGroup {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof LabelDescriptorGroup
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof LabelDescriptorGroup
     */
    readonly description?: { [key: string]: string; };
    /**
     * When listing label groups, they can be sorted by this number.
     * @type {number}
     * @memberof LabelDescriptorGroup
     */
    readonly weight?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof LabelDescriptorGroup
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the LabelDescriptorGroup interface.
 */
export function instanceOfLabelDescriptorGroup(value: object): value is LabelDescriptorGroup {
    return true;
}

export function LabelDescriptorGroupFromJSON(json: any): LabelDescriptorGroup {
    return LabelDescriptorGroupFromJSONTyped(json, false);
}

export function LabelDescriptorGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelDescriptorGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'weight': json['weight'] == null ? undefined : json['weight'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function LabelDescriptorGroupToJSON(json: any): LabelDescriptorGroup {
    return LabelDescriptorGroupToJSONTyped(json, false);
}

export function LabelDescriptorGroupToJSONTyped(value?: Omit<LabelDescriptorGroup, 'name'|'description'|'weight'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

