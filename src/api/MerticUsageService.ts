'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { MetricUsage } from  '../models/MetricUsage';
import { ServerError } from  '../models/ServerError';

class MerticUsageService {
    protected _basePath = 'https://app-wallee.com:443/api';
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth({})
    }

    constructor(configuration: any) {
        this.setDefaultAuthentication(new VoidAuth(configuration))
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

    /**
    * Calculates the consumed resources for the given space and time range.
    * @summary Calculate
    * @param spaceId 
    * @param start The start date from which on the consumed units should be returned from.
    * @param end The end date to which the consumed units should be returned to. The end date is not included in the result.
    * @param {*} [options] Override http request options.
    */
    public calculate (spaceId: number, start: Date, end: Date, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<MetricUsage>;  }> {
        const localVarPath = this.basePath + '/mertic-usage/calculate';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling calculate.');
            }

            // verify required parameter 'start' is not null or undefined
            if (start === null || start === undefined) {
                throw new Error('Required parameter start was null or undefined when calling calculate.');
            }

            // verify required parameter 'end' is not null or undefined
            if (end === null || end === undefined) {
                throw new Error('Required parameter end was null or undefined when calling calculate.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (start !== undefined) {
            localVarQueryParameters['start'] = ObjectSerializer.serialize(start, "Date");
        }

        if (end !== undefined) {
            localVarQueryParameters['end'] = ObjectSerializer.serialize(end, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<MetricUsage>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<MetricUsage>");
                        resolve({ response: response, body: body });
                    } else if (response.statusCode && response.statusCode >= 400 && response.statusCode <= 499) {
                        let clientError = new ClientError();
                        clientError.date = (new Date()).toDateString();
                        clientError.id = <string> <any> response.statusCode;
                        clientError.message = response.statusMessage;
                        throw clientError;
                    } else if (response.statusCode && response.statusCode >= 500 && response.statusCode <= 599) {
                        let serverError = new ServerError();
                        serverError.date = (new Date()).toDateString();
                        serverError.id = <string> <any> response.statusCode;
                        serverError.message = response.statusMessage;
                        throw serverError;
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

export { MerticUsageService }
