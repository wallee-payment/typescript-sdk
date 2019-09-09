'use strict';

enum DebtCollectionCaseState{

    CREATE = 'CREATE',
    PREPARING = 'PREPARING',
    REVIEWING = 'REVIEWING',
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    CLOSED = 'CLOSED',
    FAILED = 'FAILED',
}

export { DebtCollectionCaseState }
