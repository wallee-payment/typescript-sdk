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
export const CardAuthenticationVersion = {
    V1: 'V1',
    V2: 'V2'
} as const;
export type CardAuthenticationVersion = typeof CardAuthenticationVersion[keyof typeof CardAuthenticationVersion];


export function instanceOfCardAuthenticationVersion(value: any): boolean {
    for (const key in CardAuthenticationVersion) {
        if (Object.prototype.hasOwnProperty.call(CardAuthenticationVersion, key)) {
            if (CardAuthenticationVersion[key as keyof typeof CardAuthenticationVersion] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CardAuthenticationVersionFromJSON(json: any): CardAuthenticationVersion {
    return CardAuthenticationVersionFromJSONTyped(json, false);
}

export function CardAuthenticationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardAuthenticationVersion {
    return json as CardAuthenticationVersion;
}

export function CardAuthenticationVersionToJSON(value?: CardAuthenticationVersion | null): any {
    return value as any;
}

export function CardAuthenticationVersionToJSONTyped(value: any, ignoreDiscriminator: boolean): CardAuthenticationVersion {
    return value as CardAuthenticationVersion;
}

