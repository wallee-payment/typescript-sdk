'use strict';

import http = require("http");
import Promise = require("bluebird");
import axios = require("axios");

import { Authentication } from '../auth/Authentication';
import { HMACAuthentication } from '../auth/HMACAuthentication';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { RenderedTerminalReceipt } from  '../models/RenderedTerminalReceipt';
import { ServerError } from  '../models/ServerError';
import { TerminalReceiptFetchRequest } from  '../models/TerminalReceiptFetchRequest';

class TransactionTerminalService {
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
    * Returns all receipts for the requested terminal transaction.
    * @summary Fetch Receipts
    * @param spaceId 
    * @param request 
    * @param {*} [options] Override http request options.
    */
    public fetchReceipts (spaceId: number, request: TerminalReceiptFetchRequest, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<RenderedTerminalReceipt>;  }> {
        const url: string = '/transaction-terminal/fetch-receipts';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling fetchReceipts.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling fetchReceipts.');
        }

        if (spaceId !== undefined) {
            queryParams['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }




        headers['Content-Type'] = 'application/json;charset=utf-8';

        Object.assign(headers, options.headers);

        let defaultHeaders = {
            "x-meta-sdk-version": "4.4.0",
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
            data: request,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Array<RenderedTerminalReceipt>;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Array<RenderedTerminalReceipt>");
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
    * This operation creates a set of credentials to use within the WebSocket.
    * @summary Create Till Connection Credentials
    * @param spaceId 
    * @param transactionId The ID of the transaction which is used to process with the terminal.
    * @param terminalId The ID of the terminal which should be used to process the transaction.
    * @param language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    */
    public tillConnectionCredentials (spaceId: number, transactionId: number, terminalId: number, language?: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body: string;  }> {
        const url: string = '/transaction-terminal/till-connection-credentials';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling tillConnectionCredentials.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling tillConnectionCredentials.');
        }

        // verify required parameter 'terminalId' is not null or undefined
        if (terminalId === null || terminalId === undefined) {
            throw new Error('Required parameter terminalId was null or undefined when calling tillConnectionCredentials.');
        }

        if (spaceId !== undefined) {
            queryParams['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            queryParams['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (terminalId !== undefined) {
            queryParams['terminalId'] = ObjectSerializer.serialize(terminalId, "number");
        }

        if (language !== undefined) {
            queryParams['language'] = ObjectSerializer.serialize(language, "string");
        }




        headers['Content-Type'] = 'application/json';

        Object.assign(headers, options.headers);

        let defaultHeaders = {
            "x-meta-sdk-version": "4.4.0",
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

export { TransactionTerminalService }
