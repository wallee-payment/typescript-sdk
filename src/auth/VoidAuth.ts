'use strict';
import * as localVarRequest from 'request';
import { Authentication } from './Authentication';

class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export { VoidAuth }
