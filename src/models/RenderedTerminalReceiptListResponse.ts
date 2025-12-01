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
import type { RenderedTerminalReceipt } from './RenderedTerminalReceipt';
import {
    RenderedTerminalReceiptFromJSON,
    RenderedTerminalReceiptFromJSONTyped,
    RenderedTerminalReceiptToJSON,
    RenderedTerminalReceiptToJSONTyped,
} from './RenderedTerminalReceipt';

/**
 * 
 * @export
 * @interface RenderedTerminalReceiptListResponse
 */
export interface RenderedTerminalReceiptListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<RenderedTerminalReceipt>}
     * @memberof RenderedTerminalReceiptListResponse
     */
    readonly data?: Array<RenderedTerminalReceipt>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof RenderedTerminalReceiptListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof RenderedTerminalReceiptListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the RenderedTerminalReceiptListResponse interface.
 */
export function instanceOfRenderedTerminalReceiptListResponse(value: object): value is RenderedTerminalReceiptListResponse {
    return true;
}

export function RenderedTerminalReceiptListResponseFromJSON(json: any): RenderedTerminalReceiptListResponse {
    return RenderedTerminalReceiptListResponseFromJSONTyped(json, false);
}

export function RenderedTerminalReceiptListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderedTerminalReceiptListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(RenderedTerminalReceiptFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function RenderedTerminalReceiptListResponseToJSON(json: any): RenderedTerminalReceiptListResponse {
    return RenderedTerminalReceiptListResponseToJSONTyped(json, false);
}

export function RenderedTerminalReceiptListResponseToJSONTyped(value?: Omit<RenderedTerminalReceiptListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

