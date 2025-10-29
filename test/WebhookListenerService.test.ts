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

import { it, describe, before } from "mocha";
import { expect } from "chai";

import {
    DefaultConfiguration,
    HttpBearerAuthConfig,
    SPACE_ID
} from "./constants";
import {
    CreationEntityState,
    PostWebhooksListenersRequest,
    WebhookListenersService,
    WebhookURLsService
} from "../src";
import { Configuration, ConfigurationParameters } from '../src/runtime';

/** API tests for Webhook listeners API Service */
describe('WebhookListenerServiceTest — Webhook listener service test', function () {
    const testName = "Typescript UnitTest Webhook Listener";
    const testEntityId = 1472041829003;

    const webhookURLsService = new WebhookURLsService(DefaultConfiguration);
    const webhookListenerService = new WebhookListenersService(DefaultConfiguration);

    function createWebhookListener(webhookUrlId: number) {
        const postRequest: PostWebhooksListenersRequest = {
            space: SPACE_ID,
            webhookListenerCreate: {
                name: testName,
                state: CreationEntityState.Inactive,
                entity: testEntityId,
                url: webhookUrlId
            },
            expand: new Set(["url"])
        };
        return postRequest;
    }

    it("should POST and DELETE webhook listener", async () => {
        const webhookURLsSearchResponse = await webhookURLsService.getWebhooksUrlsSearch({
            space: SPACE_ID,
            limit: 1,
            offset: 0,
            order: "id:DESC",
            query: 'name:"Webhook Test URL Listener" AND state:INACTIVE',
        });
        expect(webhookURLsSearchResponse.data).to.have.lengthOf(1);

        const webhook_url_id = webhookURLsSearchResponse.data![0].id;
        const createResponse = await webhookListenerService.postWebhooksListeners(createWebhookListener(webhook_url_id!));
        expect(createResponse.state).to.equal(CreationEntityState.Inactive);
        expect(createResponse.linkedSpaceId).to.equal(SPACE_ID);
        expect(createResponse.name).to.equal(testName);
        expect(createResponse.entity).to.equal(testEntityId);
        expect(createResponse.url!.id).to.equal(webhook_url_id);
        expect(createResponse.url!.name).to.equal("Webhook Test URL Listener");

        await webhookListenerService.deleteWebhooksListenersId({
            id: createResponse.id!,
            space: SPACE_ID
        });

        const getResponse = await webhookListenerService.getWebhooksListenersId({
            id: createResponse.id!,
            space: SPACE_ID
        });
        expect(getResponse.id).to.equal(createResponse.id);
        expect(getResponse.state).to.equal(CreationEntityState.Deleted);
        expect(getResponse.linkedSpaceId).to.equal(SPACE_ID);
        expect(getResponse.name).to.equal(testName);
    });

    it("should SEARCH webhook listener with custom timeout: 36 seconds", async () => {
        const customConfigurationParams: ConfigurationParameters = {
            httpBearerAuth: HttpBearerAuthConfig,
            requestTimeout: 36
        };

        // Unlike a global static approach, the `Configuration.new` method creates independent instances,
        // allowing for configuration flexibility and avoiding shared state across the application.
        // Above timeout of 36 seconds would be set only to the `customConfiguration` instance.
        const customConfiguration = new Configuration(customConfigurationParams)

        const customWebhookListenersService = new WebhookListenersService(customConfiguration);
        const searchResponseWithTimeout = await customWebhookListenersService.getWebhooksListenersSearch(
            {
                space: SPACE_ID,
                expand: new Set(["url", "group"]),
                limit: 1,
                offset: 0,
                order: "id:DESC",
                query: "name:Test AND state:INACTIVE"
            }
        );

        expect(searchResponseWithTimeout.data).to.have.lengthOf(1);

        const webhookListener = searchResponseWithTimeout.data![0];
        expect(webhookListener).to.have.property('name', 'Test');
        expect(webhookListener).to.have.property('linkedSpaceId', SPACE_ID);
        expect(webhookListener).to.have.property('state', CreationEntityState.Inactive);
    });

    it("should SEARCH webhook listener without custom timeout", async () => {
        const searchResponse = await webhookListenerService.getWebhooksListenersSearch({
            space: SPACE_ID,
            expand: new Set(["url", "group"]),
            limit: 1,
            offset: 0,
            order: "id:DESC",
            query: "name:Test AND state:INACTIVE"
        });

        expect(searchResponse.data).to.have.lengthOf(1);

        const webhookListener = searchResponse.data![0];
        expect(webhookListener).to.have.property('name', 'Test');
        expect(webhookListener).to.have.property('linkedSpaceId', SPACE_ID);
        expect(webhookListener).to.have.property('state', CreationEntityState.Inactive);
    });
});