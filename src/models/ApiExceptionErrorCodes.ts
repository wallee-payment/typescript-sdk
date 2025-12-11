/* tslint:disable */
/* eslint-disable */
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

import type { ResponseError } from "../runtime"

/**
 * ResponseError Error Codes
 */
export class ApiExceptionErrorCodes {
  // This class represents possible HTTP error codes which can be sent by the API.
  // This list corresponds to https://app-wallee.com/en-us/doc/api/web-service#_errors

  // The request was not accepted often due to missing or invalid parameters
  public static readonly BAD_REQUEST = 400;
  // The necessary authentication credentials are missing or incorrect
  public static readonly UNAUTHORIZED = 401;
  // The application user is missing the required permissions
  public static readonly FORBIDDEN = 403;
  // The requested resource was not found
  public static readonly NOT_FOUND = 404;
  // The requested response format is not supported
  public static readonly NOT_ACCEPTABLE = 406;
  // The request conflicts with another request often because of to optimistic locking
  public static readonly CONFLICT = 409;
  // Too many operations in a bulk request
  public static readonly PAYLOAD_TOO_LARGE = 413;
  // The request provides unsupported or invalid data
  public static readonly UNSUPPORTED_MEDIA_TYPE = 415;
  // The pagination offset exceeds the limit
  public static readonly RANGE_NOT_SATISFIABLE = 416;
  // The request is well-formed but contains semantic errors. Check the response body for details
  public static readonly UNPROCESSABLE_ENTITY = 422;
  // Too many requests hit the API too quickly
  public static readonly TOO_MANY_REQUESTS = 429;
  // An internal error occurred on the server
  public static readonly INTERNAL_SERVER_ERROR = 500;

  /**
   * Checks if the given exception matches the specific error code.
   * @param exception The exception to check
   * @param code The error code to compare against
   */
  public static is(exception: ResponseError, code: number): boolean {
    return exception.response.status === code;
  }
}