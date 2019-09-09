'use strict';

enum RefundState{

    CREATE = 'CREATE',
    SCHEDULED = 'SCHEDULED',
    PENDING = 'PENDING',
    MANUAL_CHECK = 'MANUAL_CHECK',
    FAILED = 'FAILED',
    SUCCESSFUL = 'SUCCESSFUL',
}

export { RefundState }
