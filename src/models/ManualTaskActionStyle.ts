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
export const ManualTaskActionStyle = {
    Default: 'DEFAULT',
    Primary: 'PRIMARY',
    Danger: 'DANGER'
} as const;
export type ManualTaskActionStyle = typeof ManualTaskActionStyle[keyof typeof ManualTaskActionStyle];


export function instanceOfManualTaskActionStyle(value: any): boolean {
    for (const key in ManualTaskActionStyle) {
        if (Object.prototype.hasOwnProperty.call(ManualTaskActionStyle, key)) {
            if (ManualTaskActionStyle[key as keyof typeof ManualTaskActionStyle] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ManualTaskActionStyleFromJSON(json: any): ManualTaskActionStyle {
    return ManualTaskActionStyleFromJSONTyped(json, false);
}

export function ManualTaskActionStyleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualTaskActionStyle {
    return json as ManualTaskActionStyle;
}

export function ManualTaskActionStyleToJSON(value?: ManualTaskActionStyle | null): any {
    return value as any;
}

