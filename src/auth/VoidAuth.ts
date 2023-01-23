'use strict';
import localVarRequest = require("request");
import CryptoJS = require("crypto-js");
import { Authentication } from './Authentication';

class VoidAuth implements Authentication {
    protected configuration : any = {};
    protected mac_version = 1;

    constructor(configuration: any) {
        this.configuration = configuration;
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            (<any>Object).assign(requestOptions.headers, this.getAuthHeaders(
                <string> requestOptions.method,
                <string> (<localVarRequest.OptionsWithUri> requestOptions).uri,
                <any> requestOptions.qs
            ));
        }
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
            'x-mac-version': this.mac_version,
            'x-mac-timestamp': timestamp,
            'x-mac-value': this.getSignature(method, resourcePath, timestamp)
        };
        return headers;
    }

    protected getSignature(method: string, resourcePath: string, timestamp: number) : string {
        let data: string = [
            this.mac_version,
            this.configuration.user_id,
            timestamp,
            method,
            resourcePath
        ].join('|');
        let api_secret_base64 = CryptoJS.enc.Base64.parse(this.configuration.api_secret);
        return CryptoJS.HmacSHA512(data, api_secret_base64).toString(CryptoJS.enc.Base64);
    }

}

export { VoidAuth }
