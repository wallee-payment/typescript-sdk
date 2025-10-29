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
import type { LegalOrganizationForm } from './LegalOrganizationForm';
import {
    LegalOrganizationFormFromJSON,
    LegalOrganizationFormFromJSONTyped,
    LegalOrganizationFormToJSON,
} from './LegalOrganizationForm';

/**
 * 
 * @export
 * @interface LegalOrganizationFormListResponse
 */
export interface LegalOrganizationFormListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<LegalOrganizationForm>}
     * @memberof LegalOrganizationFormListResponse
     */
    readonly data?: Array<LegalOrganizationForm>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof LegalOrganizationFormListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof LegalOrganizationFormListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the LegalOrganizationFormListResponse interface.
 */
export function instanceOfLegalOrganizationFormListResponse(value: object): value is LegalOrganizationFormListResponse {
    return true;
}

export function LegalOrganizationFormListResponseFromJSON(json: any): LegalOrganizationFormListResponse {
    return LegalOrganizationFormListResponseFromJSONTyped(json, false);
}

export function LegalOrganizationFormListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegalOrganizationFormListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(LegalOrganizationFormFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function LegalOrganizationFormListResponseToJSON(value?: Omit<LegalOrganizationFormListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

