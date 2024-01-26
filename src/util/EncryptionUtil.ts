"use strict";

import { Ecdsa, PublicKey, Signature } from "starkbank-ecdsa";

abstract class EncryptionUtil {
  private constructor() { }

  public static isContentValid(contentToVerify: string, contentSignature: string, encodedPublicKey: string): boolean {
    const pubKeyPem = "-----BEGIN PUBLIC KEY-----\n" + encodedPublicKey + "\n-----END PUBLIC KEY-----";

    const publicKey = PublicKey.fromPem(pubKeyPem);
    const signature = Signature.fromBase64(contentSignature);

    return Ecdsa.verify(contentToVerify, signature, publicKey);
  }
}

export { EncryptionUtil };