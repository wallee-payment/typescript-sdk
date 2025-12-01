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
import type { LocalizedString } from './LocalizedString';
import {
    LocalizedStringFromJSON,
    LocalizedStringFromJSONTyped,
    LocalizedStringToJSON,
    LocalizedStringToJSONTyped,
} from './LocalizedString';

/**
 * 
 * @export
 * @interface LegalOrganizationForm
 */
export interface LegalOrganizationForm {
    /**
     * The two-letter code of the country the legal organization form is used in (ISO 3166-1 alpha-2 format).
     * @type {string}
     * @memberof LegalOrganizationForm
     */
    readonly country?: string;
    /**
     * The localized shortcuts of the legal organization form.
     * @type {Set<LocalizedString>}
     * @memberof LegalOrganizationForm
     */
    readonly shortcut?: Set<LocalizedString>;
    /**
     * The English name of the legal organization form.
     * @type {string}
     * @memberof LegalOrganizationForm
     */
    readonly englishDescription?: string;
    /**
     * The localized descriptions of the legal organization form.
     * @type {Set<LocalizedString>}
     * @memberof LegalOrganizationForm
     */
    readonly description?: Set<LocalizedString>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof LegalOrganizationForm
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the LegalOrganizationForm interface.
 */
export function instanceOfLegalOrganizationForm(value: object): value is LegalOrganizationForm {
    return true;
}

export function LegalOrganizationFormFromJSON(json: any): LegalOrganizationForm {
    return LegalOrganizationFormFromJSONTyped(json, false);
}

export function LegalOrganizationFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegalOrganizationForm {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'shortcut': json['shortcut'] == null ? undefined : (new Set((json['shortcut'] as Array<any>).map(LocalizedStringFromJSON))),
        'englishDescription': json['englishDescription'] == null ? undefined : json['englishDescription'],
        'description': json['description'] == null ? undefined : (new Set((json['description'] as Array<any>).map(LocalizedStringFromJSON))),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function LegalOrganizationFormToJSON(json: any): LegalOrganizationForm {
    return LegalOrganizationFormToJSONTyped(json, false);
}

export function LegalOrganizationFormToJSONTyped(value?: Omit<LegalOrganizationForm, 'country'|'shortcut'|'englishDescription'|'description'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

