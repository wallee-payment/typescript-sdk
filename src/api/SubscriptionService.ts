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
import { Subscription } from  '../models/Subscription';
import { SubscriptionChangeRequest } from  '../models/SubscriptionChangeRequest';
import { SubscriptionCharge } from  '../models/SubscriptionCharge';
import { SubscriptionCreateRequest } from  '../models/SubscriptionCreateRequest';
import { SubscriptionVersion } from  '../models/SubscriptionVersion';
import { TransactionInvoice } from  '../models/TransactionInvoice';

class SubscriptionService {
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
    * This operation allows to apply changes on a subscription.
    * @summary apply changes
    * @param spaceId 
    * @param request 
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceApplyChanges (spaceId: number, request: SubscriptionChangeRequest, options: any = {}) : Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }> {
        const localVarPath = this.basePath + '/subscription/applyChanges';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceApplyChanges.');
            }

            // verify required parameter 'request' is not null or undefined
            if (request === null || request === undefined) {
                throw new Error('Required parameter request was null or undefined when calling subscriptionServiceApplyChanges.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/applyChanges',
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
            body: ObjectSerializer.serialize(request, "SubscriptionChangeRequest")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
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
    public subscriptionServiceCount (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/subscription/count';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceCount.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/count',
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
    * The create operation creates a new subscription and a corresponding subscription version.
    * @summary Create
    * @param spaceId 
    * @param createRequest 
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceCreate (spaceId: number, createRequest: SubscriptionCreateRequest, options: any = {}) : Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }> {
        const localVarPath = this.basePath + '/subscription/create';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceCreate.');
            }

            // verify required parameter 'createRequest' is not null or undefined
            if (createRequest === null || createRequest === undefined) {
                throw new Error('Required parameter createRequest was null or undefined when calling subscriptionServiceCreate.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/create',
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
            body: ObjectSerializer.serialize(createRequest, "SubscriptionCreateRequest")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * The initialize operation initializes a subscription. This method uses charge flows to carry out the transaction.
    * @summary initialize
    * @param spaceId 
    * @param subscriptionId The provided subscription id will be used to lookup the subscription which should be initialized.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceInitialize (spaceId: number, subscriptionId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: SubscriptionCharge;  }> {
        const localVarPath = this.basePath + '/subscription/initialize';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceInitialize.');
            }

            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling subscriptionServiceInitialize.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer.serialize(subscriptionId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/initialize',
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
        return new Promise<{ response: http.IncomingMessage; body: SubscriptionCharge;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "SubscriptionCharge");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * The initialize operation initializes a subscription when the subscriber is present. The method will initialize a transaction which has to be completed by using the transaction service.
    * @summary initializeSubscriberPresent
    * @param spaceId 
    * @param subscriptionId 
    * @param successUrl The subscriber will be redirected to the success URL when the transaction is successful.
    * @param failedUrl The subscriber will be redirected to the fail URL when the transaction fails.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceInitializeSubscriberPresent (spaceId: number, subscriptionId: number, successUrl?: string, failedUrl?: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body: SubscriptionCharge;  }> {
        const localVarPath = this.basePath + '/subscription/initializeSubscriberPresent';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceInitializeSubscriberPresent.');
            }

            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling subscriptionServiceInitializeSubscriberPresent.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer.serialize(subscriptionId, "number");
        }

        if (successUrl !== undefined) {
            localVarQueryParameters['successUrl'] = ObjectSerializer.serialize(successUrl, "string");
        }

        if (failedUrl !== undefined) {
            localVarQueryParameters['failedUrl'] = ObjectSerializer.serialize(failedUrl, "string");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/initializeSubscriberPresent',
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
        return new Promise<{ response: http.IncomingMessage; body: SubscriptionCharge;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "SubscriptionCharge");
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
    * @param id The id of the subscription which should be returned.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceRead (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Subscription;  }> {
        const localVarPath = this.basePath + '/subscription/read';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceRead.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling subscriptionServiceRead.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'GET',
            '/subscription/read',
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
        return new Promise<{ response: http.IncomingMessage; body: Subscription;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Subscription");
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
    * @param query The query restricts the subscriptions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceSearch (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<Subscription>;  }> {
        const localVarPath = this.basePath + '/subscription/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceSearch.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling subscriptionServiceSearch.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/search',
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
        return new Promise<{ response: http.IncomingMessage; body: Array<Subscription>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<Subscription>");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * This operation allows to search for subscription invoices.
    * @summary Search Subscription Invoices
    * @param spaceId 
    * @param subscriptionId The id of the subscription for which the invoices should be searched for.
    * @param query The query restricts the invoices which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceSearchSubscriptionInvoices (spaceId: number, subscriptionId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<TransactionInvoice>;  }> {
        const localVarPath = this.basePath + '/subscription/searchSubscriptionInvoices';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceSearchSubscriptionInvoices.');
            }

            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling subscriptionServiceSearchSubscriptionInvoices.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling subscriptionServiceSearchSubscriptionInvoices.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer.serialize(subscriptionId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/searchSubscriptionInvoices',
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
        return new Promise<{ response: http.IncomingMessage; body: Array<TransactionInvoice>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<TransactionInvoice>");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * This operation allows to terminate a subscription.
    * @summary terminate
    * @param spaceId 
    * @param subscriptionId The subscription id identifies the subscription which should be terminated.
    * @param respectTerminationPeriod The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceTerminate (spaceId: number, subscriptionId: number, respectTerminationPeriod: boolean, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/subscription/terminate';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceTerminate.');
            }

            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling subscriptionServiceTerminate.');
            }

            // verify required parameter 'respectTerminationPeriod' is not null or undefined
            if (respectTerminationPeriod === null || respectTerminationPeriod === undefined) {
                throw new Error('Required parameter respectTerminationPeriod was null or undefined when calling subscriptionServiceTerminate.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer.serialize(subscriptionId, "number");
        }

        if (respectTerminationPeriod !== undefined) {
            localVarQueryParameters['respectTerminationPeriod'] = ObjectSerializer.serialize(respectTerminationPeriod, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/terminate',
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
    /**
    * The update product version operation updates the product version of the subscription to the latest active product version.
    * @summary update product version
    * @param spaceId 
    * @param subscriptionId The subscription id identifies the subscription which should be updated to the latest version.
    * @param respectTerminationPeriod The subscription version may be retired. The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    */
    public subscriptionServiceUpdateProductVersion (spaceId: number, subscriptionId: number, respectTerminationPeriod: boolean, options: any = {}) : Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }> {
        const localVarPath = this.basePath + '/subscription/updateProductVersion';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling subscriptionServiceUpdateProductVersion.');
            }

            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling subscriptionServiceUpdateProductVersion.');
            }

            // verify required parameter 'respectTerminationPeriod' is not null or undefined
            if (respectTerminationPeriod === null || respectTerminationPeriod === undefined) {
                throw new Error('Required parameter respectTerminationPeriod was null or undefined when calling subscriptionServiceUpdateProductVersion.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer.serialize(subscriptionId, "number");
        }

        if (respectTerminationPeriod !== undefined) {
            localVarQueryParameters['respectTerminationPeriod'] = ObjectSerializer.serialize(respectTerminationPeriod, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/subscription/updateProductVersion',
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
        return new Promise<{ response: http.IncomingMessage; body: SubscriptionVersion;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "SubscriptionVersion");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}

export { SubscriptionService }
