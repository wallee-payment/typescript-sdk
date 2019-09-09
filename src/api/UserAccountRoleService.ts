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
import { UserAccountRole } from  '../models/UserAccountRole';

class UserAccountRoleService {
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
    * This operation grants the role to the given user with in the given account.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param accountId The account to which the role is mapped.
    * @param roleId The role which is mapped to the user and account.
    * @param appliesOnSubaccount Whether the role applies only on subaccount.
    * @param {*} [options] Override http request options.
    */
    public userAccountRoleServiceAddRole (userId: number, accountId: number, roleId: number, appliesOnSubaccount?: boolean, options: any = {}) : Promise<{ response: http.IncomingMessage; body: UserAccountRole;  }> {
        const localVarPath = this.basePath + '/user-account-role/addRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling userAccountRoleServiceAddRole.');
            }

            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling userAccountRoleServiceAddRole.');
            }

            // verify required parameter 'roleId' is not null or undefined
            if (roleId === null || roleId === undefined) {
                throw new Error('Required parameter roleId was null or undefined when calling userAccountRoleServiceAddRole.');
            }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "number");
        }

        if (accountId !== undefined) {
            localVarQueryParameters['accountId'] = ObjectSerializer.serialize(accountId, "number");
        }

        if (roleId !== undefined) {
            localVarQueryParameters['roleId'] = ObjectSerializer.serialize(roleId, "number");
        }

        if (appliesOnSubaccount !== undefined) {
            localVarQueryParameters['appliesOnSubaccount'] = ObjectSerializer.serialize(appliesOnSubaccount, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-account-role/addRole',
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
        return new Promise<{ response: http.IncomingMessage; body: UserAccountRole;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "UserAccountRole");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * List all the roles that are assigned to the given user in the given account.
    * @summary List Roles
    * @param userId The id of the user to whom the role is assigned.
    * @param accountId The account to which the role is mapped.
    * @param {*} [options] Override http request options.
    */
    public userAccountRoleServiceList (userId: number, accountId: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body: Array<UserAccountRole>;  }> {
        const localVarPath = this.basePath + '/user-account-role/list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling userAccountRoleServiceList.');
            }

            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new Error('Required parameter accountId was null or undefined when calling userAccountRoleServiceList.');
            }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "number");
        }

        if (accountId !== undefined) {
            localVarQueryParameters['accountId'] = ObjectSerializer.serialize(accountId, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-account-role/list',
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
        return new Promise<{ response: http.IncomingMessage; body: Array<UserAccountRole>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<UserAccountRole>");
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
    * This operation removes the specified user account role.
    * @summary Remove Role
    * @param id The id of user account role which should be removed
    * @param {*} [options] Override http request options.
    */
    public userAccountRoleServiceRemoveRole (id: number, options: any = {}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/user-account-role/removeRole';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling userAccountRoleServiceRemoveRole.');
            }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "number");
        }

        (<any>Object).assign(localVarHeaderParams, this.getAuthHeaders(
            'POST',
            '/user-account-role/removeRole',
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

export { UserAccountRoleService }
