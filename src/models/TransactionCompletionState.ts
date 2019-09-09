'use strict';

enum TransactionCompletionState{

    CREATE = 'CREATE',
    SCHEDULED = 'SCHEDULED',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
    SUCCESSFUL = 'SUCCESSFUL',
}

export { TransactionCompletionState }
