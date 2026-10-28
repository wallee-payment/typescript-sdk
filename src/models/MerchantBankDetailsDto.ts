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
import type { PayoutAccountInfo } from './PayoutAccountInfo';
import {
    PayoutAccountInfoFromJSON,
    PayoutAccountInfoFromJSONTyped,
    PayoutAccountInfoToJSON,
    PayoutAccountInfoToJSONTyped,
} from './PayoutAccountInfo';

/**
 * 
 * @export
 * @interface MerchantBankDetailsDto
 */
export interface MerchantBankDetailsDto {
    /**
     * Whether the merchant confirms direct ownership of the payout accounts.
     * @type {boolean}
     * @memberof MerchantBankDetailsDto
     */
    directAccountOwnershipConfirmed?: boolean;
    /**
     * The bank accounts where merchant payouts should be sent.
     * @type {Set<PayoutAccountInfo>}
     * @memberof MerchantBankDetailsDto
     */
    payoutAccounts?: Set<PayoutAccountInfo>;
}

/**
 * Check if a given object implements the MerchantBankDetailsDto interface.
 */
export function instanceOfMerchantBankDetailsDto(value: object): value is MerchantBankDetailsDto {
    return true;
}

export function MerchantBankDetailsDtoFromJSON(json: any): MerchantBankDetailsDto {
    return MerchantBankDetailsDtoFromJSONTyped(json, false);
}

export function MerchantBankDetailsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantBankDetailsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'directAccountOwnershipConfirmed': json['directAccountOwnershipConfirmed'] == null ? undefined : json['directAccountOwnershipConfirmed'],
        'payoutAccounts': json['payoutAccounts'] == null ? undefined : (new Set((json['payoutAccounts'] as Array<any>).map(PayoutAccountInfoFromJSON))),
    };
}

export function MerchantBankDetailsDtoToJSON(json: any): MerchantBankDetailsDto {
    return MerchantBankDetailsDtoToJSONTyped(json, false);
}

export function MerchantBankDetailsDtoToJSONTyped(value?: MerchantBankDetailsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'directAccountOwnershipConfirmed': value['directAccountOwnershipConfirmed'],
        'payoutAccounts': value['payoutAccounts'] == null ? undefined : (Array.from(value['payoutAccounts'] as Set<any>).map(PayoutAccountInfoToJSON)),
    };
}

