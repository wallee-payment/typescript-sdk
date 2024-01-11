import { expect } from "chai";
import { EncryptionUtil } from "../src/util/EncryptionUtil";

describe("EncryptionUtil", () => {

  const validContentToVerify =
      '{"entityId":11,"eventId":35,"listenerEntityId":1472041829003,"listenerEntityTechnicalName":"Transaction","spaceId":1,"state":"PROCESSING","timestamp":"2023-12-19T13:43:35+0000","webhookListenerId":2}';

  const validContentSignature =
      "MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq+4DuENEySvmMYf";

  const validEncodedPublicKey =
      "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdWq7ZBGsjUzhBO3e6mzUBLpjpV3TQw1bL1rk3ocjn5C5qne7TY0OBBhiWgaPtWlvUcqASz903vtfeSTQma+SBA==";

  it("should return true when the signature is valid", () => {
    expect(EncryptionUtil.isContentValid(validContentToVerify, validContentSignature, validEncodedPublicKey)).to.be.true;
  });

  it('should throw an error when the public key is missing', () => {
    expect(() => EncryptionUtil.isContentValid(validContentToVerify, validContentSignature, '')).to.throw('Public key is missing');
  });

  it('should return false when the signature is invalid', () => {
    const invalidSignature = "invalid_signature";
    const result = EncryptionUtil.isContentValid(validContentToVerify, invalidSignature, validEncodedPublicKey);
    expect(result).to.be.false;
  });

});