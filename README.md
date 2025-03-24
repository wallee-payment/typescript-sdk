# wallee TypeScript Library

The wallee TypeScript library wraps around the wallee API. This library facilitates your interaction with various
services such as transactions, accounts, and subscriptions.

## Documentation

[wallee Web Service API](https://app-wallee.com/doc/api/web-service)

## Requirements

- npm 9+

## Installation

> **_NOTE:_** Highly recommended to use TypeScript SDK in server-side applications.<br>
> Use front-end frameworks such as Angular at your own risk, as the application might be incompatible or cause a potential
> threat that the application user information (such as secret keys) might be revealed publicly in the browser.

## NPM install (recommended)

```sh
npm install wallee
```

## Usage

The library needs to be configured with your account's space id, user id, and secret key which are available in
your [wallee
account dashboard](https://app-wallee.com/account/select). Set `space_id`, `user_id`, and `api_secret` to their values.
You can also add custom default headers to the configuration.

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
    api_secret: apiSecret,
    default_headers: {
        'x-meta-header-name-1': 'header-value-1',
        'x-meta-header-name-2': 'header-value-2'
    }
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
lineItem.name = 'Red T-Shirt';
lineItem.uniqueId = '5412';
lineItem.sku = 'red-t-shirt-123';
lineItem.quantity = 1;
lineItem.amountIncludingTax = 3.50;
lineItem.type = Wallee.model.LineItemType.PRODUCT;

// Transaction
let transaction: Wallee.model.TransactionCreate = new Wallee.model.TransactionCreate();
transaction.lineItems = [lineItem];
transaction.autoConfirmationEnabled = true;
transaction.currency = 'EUR';

transactionService.create(spaceId, transaction).then((response) => {
    let transactionCreate: Wallee.model.Transaction = response.body;
    transactionPaymentPageService.paymentPageUrl(spaceId, <number>transactionCreate.id).then(function (response) {
        let pageUrl: string = response.body;
        // window.location.href = pageUrl;
    });
});

```

### Configure connection timeout

Connection timeout determines how long the request can take, before cutting off the connection. Same value applies both
to inner 'Read timeout' and 'Connection timeout' of a [NPM request module](https://www.npmjs.com/package/request).

Default connection timeout is 25 seconds.

Connection timeout can be set 2 ways:

1. Via configuration property `timeout` providing value in seconds.

```typescript
let config = {
    // ... other properties ...
    timeout: 15
}
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);
```

2. Via service property `timeout` providing value in seconds

```typescript
let config = {
    // ... properties ...
}
let transactionService: Wallee.api.TransactionService = new Wallee.api.TransactionService(config);
transactionService.timeout = 15;
```

### Integrating Webhook Payload Signing Mechanism into webhook callback handler

The HTTP request which is sent for a state change of an entity now includes an additional field `state`, which provides
information about the update of the monitored entity's state. This enhancement is a result of the implementation of our
webhook encryption mechanism.

Payload field `state` provides direct information about the state update of the entity, making additional API calls to
retrieve the entity state redundant.

#### ⚠️ Warning: Generic Pseudocode

> **The provided pseudocode is intentionally generic and serves to illustrate the process of enhancing your API to
leverage webhook payload signing. It is not a complete implementation.**
>
> Please ensure that you adapt and extend this code to meet the specific needs of your application, including
> appropriate security measures and error handling.
> For a detailed webhook payload signing mechanism understanding we highly recommend referring to our comprehensive
[Webhook Payload Signing Documentation](https://app-wallee.com/doc/webhooks#_webhook_payload_signing_mechanism).

```typescript
app.post('/webhook/callback', (req: Request, res: Response) => {
    const requestPayload: string = req.body;
    const signature: string | undefined = req.headers['x-signature'] as string;

    if (!signature) {
        // Make additional API call to retrieve the entity state
        // ...
    } else {
        if (webhookEncryptionService().isContentValid(signature, requestPayload)) {
            // Parse requestPayload to extract 'state' value
            // Process entity's state change
            // ...
        }
    }

    // Process the received webhook data
    // ...

});
```

## License

Please see the [license file](https://github.com/wallee-payment/typescript-sdk/blob/master/LICENSE) for more
information.