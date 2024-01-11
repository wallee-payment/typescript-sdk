'use strict';

import CryptoJS = require("crypto-js");
import axios = require("axios");

class HMACAuthentication {
    protected configuration : any = {};
    protected mac_version = 1;

    constructor(configuration: any) {
        this.configuration = configuration;
        this.apply = this.apply.bind(this);
    }

    apply(config: axios.InternalAxiosRequestConfig): axios.InternalAxiosRequestConfig {
        if (config && config.headers) {
            Object.assign(config.headers, this.getAuthHeaders(
                (<string> config.method).toUpperCase(),
                <string> config.url,
                <any> config.params
            ));
        }
        return config;
    }

    private getAuthHeaders(method: string, resourcePath: string, queryParams: any) : any {

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

    private getSignature(method: string, resourcePath: string, timestamp: number) : string {
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

export { HMACAuthentication }
