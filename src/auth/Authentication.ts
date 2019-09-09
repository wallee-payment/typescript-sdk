'use strict';
import * as localVarRequest from 'request';

interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export { Authentication }