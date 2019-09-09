'use strict';

import localVarRequest = require("request");
import http = require("http");
import Promise = require("bluebird");
import CryptoJS = require("crypto-js");

import { Authentication } from '../auth/Authentication';
import { VoidAuth } from '../auth/VoidAuth';
import { ObjectSerializer } from '../serializers/ObjectSerializer';

import { ClientError } from  '../models/ClientError';
import { ServerError } from  '../models/ServerError';
import { UserSpaceRole } from  '../models/UserSpaceRole';

class UserSpaceRoleService {
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
    * This operation grants the given role to the user in the given space.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param roleId The role which is mapped to the user and space.
    * @param {*} [options] Override http request options.
    */
    public userSpaceRoleServiceAddRole (userId: number, spaceId: number, roleId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: UserSpaceRole;  }> {
        const localVarPath = this.basePath + '/user-space-role/addRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling userSpaceRoleServiceAddRole.');
            }

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling userSpaceRoleServiceAddRole.');
            }

            // verify required parameter 'roleId' is not null or undefined
            if (roleId === null || roleId === undefined) {
                throw new Error('Required parameter roleId was null or undefined when calling userSpaceRoleServiceAddRole.');
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

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-space-role/addRole',
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
        return new Promise<{ response: http.IncomingMessage; body: UserSpaceRole;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "UserSpaceRole");
                        resolve({ response: response, body: body });
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
    public userSpaceRoleServiceList (userId: number, spaceId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<UserSpaceRole>;  }> {
        const localVarPath = this.basePath + '/user-space-role/list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling userSpaceRoleServiceList.');
            }

            // verify required parameter 'spaceId' is not null or undefined
            if (spaceId === null || spaceId === undefined) {
                throw new Error('Required parameter spaceId was null or undefined when calling userSpaceRoleServiceList.');
            }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "number");
        }

        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer.serialize(spaceId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-space-role/list',
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
        return new Promise<{ response: http.IncomingMessage; body: Array<UserSpaceRole>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<UserSpaceRole>");
                        resolve({ response: response, body: body });
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
    public userSpaceRoleServiceRemoveRole (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/user-space-role/removeRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling userSpaceRoleServiceRemoveRole.');
            }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-space-role/removeRole',
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

export { UserSpaceRoleService }
