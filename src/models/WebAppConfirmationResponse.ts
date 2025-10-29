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
import type { Space } from './Space';
import {
    SpaceFromJSON,
    SpaceFromJSONTyped,
    SpaceToJSON,
} from './Space';

/**
 * The confirmation response provides details about the installation of the web app.
 * @export
 * @interface WebAppConfirmationResponse
 */
export interface WebAppConfirmationResponse {
    /**
     * The access code granting permissions to the web service API according to the OAuth standard.
     * @type {string}
     * @memberof WebAppConfirmationResponse
     */
    readonly accessToken?: string;
    /**
     * The list of the permissions granted to the web app within the space.
     * @type {string}
     * @memberof WebAppConfirmationResponse
     */
    readonly scope?: string;
    /**
     * The state parameter that was provided in the authorization request.
     * @type {string}
     * @memberof WebAppConfirmationResponse
     */
    readonly state?: string;
    /**
     * The type of the access token that determines the authentication mechanism to use for accessing the web service API.
     * @type {string}
     * @memberof WebAppConfirmationResponse
     */
    readonly tokenType?: string;
    /**
     * 
     * @type {Space}
     * @memberof WebAppConfirmationResponse
     */
    space?: Space;
}

/**
 * Check if a given object implements the WebAppConfirmationResponse interface.
 */
export function instanceOfWebAppConfirmationResponse(value: object): value is WebAppConfirmationResponse {
    return true;
}

export function WebAppConfirmationResponseFromJSON(json: any): WebAppConfirmationResponse {
    return WebAppConfirmationResponseFromJSONTyped(json, false);
}

export function WebAppConfirmationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebAppConfirmationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['access_token'] == null ? undefined : json['access_token'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'state': json['state'] == null ? undefined : json['state'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'space': json['space'] == null ? undefined : SpaceFromJSON(json['space']),
    };
}

export function WebAppConfirmationResponseToJSON(value?: Omit<WebAppConfirmationResponse, 'access_token'|'scope'|'state'|'token_type'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'space': SpaceToJSON(value['space']),
    };
}

