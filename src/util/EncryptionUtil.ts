"use strict";

import { Ecdsa, PublicKey, Signature } from "starkbank-ecdsa";

abstract class EncryptionUtil {
  private constructor() { }

  public static isContentValid(contentToVerify: string, contentSignature: string, encodedPublicKey: string): boolean {
    if (!encodedPublicKey) {
      throw new Error('Public key is missing');
    }

    const pubKeyPem = "-----BEGIN PUBLIC KEY-----\n" + encodedPublicKey + "\n-----END PUBLIC KEY-----";

    try {
      const publicKey = PublicKey.fromPem(pubKeyPem);
      const signature = Signature.fromBase64(contentSignature);

      const verificationResult = Ecdsa.verify(contentToVerify, signature, publicKey);

      return verificationResult;
    } catch (error) {
      console.error("Error verifying content:", error);
      return false;
    }
  }
}

export { EncryptionUtil };