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
/**
 * 
 * @export
 * @interface ExpressCheckoutCreateResponse
 */
export interface ExpressCheckoutCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof ExpressCheckoutCreateResponse
     */
    iframeSrc?: string;
    /**
     * 
     * @type {number}
     * @memberof ExpressCheckoutCreateResponse
     */
    session?: number;
}

/**
 * Check if a given object implements the ExpressCheckoutCreateResponse interface.
 */
export function instanceOfExpressCheckoutCreateResponse(value: object): value is ExpressCheckoutCreateResponse {
    return true;
}

export function ExpressCheckoutCreateResponseFromJSON(json: any): ExpressCheckoutCreateResponse {
    return ExpressCheckoutCreateResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'iframeSrc': json['iframeSrc'] == null ? undefined : json['iframeSrc'],
        'session': json['session'] == null ? undefined : json['session'],
    };
}

export function ExpressCheckoutCreateResponseToJSON(value?: ExpressCheckoutCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iframeSrc': value['iframeSrc'],
        'session': value['session'],
    };
}

