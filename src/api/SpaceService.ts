'use strict';

import http = require("http");
import Promise = require("bluebird");
import axios = require("axios");

import { Authentication } from '../auth/Authentication';
import { HMACAuthentication } from '../auth/HMACAuthentication';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';
import { Space } from  '../models/Space';
import { SpaceCreate } from  '../models/SpaceCreate';
import { SpaceUpdate } from  '../models/SpaceUpdate';

class SpaceService {
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
    * Deletes the entity with the given id.
    * @summary Delete
    * @param id 
    * @param {*} [options] Override http request options.
    */
    public _delete (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const url: string = '/space/delete';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
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
            data: id,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;

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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    public count (filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const url: string = '/space/count';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);




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
            data: filter,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: number;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "number");
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
    * Creates the entity with the given properties.
    * @summary Create
    * @param entity The space object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    public create (entity: SpaceCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Space;  }> {
        const url: string = '/space/create';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling create.');
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
            data: entity,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Space;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Space");
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
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The id of the space which should be returned.
    * @param {*} [options] Override http request options.
    */
    public read (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Space;  }> {
        const url: string = '/space/read';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling read.');
        }

        if (id !== undefined) {
            queryParams['id'] = ObjectSerializer.serialize(id, "number");
        }




        headers['Content-Type'] = '*/*';

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
            method: 'GET',
            baseURL: this._basePath,
            headers,
            params: queryParams,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Space;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Space");
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
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param query The query restricts the spaces which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public search (query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<Space>;  }> {
        const url: string = '/space/search';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling search.');
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
            data: query,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Array<Space>;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Array<Space>");
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
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param entity The space object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    public update (entity: SpaceUpdate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Space;  }> {
        const url: string = '/space/update';
        let queryParams: any = {};
        let headers: any = Object.assign({}, this._defaultHeaders);

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling update.');
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
            data: entity,
            timeout: this._timeout * 1000,
            responseType: 'json',
        }

        const axiosInstance: axios.AxiosInstance  = axios.default.create();
        axiosInstance.interceptors.request.use(this._defaultAuthentication);

        return new Promise<{ response: http.IncomingMessage; body: Space;  }>((resolve, reject) => {
            axiosInstance.request(requestConfig)
                .then(
                    success => {
                        let body;
                        body = ObjectSerializer.deserialize(success.data, "Space");
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

export { SpaceService }
