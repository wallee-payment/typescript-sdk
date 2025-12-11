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

import { Ecdsa, PublicKey, Signature } from "starkbank-ecdsa";
import { WalleeSdkException } from "../models/WalleeSdkException";
import { SdkExceptionErrorCodes } from "../models/SdkExceptionErrorCodes";

abstract class EncryptionUtil {
  private constructor() {}

  public static isContentValid(
    contentToVerify: string,
    contentSignature: string,
    encodedPublicKey: string
  ): boolean {
    const pubKeyPem = `-----BEGIN PUBLIC KEY-----\n${encodedPublicKey}\n-----END PUBLIC KEY-----`;

    let publicKey;
    try {
      publicKey = PublicKey.fromPem(pubKeyPem);
    } catch (error: any) {
      throw new WalleeSdkException(
        SdkExceptionErrorCodes.INVALID_WEBHOOK_ENCRYPTION_PUBLIC_KEY,
        `Invalid public key: ${error.message}`
      );
    }

    let signature;
    try {
      signature = Signature.fromBase64(contentSignature);
    } catch (error: any) {
      throw new WalleeSdkException(
        SdkExceptionErrorCodes.INVALID_WEBHOOK_ENCRYPTION_CONTENT_SIGNATURE,
        `Invalid webhook content signature: ${error.message}`
      );
    }

    try {
      return Ecdsa.verify(contentToVerify, signature, publicKey);
    } catch (error: any) {
      throw new WalleeSdkException(
        SdkExceptionErrorCodes.WEBHOOK_ENCRYPTION_SIGNATURE_VERIFICATION_FAILED,
        `Content verification failed: ${error.message}`
      );
    }
  }
}

export { EncryptionUtil };