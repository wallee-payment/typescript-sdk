'use strict';

enum ShopifySubscriptionState{

    INITIATING = 'INITIATING',
    FAILED = 'FAILED',
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED',
}

export { ShopifySubscriptionState }
