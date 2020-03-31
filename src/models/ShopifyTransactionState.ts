'use strict';

enum ShopifyTransactionState{

    PENDING = 'PENDING',
    AUTHORIZED = 'AUTHORIZED',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    CONFLICTING = 'CONFLICTING',
}

export { ShopifyTransactionState }
