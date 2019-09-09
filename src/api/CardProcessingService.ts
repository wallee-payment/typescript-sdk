'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");
import CryptoJS = require("crypto-js");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { Transaction } from  '../models/Transaction';
import { UnencryptedCardDataCreate } from  '../models/UnencryptedCardDataCreate';

class CardProcessingService {
    protected _basePath = 'https://app-wallee.com:443/api';
    protected defaultHeaders : any = {};
    protected configuration : any = {};
    protected _useQuerystring : boolean = false;
    static errors: {[index: string]: any} = {
        "ClientError": ClientError,
        "ServerError": ServerError,
    };

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(configuration: any) {
        this.configuration = configuration;
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    protected getAuthHeaders(method: string, resourcePath: string, queryParams: any) : any {

        if (Object.keys(queryParams).length != 0) {
            resourcePath += '?' + Object.keys(queryParams).map(
                (key) => {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
                }
            ).join('&');
        }

        resourcePath = '/api' + resourcePath;

        let timestamp: number = Math.trunc(+new Date / 1000);

        let headers: any = {
            'x-mac-userid': this.configuration.user_id,
            'x-mac-version': this.configuration.mac_version,
            'x-mac-timestamp': timestamp,
            'x-mac-value': this.getSignature(method, resourcePath, timestamp)
        };
        return headers;
    }

    protected getSignature(method: string, resourcePath: string, timestamp: number) : string {
        let data: string = [
            this.configuration.mac_version,
            this.configuration.user_id,
            timestamp,
            method,
            resourcePath
        ].join('|');
        let api_secret_base64 = CryptoJS.enc.Base64.parse(this.configuration.api_secret);
        return CryptoJS.HmacSHA512(data, api_secret_base64).toString(CryptoJS.enc.Base64);
    }

    /**
    * The process method will process the transaction with the given card details without using 3-D secure.
    * @summary Process
    * @param spaceId 
    * @param transactionId The ID of the transaction which should be processed.
    * @param paymentMethodConfigurationId The payment method configuration ID which is applied to the transaction.
    * @param cardData The card details as JSON in plain which should be used to authorize the payment.
    * @param {*} [options] Override http request options.
    */
    public cardProcessingServiceProcess (spaceId: number, transactionId: number, paymentMethodConfigurationId: number, cardData: UnencryptedCardDataCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Transaction;  }> {
        const localVarPath = this.basePath + '/card-processing/process';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling cardProcessingServiceProcess.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling cardProcessingServiceProcess.');
            }

            // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
            if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
                throw new Error('Required parameter paymentMethodConfigurationId was null or undefined when calling cardProcessingServiceProcess.');
            }

            // verify required parameter 'cardData' is not null or undefined
            if (cardData === null || cardData === undefined) {
                throw new Error('Required parameter cardData was null or undefined when calling cardProcessingServiceProcess.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (paymentMethodConfigurationId !== undefined) {
            localVarQueryParameters['paymentMethodConfigurationId'] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/card-processing/process',
            localVarQueryParameters
        ));
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cardData, "UnencryptedCardDataCreate")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Transaction;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Transaction");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * The process method will process the transaction with the given card details by eventually using 3-D secure. The buyer has to be redirect to the URL returned by this method.
    * @summary Process With 3-D Secure
    * @param spaceId 
    * @param transactionId The ID of the transaction which should be processed.
    * @param paymentMethodConfigurationId The payment method configuration ID which is applied to the transaction.
    * @param cardData The card details as JSON in plain which should be used to authorize the payment.
    * @param {*} [options] Override http request options.
    */
    public cardProcessingServiceProcessWith3DSecure (spaceId: number, transactionId: number, paymentMethodConfigurationId: number, cardData: UnencryptedCardDataCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const localVarPath = this.basePath + '/card-processing/processWith3DSecure';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling cardProcessingServiceProcessWith3DSecure.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling cardProcessingServiceProcessWith3DSecure.');
            }

            // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
            if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
                throw new Error('Required parameter paymentMethodConfigurationId was null or undefined when calling cardProcessingServiceProcessWith3DSecure.');
            }

            // verify required parameter 'cardData' is not null or undefined
            if (cardData === null || cardData === undefined) {
                throw new Error('Required parameter cardData was null or undefined when calling cardProcessingServiceProcessWith3DSecure.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (paymentMethodConfigurationId !== undefined) {
            localVarQueryParameters['paymentMethodConfigurationId'] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/card-processing/processWith3DSecure',
            localVarQueryParameters
        ));
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cardData, "UnencryptedCardDataCreate")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "string");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

export { CardProcessingService }
