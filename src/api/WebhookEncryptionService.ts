'use strict';

import http = require("http");
import Promise = require("bluebird");
import axios = require("axios");

import { Authentication } from '../auth/Authentication';
import { HMACAuthentication } from '../auth/HMACAuthentication';
import { ObjectSerializer } from '../serializers/ObjectSerializer';
import { EncryptionUtil } from '../util/EncryptionUtil';

import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { WebhookEncryptionPublicKey } from  '../models/WebhookEncryptionPublicKey';

class WebhookEncryptionService {
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
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The ID of the key version.
    * @param {*} [options] Override http request options.
    */
    public read (id: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body: WebhookEncryptionPublicKey;  }> {
        const url: string = '/webhook-encryption/read';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling read.');
        }

        if (id !== undefined) {
            queryParams['id'] = ObjectSerializer.serialize(id, "string");
        }




        headers['Content-Type'] = '*/*';

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
            method: 'GET',
            baseURL: this._basePath,
            headers,
            params: queryParams,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: WebhookEncryptionPublicKey;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "WebhookEncryptionPublicKey");
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
     * Verify webhook content signature.
     *
     * @param signatureHeader Signature header 'X-Signature' value from the Http request
     * @param contentToVerify Raw webhook content in String format
     * @returns Promise<boolean> indicating if the content is valid
     */
    public isContentValid(signatureHeader: string, contentToVerify: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const regex = /^.*,\s*keyId=([a-zA-Z0-9\-]+),\s*signature=(.+)$/g;
            const match = regex.exec(signatureHeader);

            if (match) {
                const publicKeyId = match[1];
                const contentSignature = match[2];

                this.read(publicKeyId)
                    .then((response: { response: http.IncomingMessage, body: WebhookEncryptionPublicKey }) => {
                        const publicKey = response.body.publicKey as string;
                        const isValid = EncryptionUtil.isContentValid(contentToVerify, contentSignature, publicKey);
                        resolve(isValid);
                    }).catch(error => {
                        console.error("Error verifying content:", error);
                        reject(error);
                    });
            } else {
                reject(new Error("Invalid webhook signature header. Expected header format: 'algorithm=<algorithm>, keyId=<keyId>, signature=<signature>'"));
            }
        });
    }
}

export { WebhookEncryptionService }
