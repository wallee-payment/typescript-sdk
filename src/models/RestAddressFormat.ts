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
import type { RestAddressFormatField } from './RestAddressFormatField';
import {
    RestAddressFormatFieldFromJSON,
    RestAddressFormatFieldFromJSONTyped,
    RestAddressFormatFieldToJSON,
} from './RestAddressFormatField';

/**
 * 
 * @export
 * @interface RestAddressFormat
 */
export interface RestAddressFormat {
    /**
     * A list of sample post codes.
     * @type {Array<string>}
     * @memberof RestAddressFormat
     */
    readonly postCodeExamples?: Array<string>;
    /**
     * The fields that are required in the address format.
     * @type {Set<RestAddressFormatField>}
     * @memberof RestAddressFormat
     */
    readonly requiredFields?: Set<RestAddressFormatField>;
    /**
     * The fields that are used in the address format.
     * @type {Set<RestAddressFormatField>}
     * @memberof RestAddressFormat
     */
    readonly usedFields?: Set<RestAddressFormatField>;
    /**
     * The regular expression to validate post codes.
     * @type {string}
     * @memberof RestAddressFormat
     */
    readonly postCodeRegex?: string;
}

/**
 * Check if a given object implements the RestAddressFormat interface.
 */
export function instanceOfRestAddressFormat(value: object): value is RestAddressFormat {
    return true;
}

export function RestAddressFormatFromJSON(json: any): RestAddressFormat {
    return RestAddressFormatFromJSONTyped(json, false);
}

export function RestAddressFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestAddressFormat {
    if (json == null) {
        return json;
    }
    return {
        
        'postCodeExamples': json['postCodeExamples'] == null ? undefined : json['postCodeExamples'],
        'requiredFields': json['requiredFields'] == null ? undefined : (new Set((json['requiredFields'] as Array<any>).map(RestAddressFormatFieldFromJSON))),
        'usedFields': json['usedFields'] == null ? undefined : (new Set((json['usedFields'] as Array<any>).map(RestAddressFormatFieldFromJSON))),
        'postCodeRegex': json['postCodeRegex'] == null ? undefined : json['postCodeRegex'],
    };
}

export function RestAddressFormatToJSON(value?: Omit<RestAddressFormat, 'postCodeExamples'|'requiredFields'|'usedFields'|'postCodeRegex'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

