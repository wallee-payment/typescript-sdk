'use strict';

enum SubscriptionSuspensionReason{

    FAILED_CHARGE = 'FAILED_CHARGE',
    SUBSCRIBER_INITIATED_REFUND = 'SUBSCRIBER_INITIATED_REFUND',
    MANUAL = 'MANUAL',
}

export { SubscriptionSuspensionReason }
