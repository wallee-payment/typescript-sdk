"use strict";

import { expect } from "chai";
import http from "http";
import { Wallee as Whitelabel } from "../index";
import {
    ApiConfig,
    getTransactionCreate
} from "./constants";
import model = Whitelabel.model;

const {
    TransactionLightboxService,
    TransactionService
} = Whitelabel.api;

const transactionLightboxService = new TransactionLightboxService(ApiConfig);
const transactionService = new TransactionService(ApiConfig);

type Transaction = model.Transaction;

describe("TransactionLightboxService", () => {
    describe("javascriptUrl()", () => {
        it("should create URL for use in Lightbox checkout flow javascript", (done) => {
            transactionService.create(ApiConfig.space_id, getTransactionCreate())
                .then((response: { response: http.IncomingMessage, body: Transaction }) => {
                    const transactionId = response.body.id as number;
                    return transactionLightboxService.javascriptUrl(ApiConfig.space_id, transactionId);
                })
                .done((response: { response: http.IncomingMessage, body: string }) => {
                    const javascriptUrl = response.body;
                    expect(javascriptUrl).to.include("https://");
                    expect(javascriptUrl).to.include("securityToken");
                    done();
                });
        });
    });
});
