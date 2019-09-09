'use strict';

enum InstallmentPaymentSliceState{

    CREATE = 'CREATE',
    SCHEDULED = 'SCHEDULED',
    CANCELED = 'CANCELED',
    PREPARE_PROCESSING = 'PREPARE_PROCESSING',
    PROCESSING = 'PROCESSING',
    FAILED = 'FAILED',
    SUCCESSFUL = 'SUCCESSFUL',
}

export { InstallmentPaymentSliceState }
