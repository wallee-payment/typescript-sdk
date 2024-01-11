'use strict';

import http = require("http");
import Promise = require("bluebird");
import axios = require("axios");

import { Authentication } from '../auth/Authentication';
import { HMACAuthentication } from '../auth/HMACAuthentication';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { AuthenticatedCardDataCreate } from  '../models/AuthenticatedCardDataCreate';
import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { TokenizedCardDataCreate } from  '../models/TokenizedCardDataCreate';
import { Transaction } from  '../models/Transaction';

class CardProcessingService {
    protected _basePath = 'https://app-wallee.com:443/api';
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
    protected _timeout : number = 25;
    protected _defaultAuthentication: Authentication;

    constructor(configuration: any) {
        this._defaultAuthentication = new HMACAuthentication(configuration).apply;
        this._defaultHeaders = configuration.default_headers;
        this.setTimeout(configuration.timeout);
    }

    /**
    * Set timeout in seconds. Default timeout: 25 seconds
    * @param {number} timeout
    */
    set timeout(timeout: number) {
        this.setTimeout(timeout)
    }

    private setTimeout(timeout: number) {
        if (timeout !== undefined) {
            if (!Number.isInteger(timeout)) {
                throw new Error('Timeout value has to be integer');
            }
            if (timeout) {
                this._timeout = timeout;
            } else {
                throw new Error('Timeout value has to be greater than 0');
            }
        }
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    protected setDefaultAuthentication(auth: Authentication) {
        this._defaultAuthentication = auth;
    }

    private getVersion(): string {
        if (typeof (process) !== 'undefined' && process && process.version) {
            return 'node ' + process.version;
        } else {
            return 'unknown';
        }
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
    public process (spaceId: number, transactionId: number, paymentMethodConfigurationId: number, cardData: AuthenticatedCardDataCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Transaction;  }> {
        const url: string = '/card-processing/process';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling process.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling process.');
        }

        // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
        if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
            throw new Error('Required parameter paymentMethodConfigurationId was null or undefined when calling process.');
        }

        // verify required parameter 'cardData' is not null or undefined
        if (cardData === null || cardData === undefined) {
            throw new Error('Required parameter cardData was null or undefined when calling process.');
        }

        if (spaceId !== undefined) {
            queryParams['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            queryParams['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (paymentMethodConfigurationId !== undefined) {
            queryParams['paymentMethodConfigurationId'] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
        }




        headers['Content-Type'] = 'application/json;charset=utf-8';

        Object.assign(headers, options.headers);

        let defaultHeaders = {
            "x-meta-sdk-version": "4.3.0",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "wallee",
            "x-meta-sdk-language-version": this.getVersion(),
        };

        Object.assign(headers, defaultHeaders);

        let requestConfig: axios.AxiosRequestConfig = {
            url,
            method: 'POST',
            baseURL: this._basePath,
            headers,
            params: queryParams,
            data: cardData,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Transaction;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Transaction");
                        return resolve({ response: success.request.res, body: body });
                    },
                    failure => {
                        let errorObject: ClientError | ServerError | Object;
                        if (failure.response?.status) {
                            if (failure.response.status >= 400 && failure.response.status <= 499) {
                                errorObject = new ClientError();
                            } else if (failure.response.status >= 500 && failure.response.status <= 599) {
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                        } else {
                            errorObject = new Object()
                        }
                        return reject({
                            errorType: errorObject.constructor.name,
                            date: (new Date()).toDateString(),
                            statusCode: failure.response?.status && isNaN(failure.response.status) ? String(failure.response.status) : "Unknown",
                            statusMessage: failure.response?.statusText != null ? failure.response.statusText : "Unknown",
                            body: failure.response?.data,
                            response: failure.response?.request.res
                        });
                    }
                )
                .catch(error => {
                    return reject(error);
                });
        });
    };

    /**
    * The process method will process the transaction with the given card details by eventually using 3-D secure. The buyer has to be redirect to the URL returned by this method.
    * @summary Process With 3-D Secure
    * @param spaceId 
    * @param transactionId The ID of the transaction which should be processed.
    * @param paymentMethodConfigurationId The payment method configuration ID which is applied to the transaction.
    * @param cardData The card details as JSON in plain which should be used to authorize the payment.
    * @param {*} [options] Override http request options.
    */
    public processWith3DSecure (spaceId: number, transactionId: number, paymentMethodConfigurationId: number, cardData: TokenizedCardDataCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const url: string = '/card-processing/processWith3DSecure';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling processWith3DSecure.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling processWith3DSecure.');
        }

        // verify required parameter 'paymentMethodConfigurationId' is not null or undefined
        if (paymentMethodConfigurationId === null || paymentMethodConfigurationId === undefined) {
            throw new Error('Required parameter paymentMethodConfigurationId was null or undefined when calling processWith3DSecure.');
        }

        // verify required parameter 'cardData' is not null or undefined
        if (cardData === null || cardData === undefined) {
            throw new Error('Required parameter cardData was null or undefined when calling processWith3DSecure.');
        }

        if (spaceId !== undefined) {
            queryParams['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            queryParams['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (paymentMethodConfigurationId !== undefined) {
            queryParams['paymentMethodConfigurationId'] = ObjectSerializer.serialize(paymentMethodConfigurationId, "number");
        }




        headers['Content-Type'] = 'application/json;charset=utf-8';

        Object.assign(headers, options.headers);

        let defaultHeaders = {
            "x-meta-sdk-version": "4.3.0",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "wallee",
            "x-meta-sdk-language-version": this.getVersion(),
        };

        Object.assign(headers, defaultHeaders);

        let requestConfig: axios.AxiosRequestConfig = {
            url,
            method: 'POST',
            baseURL: this._basePath,
            headers,
            params: queryParams,
            data: cardData,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: string;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "string");
                        return resolve({ response: success.request.res, body: body });
                    },
                    failure => {
                        let errorObject: ClientError | ServerError | Object;
                        if (failure.response?.status) {
                            if (failure.response.status >= 400 && failure.response.status <= 499) {
                                errorObject = new ClientError();
                            } else if (failure.response.status >= 500 && failure.response.status <= 599) {
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                        } else {
                            errorObject = new Object()
                        }
                        return reject({
                            errorType: errorObject.constructor.name,
                            date: (new Date()).toDateString(),
                            statusCode: failure.response?.status && isNaN(failure.response.status) ? String(failure.response.status) : "Unknown",
                            statusMessage: failure.response?.statusText != null ? failure.response.statusText : "Unknown",
                            body: failure.response?.data,
                            response: failure.response?.request.res
                        });
                    }
                )
                .catch(error => {
                    return reject(error);
                });
        });
    };

}

export { CardProcessingService }
