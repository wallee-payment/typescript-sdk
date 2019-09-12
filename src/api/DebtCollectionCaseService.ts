'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { DebtCollectionCase } from  '../models/DebtCollectionCase';
import { DebtCollectionCaseCreate } from  '../models/DebtCollectionCaseCreate';
import { DebtCollectionCaseDocument } from  '../models/DebtCollectionCaseDocument';
import { DebtCollectionCaseUpdate } from  '../models/DebtCollectionCaseUpdate';
import { DebtCollectionReceipt } from  '../models/DebtCollectionReceipt';
import { EntityQuery } from  '../models/EntityQuery';
import { EntityQueryFilter } from  '../models/EntityQueryFilter';
import { ServerError } from  '../models/ServerError';

class DebtCollectionCaseService {
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
    * Deletes the entity with the given id.
    * @summary Delete
    * @param spaceId 
    * @param id 
    * @param {*} [options] Override http request options.
    */
    public _delete (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/delete';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling _delete.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling _delete.');
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
            body: ObjectSerializer.serialize(id, "number")
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
    * Adds a new collected amount to the case, creating a new payment receipt.
    * @summary Add Collected Amount
    * @param spaceId 
    * @param id The id of the debt collection case for which the amount should be added.
    * @param collectedAmount The amount that has been collected.
    * @param externalId The unique external id of this payment receipt.
    * @param {*} [options] Override http request options.
    */
    public addCollectedAmount (spaceId: number, id: number, collectedAmount: number, externalId: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionReceipt;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/addCollectedAmount';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling addCollectedAmount.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addCollectedAmount.');
            }

            // verify required parameter 'collectedAmount' is not null or undefined
            if (collectedAmount === null || collectedAmount === undefined) {
                throw new Error('Required parameter collectedAmount was null or undefined when calling addCollectedAmount.');
            }

            // verify required parameter 'externalId' is not null or undefined
            if (externalId === null || externalId === undefined) {
                throw new Error('Required parameter externalId was null or undefined when calling addCollectedAmount.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        if (collectedAmount !== undefined) {
            localVarQueryParameters['collectedAmount'] = ObjectSerializer.serialize(collectedAmount, "number");
        }

        if (externalId !== undefined) {
            localVarQueryParameters['externalId'] = ObjectSerializer.serialize(externalId, "string");
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionReceipt;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionReceipt");
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
    * Attach an additional supporting document to the case.
    * @summary Attach Document
    * @param spaceId 
    * @param id The id of the debt collection case.
    * @param fileName The file name of the document that is uploaded.
    * @param contentBase64 The BASE64 encoded contents of the document.
    * @param {*} [options] Override http request options.
    */
    public attachDocument (spaceId: number, id: number, fileName: string, contentBase64: string, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCaseDocument;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/attachDocument';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling attachDocument.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachDocument.');
            }

            // verify required parameter 'fileName' is not null or undefined
            if (fileName === null || fileName === undefined) {
                throw new Error('Required parameter fileName was null or undefined when calling attachDocument.');
            }

            // verify required parameter 'contentBase64' is not null or undefined
            if (contentBase64 === null || contentBase64 === undefined) {
                throw new Error('Required parameter contentBase64 was null or undefined when calling attachDocument.');
            }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        if (fileName !== undefined) {
            localVarQueryParameters['fileName'] = ObjectSerializer.serialize(fileName, "string");
        }

        if (contentBase64 !== undefined) {
            localVarQueryParameters['contentBase64'] = ObjectSerializer.serialize(contentBase64, "string");
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCaseDocument;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCaseDocument");
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
    * Closes the debt collection case, meaning no further money can be collected.
    * @summary Close
    * @param spaceId 
    * @param id The id of the debt collection case which should be closed.
    * @param {*} [options] Override http request options.
    */
    public close (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/close';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling close.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling close.');
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId 
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    public count (spaceId: number, filter?: EntityQueryFilter, options: any = {}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/count';
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
    * Creates the entity with the given properties.
    * @summary Create
    * @param spaceId 
    * @param entity The debt collection case object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    public create (spaceId: number, entity: DebtCollectionCaseCreate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/create';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling create.');
            }

            // verify required parameter 'entity' is not null or undefined
            if (entity === null || entity === undefined) {
                throw new Error('Required parameter entity was null or undefined when calling create.');
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
            body: ObjectSerializer.serialize(entity, "DebtCollectionCaseCreate")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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
    * Returns all documents that are attached to a debt collection case.
    * @summary Documents
    * @param spaceId 
    * @param id The id of the debt collection case for which the attached documents are returned.
    * @param {*} [options] Override http request options.
    */
    public documents (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<DebtCollectionCaseDocument>;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/documents';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling documents.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling documents.');
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
        return new Promise<{ response: http.IncomingMessage; body: Array<DebtCollectionCaseDocument>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<DebtCollectionCaseDocument>");
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
    * This operation will mark a debt collection case as prepared and allow the collection process to proceed.
    * @summary Mark Case As Prepared
    * @param spaceId 
    * @param id The id of the debt collection case which should be marked as prepared.
    * @param {*} [options] Override http request options.
    */
    public markAsPrepared (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/markAsPrepared';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling markAsPrepared.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling markAsPrepared.');
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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
    * This operation will mark a debt collection case as reviewed and allow the collection process to proceed.
    * @summary Mark Case As Reviewed
    * @param spaceId 
    * @param id The id of the debt collection case which should be reviewed.
    * @param {*} [options] Override http request options.
    */
    public markAsReviewed (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/markAsReviewed';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling markAsReviewed.');
            }

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling markAsReviewed.');
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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
    * @param id The id of the debt collection case which should be returned.
    * @param {*} [options] Override http request options.
    */
    public read (spaceId: number, id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/read';
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
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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
    * @param query The query restricts the cases which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    public search (spaceId: number, query: EntityQuery, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<DebtCollectionCase>;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/search';
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
        return new Promise<{ response: http.IncomingMessage; body: Array<DebtCollectionCase>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<DebtCollectionCase>");
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
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId 
    * @param entity The object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    public update (spaceId: number, entity: DebtCollectionCaseUpdate, options: any = {}) : Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }> {
        const localVarPath = this.basePath + '/debt-collection-case/update';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling update.');
            }

            // verify required parameter 'entity' is not null or undefined
            if (entity === null || entity === undefined) {
                throw new Error('Required parameter entity was null or undefined when calling update.');
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
            body: ObjectSerializer.serialize(entity, "DebtCollectionCaseUpdate")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: DebtCollectionCase;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "DebtCollectionCase");
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

export { DebtCollectionCaseService }
