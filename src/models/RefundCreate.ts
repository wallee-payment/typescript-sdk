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
import type { RefundType } from './RefundType';
import {
    RefundTypeFromJSON,
    RefundTypeFromJSONTyped,
    RefundTypeToJSON,
} from './RefundType';
import type { LineItemReductionCreate } from './LineItemReductionCreate';
import {
    LineItemReductionCreateFromJSON,
    LineItemReductionCreateFromJSONTyped,
    LineItemReductionCreateToJSON,
} from './LineItemReductionCreate';

/**
 * A refund is a credit issued to the customer, which can be initiated either by the merchant or by the customer as a reversal.
 * @export
 * @interface RefundCreate
 */
export interface RefundCreate {
    /**
     * The transaction completion that the refund belongs to.
     * @type {number}
     * @memberof RefundCreate
     */
    completion?: number;
    /**
     * The total monetary amount of the refund, representing the exact credit issued to the customer.
     * @type {number}
     * @memberof RefundCreate
     */
    amount?: number;
    /**
     * The reductions applied on the original transaction items, detailing specific adjustments associated with the refund.
     * @type {Array<LineItemReductionCreate>}
     * @memberof RefundCreate
     */
    reductions?: Array<LineItemReductionCreate>;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof RefundCreate
     */
    externalId: string;
    /**
     * 
     * @type {RefundType}
     * @memberof RefundCreate
     */
    type: RefundType;
    /**
     * The merchant's reference used to identify the refund.
     * @type {string}
     * @memberof RefundCreate
     */
    merchantReference?: string;
    /**
     * The transaction that the refund belongs to.
     * @type {number}
     * @memberof RefundCreate
     */
    transaction?: number;
}

/**
 * Check if a given object implements the RefundCreate interface.
 */
export function instanceOfRefundCreate(value: object): value is RefundCreate {
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function RefundCreateFromJSON(json: any): RefundCreate {
    return RefundCreateFromJSONTyped(json, false);
}

export function RefundCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'completion': json['completion'] == null ? undefined : json['completion'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'reductions': json['reductions'] == null ? undefined : ((json['reductions'] as Array<any>).map(LineItemReductionCreateFromJSON)),
        'externalId': json['externalId'],
        'type': RefundTypeFromJSON(json['type']),
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
        'transaction': json['transaction'] == null ? undefined : json['transaction'],
    };
}

export function RefundCreateToJSON(value?: RefundCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'completion': value['completion'],
        'amount': value['amount'],
        'reductions': value['reductions'] == null ? undefined : ((value['reductions'] as Array<any>).map(LineItemReductionCreateToJSON)),
        'externalId': value['externalId'],
        'type': RefundTypeToJSON(value['type']),
        'merchantReference': value['merchantReference'],
        'transaction': value['transaction'],
    };
}

