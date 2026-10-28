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

/**
 * 
 * @export
 */
export const SalesChannel = {
    Terminal: 'TERMINAL',
    Ecommerce: 'ECOMMERCE'
} as const;
export type SalesChannel = typeof SalesChannel[keyof typeof SalesChannel];


export function instanceOfSalesChannel(value: any): boolean {
    for (const key in SalesChannel) {
        if (Object.prototype.hasOwnProperty.call(SalesChannel, key)) {
            if (SalesChannel[key as keyof typeof SalesChannel] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SalesChannelFromJSON(json: any): SalesChannel {
    return SalesChannelFromJSONTyped(json, false);
}

export function SalesChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesChannel {
    return json as SalesChannel;
}

export function SalesChannelToJSON(value?: SalesChannel | null): any {
    return value as any;
}

export function SalesChannelToJSONTyped(value: any, ignoreDiscriminator: boolean): SalesChannel {
    return value as SalesChannel;
}

