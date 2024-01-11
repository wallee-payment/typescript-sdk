'use strict';
import axios = require("axios");

/**
* Apply authentication settings to header and query params.
*/
type Authentication = (config: axios.InternalAxiosRequestConfig) => axios.InternalAxiosRequestConfig;

export { Authentication }