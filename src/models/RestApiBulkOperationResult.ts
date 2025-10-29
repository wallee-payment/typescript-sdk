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
import type { RestApiErrorResponse } from './RestApiErrorResponse';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseFromJSONTyped,
    RestApiErrorResponseToJSON,
} from './RestApiErrorResponse';

/**
 * Represents the result of a single operation in a bulk request.
 * @export
 * @interface RestApiBulkOperationResult
 */
export interface RestApiBulkOperationResult {
    /**
     * The API path to call to get the processed object.
     * @type {string}
     * @memberof RestApiBulkOperationResult
     */
    readonly link?: string;
    /**
     * The ID of the processed object.
     * @type {number}
     * @memberof RestApiBulkOperationResult
     */
    readonly id?: number;
    /**
     * 
     * @type {RestApiErrorResponse}
     * @memberof RestApiBulkOperationResult
     */
    error?: RestApiErrorResponse;
    /**
     * The resulting HTTP status code of the single operation.
     * @type {number}
     * @memberof RestApiBulkOperationResult
     */
    readonly statusCode?: number;
}

/**
 * Check if a given object implements the RestApiBulkOperationResult interface.
 */
export function instanceOfRestApiBulkOperationResult(value: object): value is RestApiBulkOperationResult {
    return true;
}

export function RestApiBulkOperationResultFromJSON(json: any): RestApiBulkOperationResult {
    return RestApiBulkOperationResultFromJSONTyped(json, false);
}

export function RestApiBulkOperationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestApiBulkOperationResult {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'id': json['id'] == null ? undefined : json['id'],
        'error': json['error'] == null ? undefined : RestApiErrorResponseFromJSON(json['error']),
        'statusCode': json['statusCode'] == null ? undefined : json['statusCode'],
    };
}

export function RestApiBulkOperationResultToJSON(value?: Omit<RestApiBulkOperationResult, 'link'|'id'|'statusCode'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': RestApiErrorResponseToJSON(value['error']),
    };
}

