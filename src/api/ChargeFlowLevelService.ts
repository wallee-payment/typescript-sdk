'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ChargeFlowLevel } from  '../models/ChargeFlowLevel';
import { ClientError } from  '../models/ClientError';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';

class ChargeFlowLevelService {
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId 
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    public count (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/charge-flow-level/count';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling count.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
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
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId 
    * @param id The id of the payment flow level which should be returned.
    * @param {*} [options] Override http request options.
    */
    public read (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: ChargeFlowLevel;  }> {
        const localVarPath = this.basePath + '/charge-flow-level/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling read.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling read.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

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
        return new Promise<{ response: http.IncomingMessage; body: ChargeFlowLevel;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "ChargeFlowLevel");
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
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId 
    * @param query The query restricts the payment flow levels which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public search (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<ChargeFlowLevel>;  }> {
        const localVarPath = this.basePath + '/charge-flow-level/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling search.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling search.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
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
        return new Promise<{ response: http.IncomingMessage; body: Array<ChargeFlowLevel>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<ChargeFlowLevel>");
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
    /**
    * Sends the payment link of the charge flow level with the given 'id'.
    * @summary Send Payment Link
    * @param spaceId 
    * @param id The id of the charge flow level whose payment link should be sent.
    * @param {*} [options] Override http request options.
    */
    public sendMessage (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: ChargeFlowLevel;  }> {
        const localVarPath = this.basePath + '/charge-flow-level/sendMessage';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling sendMessage.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling sendMessage.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
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
        return new Promise<{ response: http.IncomingMessage; body: ChargeFlowLevel;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "ChargeFlowLevel");
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

export { ChargeFlowLevelService }
