'use strict';

enum TransactionLineItemVersionState{

    CREATE = 'CREATE',
    SCHEDULED = 'SCHEDULED',
    PENDING = 'PENDING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
}

export { TransactionLineItemVersionState }
