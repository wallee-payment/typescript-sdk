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

/**
 * The error code represents a potential error which may be thrown by Wallee SDK.
 *
 * Error Code Ranges:
 * - 1000 - 1999: Client-side errors - typically due to invalid input (e.g., malformed headers, bad keys).
 * - 2000 - 2999: Server-side errors - typically due to incorrect data provided by the server.
 * - 404: Not Found - used when endpoint returns an empty response.
 */
export enum ErrorCode {
  // 404
  UNKNOWN_WEBHOOK_ENCRYPTION_PUBLIC_KEY = 404,

  // 1000–1999
  WEBHOOK_ENCRYPTION_GENERAL_ERROR = 1000,
  INVALID_WEBHOOK_ENCRYPTION_PUBLIC_KEY = 1001,
  INVALID_WEBHOOK_ENCRYPTION_HEADER_FORMAT = 1002,
  UNSUPPORTED_WEBHOOK_ENCRYPTION_ALGORYTHM = 1003,
  UNKNOWN_WEBHOOK_ENCRYPTION_PROVIDER = 1004,
  WEBHOOK_ENCRYPTION_VERIFIER_INIT_ERROR = 1005,
  WEBHOOK_ENCRYPTION_VERIFIER_CONTENT_UPDATE_ERROR = 1006,
  WEBHOOK_ENCRYPTION_SIGNATURE_VERIFICATION_FAILED = 1007,
  INVALID_WEBHOOK_ENCRYPTION_CONTENT_SIGNATURE = 1008,

  // 2000–2999
  MISSING_WEBHOOK_ENCRYPTION_ALGORYTHM = 2000
}

export const ErrorDescriptions: Record<ErrorCode, string> = {
  [ErrorCode.UNKNOWN_WEBHOOK_ENCRYPTION_PUBLIC_KEY]: "Unknown webhook signature public key",
  [ErrorCode.WEBHOOK_ENCRYPTION_GENERAL_ERROR]: "General webhook encryption error",
  [ErrorCode.INVALID_WEBHOOK_ENCRYPTION_PUBLIC_KEY]: "Invalid webhook signature public key",
  [ErrorCode.INVALID_WEBHOOK_ENCRYPTION_HEADER_FORMAT]: "Invalid webhook signature header",
  [ErrorCode.UNSUPPORTED_WEBHOOK_ENCRYPTION_ALGORYTHM]: "Unsupported webhook signature algorithm",
  [ErrorCode.UNKNOWN_WEBHOOK_ENCRYPTION_PROVIDER]: "Unknown webhook encryption provider",
  [ErrorCode.WEBHOOK_ENCRYPTION_VERIFIER_INIT_ERROR]: "Encryption verifier initialization error",
  [ErrorCode.WEBHOOK_ENCRYPTION_VERIFIER_CONTENT_UPDATE_ERROR]: "Error during content update in encryption verifier",
  [ErrorCode.WEBHOOK_ENCRYPTION_SIGNATURE_VERIFICATION_FAILED]: "Encryption signature verification failed",
  [ErrorCode.INVALID_WEBHOOK_ENCRYPTION_CONTENT_SIGNATURE]: "Invalid webhook content signature",
  [ErrorCode.MISSING_WEBHOOK_ENCRYPTION_ALGORYTHM]: "Missing webhook signature algorithm value"
};