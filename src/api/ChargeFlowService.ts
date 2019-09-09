'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");
import CryptoJS = require("crypto-js");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ChargeFlow } from  '../models/ChargeFlow';
import { ClientError } from  '../models/ClientError';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';
import { Transaction } from  '../models/Transaction';

class ChargeFlowService {
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
    * 
    * @summary applyFlow
    * @param spaceId 
    * @param id The transaction id of the transaction which should be process asynchronously.
    * @param {*} [options] Override http request options.
    */
    public chargeFlowServiceApplyFlow (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Transaction;  }> {
        const localVarPath = this.basePath + '/charge-flow/applyFlow';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling chargeFlowServiceApplyFlow.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling chargeFlowServiceApplyFlow.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/charge-flow/applyFlow',
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId 
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    public chargeFlowServiceCount (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/charge-flow/count';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling chargeFlowServiceCount.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/charge-flow/count',
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
            body: ObjectSerializer.serialize(filter, "EntityQueryFilter")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: number;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "number");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId 
    * @param id The id of the charge flow which should be returned.
    * @param {*} [options] Override http request options.
    */
    public chargeFlowServiceRead (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: ChargeFlow;  }> {
        const localVarPath = this.basePath + '/charge-flow/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling chargeFlowServiceRead.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling chargeFlowServiceRead.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'GET',
            '/charge-flow/read',
            localVarQueryParameters
        ));
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
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
        return new Promise<{ response: http.IncomingMessage; body: ChargeFlow;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "ChargeFlow");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId 
    * @param query The query restricts the charge flows which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public chargeFlowServiceSearch (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<ChargeFlow>;  }> {
        const localVarPath = this.basePath + '/charge-flow/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling chargeFlowServiceSearch.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling chargeFlowServiceSearch.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/charge-flow/search',
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
            body: ObjectSerializer.serialize(query, "EntityQuery")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<ChargeFlow>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<ChargeFlow>");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * 
    * @summary updateRecipient
    * @param spaceId 
    * @param transactionId The transaction id of the transaction whose recipient should be updated.
    * @param type The id of the charge flow configuration type to recipient should be updated for.
    * @param recipient The recipient address that should be used to send the payment URL.
    * @param {*} [options] Override http request options.
    */
    public chargeFlowServiceUpdateRecipient (spaceId: number, transactionId: number, type: number, recipient: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/charge-flow/updateRecipient';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling chargeFlowServiceUpdateRecipient.');
            }

            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling chargeFlowServiceUpdateRecipient.');
            }

            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new Error('Required parameter type was null or undefined when calling chargeFlowServiceUpdateRecipient.');
            }

            // verify required parameter 'recipient' is not null or undefined
            if (recipient === null || recipient === undefined) {
                throw new Error('Required parameter recipient was null or undefined when calling chargeFlowServiceUpdateRecipient.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "number");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "number");
        }

        if (recipient !== undefined) {
            localVarQueryParameters['recipient'] = ObjectSerializer.serialize(recipient, "string");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/charge-flow/updateRecipient',
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
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {

                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

export { ChargeFlowService }
