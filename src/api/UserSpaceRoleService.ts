'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { UserSpaceRole } from  '../models/UserSpaceRole';

class UserSpaceRoleService {
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
    * This operation grants the given role to the user in the given space.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param roleId The role which is mapped to the user and space.
    * @param {*} [options] Override http request options.
    */
    public addRole (userId: number, spaceId: number, roleId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: UserSpaceRole;  }> {
        const localVarPath = this.basePath + '/user-space-role/addRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling addRole.');
            }

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling addRole.');
            }

            // verify required parameter 'roleId' is not null or undefined
            if (roleId === null || roleId === undefined) {
                throw new Error('Required parameter roleId was null or undefined when calling addRole.');
            }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "number");
        }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        if (roleId !== undefined) {
            localVarQueryParameters['roleId'] = ObjectSerializer.serialize(roleId, "number");
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
        return new Promise<{ response: http.IncomingMessage; body: UserSpaceRole;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "UserSpaceRole");
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
    * List all the roles that are assigned to the given user in the given space.
    * @summary List Roles
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param {*} [options] Override http request options.
    */
    public list (userId: number, spaceId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<UserSpaceRole>;  }> {
        const localVarPath = this.basePath + '/user-space-role/list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling list.');
            }

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling list.');
            }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "number");
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
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Array<UserSpaceRole>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<UserSpaceRole>");
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
    * This operation removes the specified user space role.
    * @summary Remove Role
    * @param id The id of user space role which should be removed
    * @param {*} [options] Override http request options.
    */
    public removeRole (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/user-space-role/removeRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeRole.');
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
}

export { UserSpaceRoleService }
