import { expect } from "chai";
import { EncryptionUtil } from "../src/util/EncryptionUtil";

describe("EncryptionUtil", () => {

  const validContentToVerify =
    '{"entityId":11,"eventId":35,"listenerEntityId":1472041829003,"listenerEntityTechnicalName":"Transaction","spaceId":1,"state":"PROCESSING","timestamp":"2023-12-19T13:43:35+0000","webhookListenerId":2}';

  const validContentSignature =
    "MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq+4DuENEySvmMYf";

  const validEncodedPublicKey =
    "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdWq7ZBGsjUzhBO3e6mzUBLpjpV3TQw1bL1rk3ocjn5C5qne7TY0OBBhiWgaPtWlvUcqASz903vtfeSTQma+SBA==";

  it('should return true for valid content, signature, and public key', (done) => {
    expect(EncryptionUtil.isContentValid(validContentToVerify, validContentSignature, validEncodedPublicKey)).to.be.true;
    done();
  });

  it('should return false when the content does not correspond to the signature', (done) => {
    // Modify the content to make it invalid
    const modifiedContent = 'ModifiedContent';

    expect(EncryptionUtil.isContentValid(modifiedContent, validContentSignature, validEncodedPublicKey)).to.be.false;
    done();
  });

  it('should return an error for invalid signature in the plain text format', (done) => {
    // Modify the signature to make it invalid
    const modifiedSignature = "InvalidModifiedSignature";

    try {
      EncryptionUtil.isContentValid(validContentToVerify, modifiedSignature, validEncodedPublicKey);
      done(new Error('Expected an exception but none was thrown.'));
    } catch (error: any) {
      expect(error).to.be.an.instanceOf(Error);
      done();
    }
  });

  it('should return false for invalid signature in the Base64 format', (done) => {
    // Modify the signature to make it invalid in the Base64 format
    const modifiedBase64Signature = "MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq";

    expect(EncryptionUtil.isContentValid(validContentToVerify, modifiedBase64Signature, validEncodedPublicKey)).to.be.false;
    done();
  });


  it('should return an error for invalid public key in the plain text format', (done) => {
    // Modify the public key in the plain text format to make it invalid
    const modifiedPublicKey = "InvalidModifiedPublicKey";

    try {
      EncryptionUtil.isContentValid(validContentToVerify, validContentSignature, modifiedPublicKey);
      done(new Error('Expected an exception but none was thrown.'));
    } catch (error: any) {
      expect(error).to.be.an.instanceOf(Error);
      done();
    }
  });

  it('should return an error for invalid public key in the Base64 format', (done) => {
    // Modify the public key in the Base64 format to make it invalid
    const modifiedBase64PublicKey = 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdWq7ZBGsjUzhBO3e6mzUBLpjpV3TQw1bL1rk3ocjn5C5qne7TY0OBBhiWgaPtWlvUcqASz903vtfeSTQm';

    try {
      EncryptionUtil.isContentValid(validContentToVerify, validContentSignature, modifiedBase64PublicKey);
      done(new Error('Expected an exception but none was thrown.'));
    } catch (error: any) {
      expect(error).to.be.an.instanceOf(Error);
      done();
    }
  });

});