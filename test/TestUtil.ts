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

import { TransactionCreate, LineItemCreate, AddressCreate, LineItemType } from "../src/models";

export class TestUtil {
  private constructor() {
    throw new Error("Utility Test class");
  }

  static getTransactionCreatePayload(): TransactionCreate {
    const email = "test@domain.com";

    const lineItem: LineItemCreate = {
      name: "Red T-Shirt",
      uniqueId: "5412",
      type: LineItemType.Product,
      quantity: 1,
      amountIncludingTax: 29.95,
      sku: "red-t-shirt-789"
    };

    const address: AddressCreate = {
      city: "Winterthur",
      country: "CH",
      emailAddress: email,
      familyName: "Customer",
      givenName: "Good",
      postcode: "8400",
      postalState: "ZH",
      organizationName: "Test GmbH",
      mobilePhoneNumber: "+41791234567",
      salutation: "Ms"
    };

    const transaction: TransactionCreate = {
      autoConfirmationEnabled: true,
      currency: "CHF",
      language: "en-US",
      lineItems: [lineItem],
      customerId: "1234",
      customerEmailAddress: email,
      billingAddress: address,
      shippingAddress: address
    };

    return transaction;
  }
}