'use strict';

enum InstallmentPaymentState{

    CREATE = 'CREATE',
    CONFIRMED = 'CONFIRMED',
    AUTHORIZED = 'AUTHORIZED',
    REJECTED = 'REJECTED',
    COMPLETED = 'COMPLETED',
    RUNNING = 'RUNNING',
    DONE = 'DONE',
    DEFAULTED = 'DEFAULTED',
}

export { InstallmentPaymentState }
