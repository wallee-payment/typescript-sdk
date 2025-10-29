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
 * @interface ResultPortionModel
 */
export interface ResultPortionModel {
    /**
     * 0-based offset of items.
     * @type {number}
     * @memberof ResultPortionModel
     */
    readonly offset?: number;
    /**
     * Amount of items in portion.
     * @type {number}
     * @memberof ResultPortionModel
     */
    readonly limit?: number;
    /**
     * Total count of items.
     * @type {number}
     * @memberof ResultPortionModel
     */
    readonly totalCount?: number;
    /**
     * Items of the result portion.
     * @type {Array<any>}
     * @memberof ResultPortionModel
     */
    readonly items?: Array<any>;
}

/**
 * Check if a given object implements the ResultPortionModel interface.
 */
export function instanceOfResultPortionModel(value: object): value is ResultPortionModel {
    return true;
}

export function ResultPortionModelFromJSON(json: any): ResultPortionModel {
    return ResultPortionModelFromJSONTyped(json, false);
}

export function ResultPortionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultPortionModel {
    if (json == null) {
        return json;
    }
    return {
        
        'offset': json['offset'] == null ? undefined : json['offset'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'items': json['items'] == null ? undefined : json['items'],
    };
}

export function ResultPortionModelToJSON(value?: Omit<ResultPortionModel, 'offset'|'limit'|'totalCount'|'items'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

