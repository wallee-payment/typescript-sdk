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

import * as runtime from '../runtime';

/**
 * Utility class for service-related functionality.
 *
 * The `ServiceUtils` class provides a collection of helper methods that simplify
 * common tasks involved in making HTTP requests, handling configurations, and
 * managing service-specific logic.
 *
 * This class is designed to be stateless, offering static methods that can be
 * reused throughout the application without the need for instantiation.
 */
export class ServiceApiUtils {
    /**
     * Adjusts the request signal by applying a timeout and handling overrides.
     * This function modifies the request configuration by integrating a timeout signal.
     * @param initOverrides - Optional request initialization overrides.
     *                        This can be an object of type `RequestInit`
     *                        or a function that returns a modified `RequestInit`.
     * @param requestTimeoutInSeconds - The timeout duration in seconds for the request. Defaults to 25 seconds.
     * @returns A promise that resolves to a `RequestInit` object with the adjusted signal.
     * @throws Will throw an error if the request cannot be configured properly.
     *
     * @example
     * ```typescript
     * const resolvedInitOverrides = await adjustRequestSignal({ method: 'GET' }, 30);
     * console.log(resolvedInitOverrides.signal); // Output: AbortSignal with a timeout of 30 seconds
     * ```
     */
    public static async adjustRequestSignalAsync(
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
        requestTimeoutInSeconds?: number
    ): Promise<RequestInit> {
        let resolvedInitOverrides: RequestInit;

        if (typeof initOverrides === 'function') {
            const requestContext = {
                init: {} as runtime.HTTPRequestInit,
                context: {} as runtime.RequestOpts
            };
            resolvedInitOverrides = await initOverrides(requestContext);
        } else {
            resolvedInitOverrides = initOverrides || {};
        }

        // If no AbortSignal is present, prioritizes the request timeout specified above—either:
        // from the API service or the configuration.
        // Falling back to the default request timeout as a secondary option.
        if (!resolvedInitOverrides.signal) {
            resolvedInitOverrides = {
                ...resolvedInitOverrides,
                signal: AbortSignal.timeout((requestTimeoutInSeconds ?? 25) * 1000)
            };
        }

        return resolvedInitOverrides;
    }
}
