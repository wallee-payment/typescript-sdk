'use strict';

enum TransactionInvoiceState{

    CREATE = 'CREATE',
    OPEN = 'OPEN',
    OVERDUE = 'OVERDUE',
    CANCELED = 'CANCELED',
    PAID = 'PAID',
    DERECOGNIZED = 'DERECOGNIZED',
    NOT_APPLICABLE = 'NOT_APPLICABLE',
}

export { TransactionInvoiceState }
