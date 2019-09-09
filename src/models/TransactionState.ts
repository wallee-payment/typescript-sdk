'use strict';

enum TransactionState{

    CREATE = 'CREATE',
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    PROCESSING = 'PROCESSING',
    FAILED = 'FAILED',
    AUTHORIZED = 'AUTHORIZED',
    VOIDED = 'VOIDED',
    COMPLETED = 'COMPLETED',
    FULFILL = 'FULFILL',
    DECLINE = 'DECLINE',
}

export { TransactionState }
