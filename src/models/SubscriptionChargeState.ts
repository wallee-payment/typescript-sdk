'use strict';

enum SubscriptionChargeState{

    SCHEDULED = 'SCHEDULED',
    DISCARDED = 'DISCARDED',
    PROCESSING = 'PROCESSING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
}

export { SubscriptionChargeState }
