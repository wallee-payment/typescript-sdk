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
  ChargeAttempt,
  PaymentAppChargeAttemptUpdate,
  PaymentAppCompletionUpdate,
  PaymentAppConnector,
  PaymentAppConnectorDetails,
  PaymentAppConnectorDetailsCreate,
  PaymentAppProcessor,
  PaymentAppProcessorDetails,
  PaymentAppProcessorDetailsCreate,
  PaymentAppRefundUpdate,
  PaymentAppVoidUpdate,
  Refund,
  RestApiErrorResponse,
  TransactionCompletion,
  TransactionVoid,
} from '../models/index';
import {
    ChargeAttemptFromJSON,
    ChargeAttemptToJSON,
    PaymentAppChargeAttemptUpdateFromJSON,
    PaymentAppChargeAttemptUpdateToJSON,
    PaymentAppCompletionUpdateFromJSON,
    PaymentAppCompletionUpdateToJSON,
    PaymentAppConnectorFromJSON,
    PaymentAppConnectorToJSON,
    PaymentAppConnectorDetailsFromJSON,
    PaymentAppConnectorDetailsToJSON,
    PaymentAppConnectorDetailsCreateFromJSON,
    PaymentAppConnectorDetailsCreateToJSON,
    PaymentAppProcessorFromJSON,
    PaymentAppProcessorToJSON,
    PaymentAppProcessorDetailsFromJSON,
    PaymentAppProcessorDetailsToJSON,
    PaymentAppProcessorDetailsCreateFromJSON,
    PaymentAppProcessorDetailsCreateToJSON,
    PaymentAppRefundUpdateFromJSON,
    PaymentAppRefundUpdateToJSON,
    PaymentAppVoidUpdateFromJSON,
    PaymentAppVoidUpdateToJSON,
    RefundFromJSON,
    RefundToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    TransactionCompletionFromJSON,
    TransactionCompletionToJSON,
    TransactionVoidFromJSON,
    TransactionVoidToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentWebAppsConnectorsConnectorExternalIdRequest {
    connectorExternalId: string;
    space: number;
}

export interface DeletePaymentWebAppsProcessorsExternalIdRequest {
    externalId: string;
    space: number;
}

export interface PatchPaymentWebAppsChargeAttemptsIdRequest {
    id: number;
    space: number;
    paymentAppChargeAttemptUpdate: PaymentAppChargeAttemptUpdate;
    expand?: Set<string>;
}

export interface PatchPaymentWebAppsCompletionsIdRequest {
    id: number;
    space: number;
    paymentAppCompletionUpdate: PaymentAppCompletionUpdate;
    expand?: Set<string>;
}

export interface PatchPaymentWebAppsConnectorsConnectorExternalIdRequest {
    connectorExternalId: string;
    space: number;
    paymentAppConnectorDetails: PaymentAppConnectorDetails;
    expand?: Set<string>;
}

export interface PatchPaymentWebAppsProcessorsExternalIdRequest {
    externalId: string;
    space: number;
    paymentAppProcessorDetails: PaymentAppProcessorDetails;
    expand?: Set<string>;
}

export interface PatchPaymentWebAppsRefundsIdRequest {
    id: number;
    space: number;
    paymentAppRefundUpdate: PaymentAppRefundUpdate;
    expand?: Set<string>;
}

export interface PatchPaymentWebAppsVoidsIdRequest {
    id: number;
    space: number;
    paymentAppVoidUpdate: PaymentAppVoidUpdate;
    expand?: Set<string>;
}

export interface PostPaymentWebAppsProcessorsRequest {
    space: number;
    paymentAppProcessorDetailsCreate: PaymentAppProcessorDetailsCreate;
    expand?: Set<string>;
}

export interface PostPaymentWebAppsProcessorsExternalIdActivateForProductionRequest {
    externalId: string;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentWebAppsProcessorsExternalIdConnectorsRequest {
    externalId: string;
    space: number;
    paymentAppConnectorDetailsCreate: PaymentAppConnectorDetailsCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class PaymentWebAppsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a connector. It cannot be undone.
     * Delete a connector
     
     */
    async deletePaymentWebAppsConnectorsConnectorExternalIdRaw(requestParameters: DeletePaymentWebAppsConnectorsConnectorExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['connectorExternalId'] == null) {
            throw new runtime.RequiredError(
                'connectorExternalId',
                'Required parameter "connectorExternalId" was null or undefined when calling deletePaymentWebAppsConnectorsConnectorExternalId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentWebAppsConnectorsConnectorExternalId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/web-apps/connectors/{connectorExternalId}`.replace(`{${"connectorExternalId"}}`, encodeURIComponent(String(requestParameters['connectorExternalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a connector. It cannot be undone.
     * Delete a connector
     
     */
    async deletePaymentWebAppsConnectorsConnectorExternalId(requestParameters: DeletePaymentWebAppsConnectorsConnectorExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentWebAppsConnectorsConnectorExternalIdRaw(requestParameters, initOverrides);
    }

    /**
     * Permanently deletes a processor. It cannot be undone.
     * Delete a processor
     
     */
    async deletePaymentWebAppsProcessorsExternalIdRaw(requestParameters: DeletePaymentWebAppsProcessorsExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['externalId'] == null) {
            throw new runtime.RequiredError(
                'externalId',
                'Required parameter "externalId" was null or undefined when calling deletePaymentWebAppsProcessorsExternalId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentWebAppsProcessorsExternalId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/web-apps/processors/{externalId}`.replace(`{${"externalId"}}`, encodeURIComponent(String(requestParameters['externalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a processor. It cannot be undone.
     * Delete a processor
     
     */
    async deletePaymentWebAppsProcessorsExternalId(requestParameters: DeletePaymentWebAppsProcessorsExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentWebAppsProcessorsExternalIdRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the state of a charge attempt for transactions created with a processor linked to the invoking web app, returning the specified charge attempt.
     * Update a charge attempt
     
     */
    async patchPaymentWebAppsChargeAttemptsIdRaw(requestParameters: PatchPaymentWebAppsChargeAttemptsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeAttempt>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentWebAppsChargeAttemptsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsChargeAttemptsId().'
            );
        }

        if (requestParameters['paymentAppChargeAttemptUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppChargeAttemptUpdate',
                'Required parameter "paymentAppChargeAttemptUpdate" was null or undefined when calling patchPaymentWebAppsChargeAttemptsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/charge-attempts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppChargeAttemptUpdateToJSON(requestParameters['paymentAppChargeAttemptUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeAttemptFromJSON(jsonValue));
    }

    /**
     * Updates the state of a charge attempt for transactions created with a processor linked to the invoking web app, returning the specified charge attempt.
     * Update a charge attempt
     
     */
    async patchPaymentWebAppsChargeAttemptsId(requestParameters: PatchPaymentWebAppsChargeAttemptsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeAttempt> {
        const response = await this.patchPaymentWebAppsChargeAttemptsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the state of a completion for transactions created with a processor linked to the invoking web app, returning the specified completion.
     * Update a completion
     
     */
    async patchPaymentWebAppsCompletionsIdRaw(requestParameters: PatchPaymentWebAppsCompletionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCompletion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentWebAppsCompletionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsCompletionsId().'
            );
        }

        if (requestParameters['paymentAppCompletionUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppCompletionUpdate',
                'Required parameter "paymentAppCompletionUpdate" was null or undefined when calling patchPaymentWebAppsCompletionsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/completions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppCompletionUpdateToJSON(requestParameters['paymentAppCompletionUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCompletionFromJSON(jsonValue));
    }

    /**
     * Updates the state of a completion for transactions created with a processor linked to the invoking web app, returning the specified completion.
     * Update a completion
     
     */
    async patchPaymentWebAppsCompletionsId(requestParameters: PatchPaymentWebAppsCompletionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCompletion> {
        const response = await this.patchPaymentWebAppsCompletionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a connector
     
     */
    async patchPaymentWebAppsConnectorsConnectorExternalIdRaw(requestParameters: PatchPaymentWebAppsConnectorsConnectorExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentAppConnector>> {
        if (requestParameters['connectorExternalId'] == null) {
            throw new runtime.RequiredError(
                'connectorExternalId',
                'Required parameter "connectorExternalId" was null or undefined when calling patchPaymentWebAppsConnectorsConnectorExternalId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsConnectorsConnectorExternalId().'
            );
        }

        if (requestParameters['paymentAppConnectorDetails'] == null) {
            throw new runtime.RequiredError(
                'paymentAppConnectorDetails',
                'Required parameter "paymentAppConnectorDetails" was null or undefined when calling patchPaymentWebAppsConnectorsConnectorExternalId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/connectors/{connectorExternalId}`.replace(`{${"connectorExternalId"}}`, encodeURIComponent(String(requestParameters['connectorExternalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppConnectorDetailsToJSON(requestParameters['paymentAppConnectorDetails']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentAppConnectorFromJSON(jsonValue));
    }

    /**
     * Update a connector
     
     */
    async patchPaymentWebAppsConnectorsConnectorExternalId(requestParameters: PatchPaymentWebAppsConnectorsConnectorExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentAppConnector> {
        const response = await this.patchPaymentWebAppsConnectorsConnectorExternalIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a processor
     
     */
    async patchPaymentWebAppsProcessorsExternalIdRaw(requestParameters: PatchPaymentWebAppsProcessorsExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentAppProcessor>> {
        if (requestParameters['externalId'] == null) {
            throw new runtime.RequiredError(
                'externalId',
                'Required parameter "externalId" was null or undefined when calling patchPaymentWebAppsProcessorsExternalId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsProcessorsExternalId().'
            );
        }

        if (requestParameters['paymentAppProcessorDetails'] == null) {
            throw new runtime.RequiredError(
                'paymentAppProcessorDetails',
                'Required parameter "paymentAppProcessorDetails" was null or undefined when calling patchPaymentWebAppsProcessorsExternalId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/processors/{externalId}`.replace(`{${"externalId"}}`, encodeURIComponent(String(requestParameters['externalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppProcessorDetailsToJSON(requestParameters['paymentAppProcessorDetails']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentAppProcessorFromJSON(jsonValue));
    }

    /**
     * Update a processor
     
     */
    async patchPaymentWebAppsProcessorsExternalId(requestParameters: PatchPaymentWebAppsProcessorsExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentAppProcessor> {
        const response = await this.patchPaymentWebAppsProcessorsExternalIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the state of a refund for transactions created with a processor linked to the invoking web app, returning the specified refund.
     * Update a refund
     
     */
    async patchPaymentWebAppsRefundsIdRaw(requestParameters: PatchPaymentWebAppsRefundsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentWebAppsRefundsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsRefundsId().'
            );
        }

        if (requestParameters['paymentAppRefundUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppRefundUpdate',
                'Required parameter "paymentAppRefundUpdate" was null or undefined when calling patchPaymentWebAppsRefundsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/refunds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppRefundUpdateToJSON(requestParameters['paymentAppRefundUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     * Updates the state of a refund for transactions created with a processor linked to the invoking web app, returning the specified refund.
     * Update a refund
     
     */
    async patchPaymentWebAppsRefundsId(requestParameters: PatchPaymentWebAppsRefundsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Refund> {
        const response = await this.patchPaymentWebAppsRefundsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the state of a void for transactions created with a processor linked to the invoking web app, returning the specified void.
     * Update a void
     
     */
    async patchPaymentWebAppsVoidsIdRaw(requestParameters: PatchPaymentWebAppsVoidsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionVoid>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentWebAppsVoidsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentWebAppsVoidsId().'
            );
        }

        if (requestParameters['paymentAppVoidUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppVoidUpdate',
                'Required parameter "paymentAppVoidUpdate" was null or undefined when calling patchPaymentWebAppsVoidsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/web-apps/voids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppVoidUpdateToJSON(requestParameters['paymentAppVoidUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionVoidFromJSON(jsonValue));
    }

    /**
     * Updates the state of a void for transactions created with a processor linked to the invoking web app, returning the specified void.
     * Update a void
     
     */
    async patchPaymentWebAppsVoidsId(requestParameters: PatchPaymentWebAppsVoidsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionVoid> {
        const response = await this.patchPaymentWebAppsVoidsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a processor
     
     */
    async postPaymentWebAppsProcessorsRaw(requestParameters: PostPaymentWebAppsProcessorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentAppProcessor>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentWebAppsProcessors().'
            );
        }

        if (requestParameters['paymentAppProcessorDetailsCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppProcessorDetailsCreate',
                'Required parameter "paymentAppProcessorDetailsCreate" was null or undefined when calling postPaymentWebAppsProcessors().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/web-apps/processors`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppProcessorDetailsCreateToJSON(requestParameters['paymentAppProcessorDetailsCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentAppProcessorFromJSON(jsonValue));
    }

    /**
     * Create a processor
     
     */
    async postPaymentWebAppsProcessors(requestParameters: PostPaymentWebAppsProcessorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentAppProcessor> {
        const response = await this.postPaymentWebAppsProcessorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Activate a processor for production
     
     */
    async postPaymentWebAppsProcessorsExternalIdActivateForProductionRaw(requestParameters: PostPaymentWebAppsProcessorsExternalIdActivateForProductionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentAppProcessor>> {
        if (requestParameters['externalId'] == null) {
            throw new runtime.RequiredError(
                'externalId',
                'Required parameter "externalId" was null or undefined when calling postPaymentWebAppsProcessorsExternalIdActivateForProduction().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentWebAppsProcessorsExternalIdActivateForProduction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/web-apps/processors/{externalId}/activate-for-production`.replace(`{${"externalId"}}`, encodeURIComponent(String(requestParameters['externalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentAppProcessorFromJSON(jsonValue));
    }

    /**
     * Activate a processor for production
     
     */
    async postPaymentWebAppsProcessorsExternalIdActivateForProduction(requestParameters: PostPaymentWebAppsProcessorsExternalIdActivateForProductionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentAppProcessor> {
        const response = await this.postPaymentWebAppsProcessorsExternalIdActivateForProductionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a connector
     
     */
    async postPaymentWebAppsProcessorsExternalIdConnectorsRaw(requestParameters: PostPaymentWebAppsProcessorsExternalIdConnectorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentAppConnector>> {
        if (requestParameters['externalId'] == null) {
            throw new runtime.RequiredError(
                'externalId',
                'Required parameter "externalId" was null or undefined when calling postPaymentWebAppsProcessorsExternalIdConnectors().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentWebAppsProcessorsExternalIdConnectors().'
            );
        }

        if (requestParameters['paymentAppConnectorDetailsCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentAppConnectorDetailsCreate',
                'Required parameter "paymentAppConnectorDetailsCreate" was null or undefined when calling postPaymentWebAppsProcessorsExternalIdConnectors().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/web-apps/processors/{externalId}/connectors`.replace(`{${"externalId"}}`, encodeURIComponent(String(requestParameters['externalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: PaymentAppConnectorDetailsCreateToJSON(requestParameters['paymentAppConnectorDetailsCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentAppConnectorFromJSON(jsonValue));
    }

    /**
     * Create a connector
     
     */
    async postPaymentWebAppsProcessorsExternalIdConnectors(requestParameters: PostPaymentWebAppsProcessorsExternalIdConnectorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentAppConnector> {
        const response = await this.postPaymentWebAppsProcessorsExternalIdConnectorsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
