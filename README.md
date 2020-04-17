[![Build Status](https://travis-ci.org/wallee-payment/typescript-sdk.svg?branch=master)](https://travis-ci.org/wallee-payment/typescript-sdk)

# wallee TypeScript Library

The wallee TypeScript library wraps around the wallee API. This library facilitates your interaction with various services such as transactions, accounts, and subscriptions.


## Documentation

[wallee Web Service API](https://app-wallee.com/doc/api/web-service)

## Requirements

- npm 6+

## Installation

## NPM install (recommended)
```sh
npm install wallee
```

## Usage
The library needs to be configured with your account's space id, user id, and secret key which are available in your [wallee
account dashboard](https://app-wallee.com/account/select). Set `space_id`, `user_id`, and `api_secret` to their values.

### Configuring a Service

```typescript
'use strict';
import { Wallee } from 'wallee';

let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Transaction Service
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

```

To get started with sending transactions, please review the example below:

```typescript
'use strict';
import { Wallee } from 'wallee';

let spaceId: number = 405;
let userId: number = 512;
let apiSecret: string = 'FKrO76r5VwJtBrqZawBspljbBNOxp5veKQQkOnZxucQ=';

let config = {
    space_id: spaceId,
    user_id: userId,
    api_secret: apiSecret
}

// Transaction Service
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);

// TransactionPaymentPage Service
let transactionPaymentPageService: Wallee.api.TransactionPaymentPageService = new Wallee.api.TransactionPaymentPageService(config);

// LineItem of type PRODUCT
let lineItem: Wallee.model.LineItemCreate = new Wallee.model.LineItemCreate();
lineItem.name='Red T-Shirt';
lineItem.uniqueId='5412';
lineItem.sku='red-t-shirt-123';
lineItem.quantity=1;
lineItem.amountIncludingTax=3.50;
lineItem.type=Wallee.model.LineItemType.PRODUCT;

// Transaction
let transaction: Wallee.model.TransactionCreate = new Wallee.model.TransactionCreate();
transaction.lineItems=[lineItem];
transaction.autoConfirmationEnabled=true;
transaction.currency='EUR';

transactionService.create(spaceId, transaction).then((response) => {
    let transactionCreate: Wallee.model.Transaction = response.body;
    transactionPaymentPageService.paymentPageUrl(spaceId, <number> transactionCreate.id).then(function (response) {
        let pageUrl: string = response.body;
        // window.location.href = pageUrl;
    });
});

```

## License

Please see the [license file](https://github.com/wallee-payment/typescript-sdk/blob/master/LICENSE) for more information.