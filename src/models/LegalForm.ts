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
export const LegalForm = {
    SoleProprietorship: 'SOLE_PROPRIETORSHIP',
    Cooperative: 'COOPERATIVE',
    PartnershipLimitedByShares: 'PARTNERSHIP_LIMITED_BY_SHARES',
    CompanyLimitedByShares: 'COMPANY_LIMITED_BY_SHARES',
    LimitedLiabilityCompany: 'LIMITED_LIABILITY_COMPANY',
    Association: 'ASSOCIATION',
    Foundation: 'FOUNDATION',
    PublicInstitution: 'PUBLIC_INSTITUTION',
    GeneralPartnership: 'GENERAL_PARTNERSHIP',
    NonDefinedLegalForm: 'NON_DEFINED_LEGAL_FORM',
    PublicAgCorporation: 'PUBLIC_AG_CORPORATION',
    PublicLimitedLiabilityCompany: 'PUBLIC_LIMITED_LIABILITY_COMPANY',
    BodyCorporate: 'BODY_CORPORATE',
    PublicCooperative: 'PUBLIC_COOPERATIVE',
    PublicAssociation: 'PUBLIC_ASSOCIATION',
    SpecialLegalForm: 'SPECIAL_LEGAL_FORM',
    LimitedPartnershipCollectiveInvestment: 'LIMITED_PARTNERSHIP_COLLECTIVE_INVESTMENT',
    SimplePartnership: 'SIMPLE_PARTNERSHIP',
    InternationalOrganization: 'INTERNATIONAL_ORGANIZATION',
    Trust: 'TRUST',
    Fund: 'FUND',
    EuropeanCompany: 'EUROPEAN_COMPANY',
    LimitedPartnership: 'LIMITED_PARTNERSHIP',
    SimplifiedLimitedLiabilityCompany: 'SIMPLIFIED_LIMITED_LIABILITY_COMPANY',
    CivilCompany: 'CIVIL_COMPANY',
    AgriculturalAssociation: 'AGRICULTURAL_ASSOCIATION',
    EconomicInterestGroup: 'ECONOMIC_INTEREST_GROUP',
    EuropeanCooperativeSociety: 'EUROPEAN_COOPERATIVE_SOCIETY',
    EuropeanEconomicInterestGroup: 'EUROPEAN_ECONOMIC_INTEREST_GROUP',
    Franchising: 'FRANCHISING',
    SimplifiedShareholderCompany: 'SIMPLIFIED_SHAREHOLDER_COMPANY',
    SingleMemberLimitedLiabilityCompany: 'SINGLE_MEMBER_LIMITED_LIABILITY_COMPANY',
    SocietalImpactCompany: 'SOCIETAL_IMPACT_COMPANY',
    SpecialLimitedPartnership: 'SPECIAL_LIMITED_PARTNERSHIP',
    TemporaryPartnership: 'TEMPORARY_PARTNERSHIP'
} as const;
export type LegalForm = typeof LegalForm[keyof typeof LegalForm];


export function instanceOfLegalForm(value: any): boolean {
    for (const key in LegalForm) {
        if (Object.prototype.hasOwnProperty.call(LegalForm, key)) {
            if (LegalForm[key as keyof typeof LegalForm] === value) {
                return true;
            }
        }
    }
    return false;
}

export function LegalFormFromJSON(json: any): LegalForm {
    return LegalFormFromJSONTyped(json, false);
}

export function LegalFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegalForm {
    return json as LegalForm;
}

export function LegalFormToJSON(value?: LegalForm | null): any {
    return value as any;
}

export function LegalFormToJSONTyped(value: any, ignoreDiscriminator: boolean): LegalForm {
    return value as LegalForm;
}

