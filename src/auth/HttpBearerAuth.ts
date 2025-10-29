/**
 * Wallee AG TypeScript SDK
 *
 * This library allows to interact with the Wallee AG payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://en.wallee.com
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as jwt from "jsonwebtoken";

import {HTTPHeaders, HTTPMethod, HTTPQuery, querystring} from "../runtime";

export class HttpBearerAuth {

    private readonly apiPrefixPath = "/api/v2.0";
    private readonly _userId: number;
    private readonly _authenticationKey: string;

    constructor(userId: number, authenticationKey: string) {
        this._userId = userId;
        this._authenticationKey = authenticationKey;
    }

    async applyToRequest(path: string, method: HTTPMethod, queryParams: HTTPQuery, headerParameters: HTTPHeaders): Promise<void> {
        const timestamp = Math.trunc((new Date()).getTime() / 1000);
        const resourcePath = this.getResourcePath(path, queryParams);
        const payload: jwt.JwtPayload = {
            sub: this._userId.toString(),
            iat: timestamp,
            requestPath: resourcePath,
            requestMethod: method
        };

        const customHeader = {
            alg: "HS256",
            typ: "JWT",
            ver: 1
        };
        const signOptions: jwt.SignOptions = {
            header: customHeader,
        };
        const tokenString = jwt.sign(payload, Buffer.from(this._authenticationKey, "base64"), signOptions);

        if (tokenString) {
            headerParameters["Authorization"] = `Bearer ${tokenString}`;
        }
    }

    private getResourcePath(path: string, queryParams: any): any {
        if (Object.keys(queryParams).length !== 0) {
            path += "?" + querystring(queryParams);
        }
        return `${this.apiPrefixPath}${path}`;
    }
}
