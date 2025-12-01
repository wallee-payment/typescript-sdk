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
export const TokenVersionRetryStrategy = {
    NoRetry: 'NO_RETRY',
    RetryLater: 'RETRY_LATER',
    RefreshToken: 'REFRESH_TOKEN'
} as const;
export type TokenVersionRetryStrategy = typeof TokenVersionRetryStrategy[keyof typeof TokenVersionRetryStrategy];


export function instanceOfTokenVersionRetryStrategy(value: any): boolean {
    for (const key in TokenVersionRetryStrategy) {
        if (Object.prototype.hasOwnProperty.call(TokenVersionRetryStrategy, key)) {
            if (TokenVersionRetryStrategy[key as keyof typeof TokenVersionRetryStrategy] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TokenVersionRetryStrategyFromJSON(json: any): TokenVersionRetryStrategy {
    return TokenVersionRetryStrategyFromJSONTyped(json, false);
}

export function TokenVersionRetryStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVersionRetryStrategy {
    return json as TokenVersionRetryStrategy;
}

export function TokenVersionRetryStrategyToJSON(value?: TokenVersionRetryStrategy | null): any {
    return value as any;
}

export function TokenVersionRetryStrategyToJSONTyped(value: any, ignoreDiscriminator: boolean): TokenVersionRetryStrategy {
    return value as TokenVersionRetryStrategy;
}

