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

import { expect } from "chai";
import {it} from "mocha";
import { EncryptionUtil } from "../src/utils/EncryptionUtil";

describe("EncryptionUtil tests", () => {
  const VALID_CONTENT_TO_VERIFY =
    '{"entityId":11,"eventId":35,"listenerEntityId":1472041829003,"listenerEntityTechnicalName":"Transaction","spaceId":1,"state":"PROCESSING","timestamp":"2023-12-19T13:43:35+0000","webhookListenerId":2}';

  const VALID_CONTENT_SIGNATURE =
    "MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq+4DuENEySvmMYf";

  const VALID_PUBLIC_KEY =
    "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdWq7ZBGsjUzhBO3e6mzUBLpjpV3TQw1bL1rk3ocjn5C5qne7TY0OBBhiWgaPtWlvUcqASz903vtfeSTQma+SBA==";

  it("should validate correct signature and content", () => {
    const isValid = EncryptionUtil.isContentValid(
      VALID_CONTENT_TO_VERIFY,
      VALID_CONTENT_SIGNATURE,
      VALID_PUBLIC_KEY
    );
    expect(isValid).to.be.true;
  });

  it("should fail validation with incorrect content", () => {
    const isValid = EncryptionUtil.isContentValid(
      "ModifiedContent",
      VALID_CONTENT_SIGNATURE,
      VALID_PUBLIC_KEY
    );
    expect(isValid).to.be.false;
  });

  it("should throw on badly formatted signature", () => {
    expect(() =>
      EncryptionUtil.isContentValid(
        VALID_CONTENT_TO_VERIFY,
        "InvalidModifiedSignature",
        VALID_PUBLIC_KEY
      )
    ).to.throw();
  });

  it("should fail validation with incorrect base64 signature format", () => {
    const isValid = EncryptionUtil.isContentValid(
        VALID_CONTENT_TO_VERIFY,
        "MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq",
        VALID_PUBLIC_KEY
    );
    expect(isValid).to.be.false;
  });

  it("should throw on badly formatted public key", () => {
    expect(() =>
      EncryptionUtil.isContentValid(
        VALID_CONTENT_TO_VERIFY,
        VALID_CONTENT_SIGNATURE,
        "InvalidModifiedPublicKey"
      )
    ).to.throw();
  });

  it("should throw on invalid base64 public key format", () => {
    expect(() =>
      EncryptionUtil.isContentValid(
        VALID_CONTENT_TO_VERIFY,
        VALID_CONTENT_SIGNATURE,
        "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdWq7ZBGsjUzhBO3e6mzUBLpjpV3TQw1bL1rk3ocjn5C5qne7TY0OBBhiWgaPtWlvUcqASz903vtfeSTQm"
      )
    ).to.throw();
  });
});
