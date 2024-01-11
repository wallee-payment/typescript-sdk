import { expect } from "chai";
import { Wallee as Whitelabel } from "../index";
import {
    ApiConfig
} from "./constants";

const {
    WebhookEncryptionService
} = Whitelabel.api;

const webhookEncryptionService = new WebhookEncryptionService(ApiConfig);

describe("WebhookEncryptionService", () => {
  xit("should validate correct content and signature", (done) => {
    const contentToVerify =
      '{"entityId":11,"eventId":35,"listenerEntityId":1472041829003,"listenerEntityTechnicalName":"Transaction","spaceId":1,"state":"PROCESSING","timestamp":"2023-12-19T13:43:35+0000","webhookListenerId":2}';

    const signatureHeader =
      "algorithm=SHA256withECDSA, keyId=ab3b774e-770e-4644-9b51-885d71f973e5, signature=MEYCIQCTzbMrMsOAC6T57T9kQTb1iGZVg2R7n6pY9A4ML4P31gIhAIOoav8cG8x0jpRWQztqSJIC8gXWKq+4DuENEySvmMYf";

    webhookEncryptionService
      .isContentValid(signatureHeader, contentToVerify)
      .done((response) => {
        expect(response).to.be.true;
        done();
      });
  });
});