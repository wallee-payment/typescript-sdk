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
import type { BankTransaction } from './BankTransaction';
import {
    BankTransactionFromJSON,
    BankTransactionFromJSONTyped,
    BankTransactionToJSON,
} from './BankTransaction';

/**
 * 
 * @export
 * @interface ExternalTransferBankTransaction
 */
export interface ExternalTransferBankTransaction {
    /**
     * The external bank account's name.
     * @type {string}
     * @memberof ExternalTransferBankTransaction
     */
    readonly externalBankName?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ExternalTransferBankTransaction
     */
    readonly linkedSpaceId?: number;
    /**
     * The identifier is used to uniquely identify the external bank account.
     * @type {string}
     * @memberof ExternalTransferBankTransaction
     */
    readonly externalAccountIdentifier?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ExternalTransferBankTransaction
     */
    readonly id?: number;
    /**
     * 
     * @type {BankTransaction}
     * @memberof ExternalTransferBankTransaction
     */
    bankTransaction?: BankTransaction;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ExternalTransferBankTransaction
     */
    readonly version?: number;
    /**
     * The external bank account's type.
     * @type {string}
     * @memberof ExternalTransferBankTransaction
     */
    readonly externalAccountType?: string;
}

/**
 * Check if a given object implements the ExternalTransferBankTransaction interface.
 */
export function instanceOfExternalTransferBankTransaction(value: object): value is ExternalTransferBankTransaction {
    return true;
}

export function ExternalTransferBankTransactionFromJSON(json: any): ExternalTransferBankTransaction {
    return ExternalTransferBankTransactionFromJSONTyped(json, false);
}

export function ExternalTransferBankTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalTransferBankTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'externalBankName': json['externalBankName'] == null ? undefined : json['externalBankName'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'externalAccountIdentifier': json['externalAccountIdentifier'] == null ? undefined : json['externalAccountIdentifier'],
        'id': json['id'] == null ? undefined : json['id'],
        'bankTransaction': json['bankTransaction'] == null ? undefined : BankTransactionFromJSON(json['bankTransaction']),
        'version': json['version'] == null ? undefined : json['version'],
        'externalAccountType': json['externalAccountType'] == null ? undefined : json['externalAccountType'],
    };
}

export function ExternalTransferBankTransactionToJSON(value?: Omit<ExternalTransferBankTransaction, 'externalBankName'|'linkedSpaceId'|'externalAccountIdentifier'|'id'|'version'|'externalAccountType'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bankTransaction': BankTransactionToJSON(value['bankTransaction']),
    };
}

