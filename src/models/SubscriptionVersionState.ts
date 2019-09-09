'use strict';

enum SubscriptionVersionState{

    PENDING = 'PENDING',
    INITIALIZING = 'INITIALIZING',
    FAILED = 'FAILED',
    ACTIVE = 'ACTIVE',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED',
}

export { SubscriptionVersionState }
