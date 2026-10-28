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
export const DeliveryDestination = {
    OnlyInside: 'ONLY_INSIDE',
    AllOfEurope: 'ALL_OF_EUROPE',
    Worldwide: 'WORLDWIDE'
} as const;
export type DeliveryDestination = typeof DeliveryDestination[keyof typeof DeliveryDestination];


export function instanceOfDeliveryDestination(value: any): boolean {
    for (const key in DeliveryDestination) {
        if (Object.prototype.hasOwnProperty.call(DeliveryDestination, key)) {
            if (DeliveryDestination[key as keyof typeof DeliveryDestination] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DeliveryDestinationFromJSON(json: any): DeliveryDestination {
    return DeliveryDestinationFromJSONTyped(json, false);
}

export function DeliveryDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryDestination {
    return json as DeliveryDestination;
}

export function DeliveryDestinationToJSON(value?: DeliveryDestination | null): any {
    return value as any;
}

export function DeliveryDestinationToJSONTyped(value: any, ignoreDiscriminator: boolean): DeliveryDestination {
    return value as DeliveryDestination;
}

