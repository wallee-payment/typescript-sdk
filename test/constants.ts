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

import {Configuration, DefaultConfig} from '../src/runtime'
import {HttpBearerAuth} from '../src/auth/HttpBearerAuth'
import {AuthenticatedCardRequest} from '../src/models'

export const SPACE_ID = 405
export const APPLICATION_USER_ID = 512
export const AUTHENTICATION_KEY = "FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ="
export const TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID = 1352
export const TEST_CUSTOMER_ID = 7311742

export const MOCK_CARD_DATA: AuthenticatedCardRequest = {
  cardData: {
    primaryAccountNumber: "4111111111111111",
    expiryDate: "2026-12"
  },
  paymentMethodConfiguration: TEST_CARD_PAYMENT_METHOD_CONFIGURATION_ID
}

export const HttpBearerAuthConfig =
    new HttpBearerAuth(
        APPLICATION_USER_ID,
        AUTHENTICATION_KEY)

/*
 Singleton instance for Configuration with a global timeout.
 To ensure the configuration is static (shared and single across the application),
 a single instance is used within all the instances (shared state across the application).

 For more details on how `DefaultConfig` is initialized in 'runtime', see:
` export const DefaultConfig = new Configuration();`
 */
export const DefaultConfiguration: Configuration = DefaultConfig
DefaultConfiguration.httpBearerAuth = HttpBearerAuthConfig

// Set up of DefaultConfiguration timeout all over the classes
// DefaultConfiguration.requestTimeout = 33