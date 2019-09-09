'use strict';
import * as localVarRequest from 'request';
import { Authentication } from './Authentication';

class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export { HttpBasicAuth }