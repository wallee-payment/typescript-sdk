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
import type { Feature } from './Feature';
import {
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
    FeatureToJSONTyped,
} from './Feature';

/**
 * 
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     * The group that this permission belongs to.
     * @type {number}
     * @memberof Permission
     */
    readonly parent?: number;
    /**
     * 
     * @type {Feature}
     * @memberof Permission
     */
    feature?: Feature;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof Permission
     */
    readonly name?: { [key: string]: string; };
    /**
     * All parents of this permission up to the root of the permission tree.
     * @type {Array<number>}
     * @memberof Permission
     */
    readonly pathToRoot?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof Permission
     */
    readonly webAppEnabled?: boolean;
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof Permission
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Permission
     */
    readonly id?: number;
    /**
     * Whether this is a leaf in the tree of permissions, and not a group.
     * @type {boolean}
     * @memberof Permission
     */
    readonly leaf?: boolean;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof Permission
     */
    readonly title?: { [key: string]: string; };
    /**
     * Whether this is a permission group.
     * @type {boolean}
     * @memberof Permission
     */
    readonly group?: boolean;
    /**
     * Whether users with this permission are required to enable two-factor authentication.
     * @type {boolean}
     * @memberof Permission
     */
    readonly twoFactorRequired?: boolean;
}

/**
 * Check if a given object implements the Permission interface.
 */
export function instanceOfPermission(value: object): value is Permission {
    return true;
}

export function PermissionFromJSON(json: any): Permission {
    return PermissionFromJSONTyped(json, false);
}

export function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission {
    if (json == null) {
        return json;
    }
    return {
        
        'parent': json['parent'] == null ? undefined : json['parent'],
        'feature': json['feature'] == null ? undefined : FeatureFromJSON(json['feature']),
        'name': json['name'] == null ? undefined : json['name'],
        'pathToRoot': json['pathToRoot'] == null ? undefined : json['pathToRoot'],
        'webAppEnabled': json['webAppEnabled'] == null ? undefined : json['webAppEnabled'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'leaf': json['leaf'] == null ? undefined : json['leaf'],
        'title': json['title'] == null ? undefined : json['title'],
        'group': json['group'] == null ? undefined : json['group'],
        'twoFactorRequired': json['twoFactorRequired'] == null ? undefined : json['twoFactorRequired'],
    };
}

export function PermissionToJSON(json: any): Permission {
    return PermissionToJSONTyped(json, false);
}

export function PermissionToJSONTyped(value?: Omit<Permission, 'parent'|'name'|'pathToRoot'|'webAppEnabled'|'description'|'id'|'leaf'|'title'|'group'|'twoFactorRequired'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'feature': FeatureToJSON(value['feature']),
    };
}

