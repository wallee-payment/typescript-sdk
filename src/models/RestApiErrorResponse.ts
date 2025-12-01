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
 * @interface RestApiErrorResponse
 */
export interface RestApiErrorResponse {
    /**
     * The date and time when the error occurred.
     * @type {Date}
     * @memberof RestApiErrorResponse
     */
    readonly date?: Date;
    /**
     * A brief explanation of the error that can be used to programmatically handle it.
     * @type {string}
     * @memberof RestApiErrorResponse
     */
    readonly code?: string;
    /**
     * The unique identifier of the error.
     * @type {string}
     * @memberof RestApiErrorResponse
     */
    readonly id?: string;
    /**
     * A human-readable message providing more details about the error.
     * @type {string}
     * @memberof RestApiErrorResponse
     */
    readonly message?: string;
    /**
     * A map of errors where the key represents the error identifier (such as field name or error context) and the value contains the detailed error message.
     * @type {{ [key: string]: string; }}
     * @memberof RestApiErrorResponse
     */
    readonly errors?: { [key: string]: string; };
}

/**
 * Check if a given object implements the RestApiErrorResponse interface.
 */
export function instanceOfRestApiErrorResponse(value: object): value is RestApiErrorResponse {
    return true;
}

export function RestApiErrorResponseFromJSON(json: any): RestApiErrorResponse {
    return RestApiErrorResponseFromJSONTyped(json, false);
}

export function RestApiErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestApiErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
        'code': json['code'] == null ? undefined : json['code'],
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function RestApiErrorResponseToJSON(json: any): RestApiErrorResponse {
    return RestApiErrorResponseToJSONTyped(json, false);
}

export function RestApiErrorResponseToJSONTyped(value?: Omit<RestApiErrorResponse, 'date'|'code'|'id'|'message'|'errors'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

