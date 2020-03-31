'use strict';

enum ShopifyRecurringOrderState{

    PENDING = 'PENDING',
    ONHOLD = 'ONHOLD',
    PROCESSING = 'PROCESSING',
    CANCELED = 'CANCELED',
    BILLED = 'BILLED',
    FAILED = 'FAILED',
}

export { ShopifyRecurringOrderState }
