'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { StaticValue } from  '../models/StaticValue';

class StaticValueService {
    protected _basePath = 'https://app-wallee.com:443/api';
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
    protected _timeout : number = 25;

    protected authentications = {
        'default': <Authentication>new VoidAuth({})
    };

    constructor(configuration: any) {
        this.setDefaultAuthentication(new VoidAuth(configuration));
        this.defaultHeaders = configuration.default_headers;
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

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    protected setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    private getVersion(): string {
        if (typeof (process) !== 'undefined' && process && process.version) {
            return 'node ' + process.version;
        } else {
            return 'unknown';
        }
    }

    /**
    * This operation returns all entities which are available.
    * @summary All
    * @param {*} [options] Override http request options.
    */
    public all (options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<StaticValue>;  }> {
        const localVarPath = '/static-value-service/all';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let defaultHeaderParams = {
            "x-meta-sdk-version": "4.1.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "wallee",
            "x-meta-sdk-language-version": this.getVersion(),
        };

        (<any>Object).assign(localVarHeaderParams, defaultHeaderParams);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<StaticValue>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<StaticValue>");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The id of the static value which should be returned.
    * @param {*} [options] Override http request options.
    */
    public read (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: StaticValue;  }> {
        const localVarPath = '/static-value-service/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling read.');
            }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let defaultHeaderParams = {
            "x-meta-sdk-version": "4.1.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "wallee",
            "x-meta-sdk-language-version": this.getVersion(),
        };

        (<any>Object).assign(localVarHeaderParams, defaultHeaderParams);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: StaticValue;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                } else {
                    if (response.statusCode){
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "StaticValue");
                            return resolve({ response: response, body: body });
                        } else {
                            let errorObject: ClientError | ServerError;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError();
                            } else if (response.statusCode >= 500 && response.statusCode <= 599){
                                errorObject = new ServerError();
                            } else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: <string> <any> response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });

                }
            });
        });
    }
}

export { StaticValueService }
