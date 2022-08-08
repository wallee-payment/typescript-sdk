'use strict';

enum InvoiceReconciliationRecordState{

    CREATE = 'CREATE',
    PENDING = 'PENDING',
    UNRESOLVED = 'UNRESOLVED',
    RESOLVED = 'RESOLVED',
    DISCARDED = 'DISCARDED',
}

export { InvoiceReconciliationRecordState }
