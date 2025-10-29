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
import type { PaymentTerminalReceiptType } from './PaymentTerminalReceiptType';
import {
    PaymentTerminalReceiptTypeFromJSON,
    PaymentTerminalReceiptTypeFromJSONTyped,
    PaymentTerminalReceiptTypeToJSON,
} from './PaymentTerminalReceiptType';

/**
 * 
 * @export
 * @interface RenderedTerminalReceipt
 */
export interface RenderedTerminalReceipt {
    /**
     * Whether the terminal's configuration mandates printing and the device has receipt printing capabilities.
     * @type {boolean}
     * @memberof RenderedTerminalReceipt
     */
    readonly printed?: boolean;
    /**
     * The receipt document data in binary format, presented as a Base64-encoded string.
     * @type {string}
     * @memberof RenderedTerminalReceipt
     */
    readonly data?: string;
    /**
     * 
     * @type {PaymentTerminalReceiptType}
     * @memberof RenderedTerminalReceipt
     */
    receiptType?: PaymentTerminalReceiptType;
    /**
     * The MIME type specifies the format of the receipt document and is determined by the requested format.
     * @type {string}
     * @memberof RenderedTerminalReceipt
     */
    readonly mimeType?: string;
}

/**
 * Check if a given object implements the RenderedTerminalReceipt interface.
 */
export function instanceOfRenderedTerminalReceipt(value: object): value is RenderedTerminalReceipt {
    return true;
}

export function RenderedTerminalReceiptFromJSON(json: any): RenderedTerminalReceipt {
    return RenderedTerminalReceiptFromJSONTyped(json, false);
}

export function RenderedTerminalReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderedTerminalReceipt {
    if (json == null) {
        return json;
    }
    return {
        
        'printed': json['printed'] == null ? undefined : json['printed'],
        'data': json['data'] == null ? undefined : json['data'],
        'receiptType': json['receiptType'] == null ? undefined : PaymentTerminalReceiptTypeFromJSON(json['receiptType']),
        'mimeType': json['mimeType'] == null ? undefined : json['mimeType'],
    };
}

export function RenderedTerminalReceiptToJSON(value?: Omit<RenderedTerminalReceipt, 'printed'|'data'|'mimeType'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'receiptType': PaymentTerminalReceiptTypeToJSON(value['receiptType']),
    };
}

