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
 * @interface RenderedTerminalTransactionSummary
 */
export interface RenderedTerminalTransactionSummary {
    /**
     * The data property contains the binary data of the receipt document encoded as base 64 encoded string.
     * @type {string}
     * @memberof RenderedTerminalTransactionSummary
     */
    readonly data?: string;
    /**
     * The mime type indicates the format of the receipt document. The mime type depends on the requested receipt format.
     * @type {string}
     * @memberof RenderedTerminalTransactionSummary
     */
    readonly mimeType?: string;
}

/**
 * Check if a given object implements the RenderedTerminalTransactionSummary interface.
 */
export function instanceOfRenderedTerminalTransactionSummary(value: object): value is RenderedTerminalTransactionSummary {
    return true;
}

export function RenderedTerminalTransactionSummaryFromJSON(json: any): RenderedTerminalTransactionSummary {
    return RenderedTerminalTransactionSummaryFromJSONTyped(json, false);
}

export function RenderedTerminalTransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderedTerminalTransactionSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : json['data'],
        'mimeType': json['mimeType'] == null ? undefined : json['mimeType'],
    };
}

export function RenderedTerminalTransactionSummaryToJSON(json: any): RenderedTerminalTransactionSummary {
    return RenderedTerminalTransactionSummaryToJSONTyped(json, false);
}

export function RenderedTerminalTransactionSummaryToJSONTyped(value?: Omit<RenderedTerminalTransactionSummary, 'data'|'mimeType'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

