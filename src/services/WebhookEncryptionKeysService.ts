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

import * as runtime from '../runtime';
import type {
  RestApiErrorResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import { EncryptionUtil } from '../utils/EncryptionUtil';
import { WalleeSdkException } from "../models/WalleeSdkException";
import { SdkExceptionErrorCodes } from "../models/SdkExceptionErrorCodes";
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetWebhooksEncryptionKeysIdRequest {
    id: string;
}

/**
 * 
 */
export class WebhookEncryptionKeysService extends runtime.BaseAPI {
    protected static cache: Map<string, string> = new Map();

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Retrieve a webhook encryption key
     
     */
    async getWebhooksEncryptionKeysIdRaw(requestParameters: GetWebhooksEncryptionKeysIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getWebhooksEncryptionKeysId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/webhooks/encryption-keys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/encryption-keys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieve a webhook encryption key
     
     */
    async getWebhooksEncryptionKeysId(requestParameters: GetWebhooksEncryptionKeysIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getWebhooksEncryptionKeysIdRaw(requestParameters, initOverrides);
        return await response.value();
    }


    /**
     * Verifies the webhook content signature using the retrieved public key
     */
    public async isContentValid(signatureHeader: string, contentToVerify: string): Promise<boolean> {
        // Regular expression to extract algorithm, keyId, and signature from the signatureHeader
        const regex = /^.*,\s*keyId=([a-zA-Z0-9\-]+),\s*signature=([a-zA-Z0-9+/=]+)$/;
        const match = signatureHeader.match(regex);

        if (!match) {
            throw new WalleeSdkException(
                    SdkExceptionErrorCodes.INVALID_WEBHOOK_ENCRYPTION_HEADER_FORMAT,
                    "Invalid webhook encryption header format. Expected format: 'algorithm=<algorithm>, keyId=<keyId>, signature=<signature>'"
                  );
        }

        const publicKeyId = match[1];
        const contentSignature = match[2];

        try {
            let publicKey: string;

            if (WebhookEncryptionKeysService.cache.has(publicKeyId)) {
                publicKey = WebhookEncryptionKeysService.cache.get(publicKeyId)!;
            } else {
                try {
                    publicKey = await this.getWebhooksEncryptionKeysId({ id: publicKeyId });
                } catch (e: any) {
                    throw new WalleeSdkException(
                        SdkExceptionErrorCodes.UNKNOWN_WEBHOOK_ENCRYPTION_PUBLIC_KEY,
                        `Error during retrieving public key with ID: ${publicKeyId}. Because: ${e.message}.`
                    );
                }

                if (!publicKey) {
                    throw new WalleeSdkException(
                        SdkExceptionErrorCodes.UNKNOWN_WEBHOOK_ENCRYPTION_PUBLIC_KEY,
                        `Could not retrieve public key with ID: ${publicKeyId}`
                    );
                }
                WebhookEncryptionKeysService.cache.set(publicKeyId, publicKey);
            }

            const isValid = EncryptionUtil.isContentValid(contentToVerify, contentSignature, publicKey);
            return isValid;
        } catch (err: any) {
            if (err instanceof WalleeSdkException) {
                throw err;
            }
            throw new WalleeSdkException(
                SdkExceptionErrorCodes.WEBHOOK_ENCRYPTION_SIGNATURE_VERIFICATION_FAILED,
                `Webhook signature verification failed: ${err.message || err}`
            );
        }
    }

}
