'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");
import CryptoJS = require("crypto-js");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';
import { TokenVersion } from  '../models/TokenVersion';

class TokenVersionService {
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
    * Returns the token version which is currently active given by the token id. In case no token version is active the method will return null.
    * @summary Active Version
    * @param spaceId 
    * @param id The id of a token for which you want to look up the current active token version.
    * @param {*} [options] Override http request options.
    */
    public tokenVersionServiceActiveVersion (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: TokenVersion;  }> {
        const localVarPath = this.basePath + '/token-version/active-version';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling tokenVersionServiceActiveVersion.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tokenVersionServiceActiveVersion.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'GET',
            '/token-version/active-version',
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
        return new Promise<{ response: http.IncomingMessage; body: TokenVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "TokenVersion");
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
    public tokenVersionServiceCount (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/token-version/count';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling tokenVersionServiceCount.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/token-version/count',
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
    * @param id The id of the token version which should be returned.
    * @param {*} [options] Override http request options.
    */
    public tokenVersionServiceRead (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: TokenVersion;  }> {
        const localVarPath = this.basePath + '/token-version/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling tokenVersionServiceRead.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tokenVersionServiceRead.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'GET',
            '/token-version/read',
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
        return new Promise<{ response: http.IncomingMessage; body: TokenVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "TokenVersion");
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
    * @param query The query restricts the token versions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public tokenVersionServiceSearch (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<TokenVersion>;  }> {
        const localVarPath = this.basePath + '/token-version/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling tokenVersionServiceSearch.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling tokenVersionServiceSearch.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/token-version/search',
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
        return new Promise<{ response: http.IncomingMessage; body: Array<TokenVersion>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<TokenVersion>");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

export { TokenVersionService }
