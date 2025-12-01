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
export const ConnectorInvocationStage = {
    PaymentMethodList: 'PAYMENT_METHOD_LIST',
    FormGeneration: 'FORM_GENERATION',
    Validation: 'VALIDATION',
    Authorization: 'AUTHORIZATION'
} as const;
export type ConnectorInvocationStage = typeof ConnectorInvocationStage[keyof typeof ConnectorInvocationStage];


export function instanceOfConnectorInvocationStage(value: any): boolean {
    for (const key in ConnectorInvocationStage) {
        if (Object.prototype.hasOwnProperty.call(ConnectorInvocationStage, key)) {
            if (ConnectorInvocationStage[key as keyof typeof ConnectorInvocationStage] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConnectorInvocationStageFromJSON(json: any): ConnectorInvocationStage {
    return ConnectorInvocationStageFromJSONTyped(json, false);
}

export function ConnectorInvocationStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorInvocationStage {
    return json as ConnectorInvocationStage;
}

export function ConnectorInvocationStageToJSON(value?: ConnectorInvocationStage | null): any {
    return value as any;
}

export function ConnectorInvocationStageToJSONTyped(value: any, ignoreDiscriminator: boolean): ConnectorInvocationStage {
    return value as ConnectorInvocationStage;
}

