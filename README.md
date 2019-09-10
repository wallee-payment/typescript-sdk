[![Build Status](https://travis-ci.org/wallee-payment/typescript-sdk.svg?branch=master)](https://travis-ci.org/wallee-payment/typescript-sdk)

# wallee
TypeScript SDK

## Documentation

[Web Service API](https://app-wallee.com/doc/api/web-service)

## Getting Started
Run the command below to install the wallee NPM package.
```sh
npm i wallee
```

Now you can use the typescript integration.

### TypeScript integration

```typescript
'use strict';
import { Wallee } from 'wallee';

let macVersion: number = 1;
let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
mac_version: macVersion,
space_id: spaceId,
user_id: userId,
api_secret: apiSecret
}

// Get Transaction
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

// Get PaymentMethod Service
let paymentMethodService: Wallee.api.PaymentMethodService = new Wallee.api.PaymentMethodService(config);

// default line item for tests
let lineItem: Wallee.model.LineItemCreate = new Wallee.model.LineItemCreate();
lineItem.name='Red T-Shirt';
lineItem.uniqueId='5412';
lineItem.sku='red-t-shirt-123';
lineItem.quantity=1;
lineItem.amountIncludingTax=3.50;
lineItem.type=Wallee.model.LineItemType.PRODUCT;

// default transaction for tests
let transaction: Wallee.model.TransactionCreate = new Wallee.model.TransactionCreate();
transaction.lineItems=[lineItem];
transaction.autoConfirmationEnabled=true;
transaction.currency='EUR';

// Count the number of the transactions by id
transactionService.transactionServiceCreate(spaceId, getTransaction()).then(function (response) {
    let transactionCreate: Wallee.model.Transaction = response.body;
    let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
    entityQueryFilter.fieldName = 'id';
    entityQueryFilter.value = transactionCreate.id;
    entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
    entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
    transactionService.transactionServiceCount(spaceId, entityQueryFilter).then(function (response) {
        let transactionCount: number = response.body;
        // expect transactionCount to equal 1
    });
});


transactionService.transactionServiceCreate(spaceId, getTransaction()).then(function (response) {
    let transactionCreate: Wallee.model.Transaction = response.body;
    // expect transactionCreate.state to equal Wallee.model.TransactionState.PENDING
});

// Fetch an existing transaction by id
transactionService.transactionServiceCreate(spaceId, getTransaction()).then(function (response) {
    let transactionCreate: Wallee.model.Transaction = response.body;
    transactionService.transactionServiceRead(spaceId, <number>transactionCreate.id).then(function (response) {
        let transactionRead = response.body;
        // expect transactionRead.state to equal Wallee.model.TransactionState.PENDING
    });
});


 // search for a transaction by id
transactionService.transactionServiceCreate(spaceId, getTransaction()).then(function (response) {
    let transactionCreate: Wallee.model.Transaction = response.body;
    let entityQueryFilter: Wallee.model.EntityQueryFilter = new Wallee.model.EntityQueryFilter();
    entityQueryFilter.fieldName = 'id';
    entityQueryFilter.value = transactionCreate.id;
    entityQueryFilter.type = Wallee.model.EntityQueryFilterType.LEAF;
    entityQueryFilter.operator = Wallee.model.CriteriaOperator.EQUALS;
    let entityQuery = new Wallee.model.EntityQuery();
    entityQuery.filter = entityQueryFilter;
    transactionService.transactionServiceSearch(spaceId, entityQuery).then(function (response) {
        let transactionSearch = response.body;
        transactionSearch.forEach(function (entry) {
            // expect entry.state to equal Wallee.model.TransactionState.PENDING
        });
    });
});

// Edit transaction language
transactionService.transactionServiceCreate(spaceId, getTransaction()).then(function (response) {
    let transactionCreate: Wallee.model.Transaction = response.body;
    transactionCreate.language = 'en-US';
    transactionService.transactionServiceUpdate(spaceId, <Wallee.model.TransactionPending> transactionCreate).then(function (response) {
        let transactionUpdate: Wallee.model.Transaction = response.body;
        // expect transactionUpdate.language to equal 'en-US'
    });
});

```

