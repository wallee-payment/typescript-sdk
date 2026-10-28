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
import type { DunningCaseLevel } from './DunningCaseLevel';
import {
    DunningCaseLevelFromJSON,
    DunningCaseLevelFromJSONTyped,
    DunningCaseLevelToJSON,
    DunningCaseLevelToJSONTyped,
} from './DunningCaseLevel';

/**
 * 
 * @export
 * @interface DunningCaseLevelSearchResponse
 */
export interface DunningCaseLevelSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<DunningCaseLevel>}
     * @memberof DunningCaseLevelSearchResponse
     */
    readonly data?: Array<DunningCaseLevel>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof DunningCaseLevelSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof DunningCaseLevelSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof DunningCaseLevelSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the DunningCaseLevelSearchResponse interface.
 */
export function instanceOfDunningCaseLevelSearchResponse(value: object): value is DunningCaseLevelSearchResponse {
    return true;
}

export function DunningCaseLevelSearchResponseFromJSON(json: any): DunningCaseLevelSearchResponse {
    return DunningCaseLevelSearchResponseFromJSONTyped(json, false);
}

export function DunningCaseLevelSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningCaseLevelSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(DunningCaseLevelFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function DunningCaseLevelSearchResponseToJSON(json: any): DunningCaseLevelSearchResponse {
    return DunningCaseLevelSearchResponseToJSONTyped(json, false);
}

export function DunningCaseLevelSearchResponseToJSONTyped(value?: Omit<DunningCaseLevelSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

