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

import type { WalleeSdkException } from "./WalleeSdkException";

/**
 * SDK Local Error Codes
 */
export class SdkExceptionErrorCodes {
  // Unknown webhook signature public key
  public static readonly UNKNOWN_WEBHOOK_ENCRYPTION_PUBLIC_KEY = 'unknown_public_key';
  // General webhook encryption error
  public static readonly WEBHOOK_ENCRYPTION_GENERAL_ERROR = 'encryption_error';
  // Invalid webhook signature public key
  public static readonly INVALID_WEBHOOK_ENCRYPTION_PUBLIC_KEY = 'invalid_public_key';
  // Invalid webhook signature header
  public static readonly INVALID_WEBHOOK_ENCRYPTION_HEADER_FORMAT = 'invalid_webhook_header';
  // Unsupported webhook signature algorithm
  public static readonly UNSUPPORTED_WEBHOOK_ENCRYPTION_ALGORYTHM = 'unsupported_encryption_algorythm';
  // Unknown webhook encryption provider
  public static readonly UNKNOWN_WEBHOOK_ENCRYPTION_PROVIDER = 'unknown_encryption_provider';
  // Encryption verifier initialization error
  public static readonly WEBHOOK_ENCRYPTION_VERIFIER_INIT_ERROR = 'verifier_init_failure';
  // Error during content update in encryption verifier
  public static readonly WEBHOOK_ENCRYPTION_VERIFIER_CONTENT_UPDATE_ERROR = 'content_update_failure';
  // Encryption signature verification failed
  public static readonly WEBHOOK_ENCRYPTION_SIGNATURE_VERIFICATION_FAILED = 'signature_verification_failure';
  // Invalid webhook content signature
  public static readonly INVALID_WEBHOOK_ENCRYPTION_CONTENT_SIGNATURE = 'invalid_content_signature';
  // Missing webhook signature algorithm value
  public static readonly MISSING_WEBHOOK_ENCRYPTION_ALGORYTHM = 'missing_encryption_algorythm';

  /**
   * Checks if the given exception matches the specific error code.
   * @param exception The exception to check
   * @param errorCode The error code to compare against
   */
  public static is(exception: WalleeSdkException, errorCode: SdkExceptionErrorCodes): boolean {
    return exception.code === errorCode;
  }
}