'use strict';

enum InvoiceReimbursementState{

    PENDING = 'PENDING',
    MANUAL_REVIEW = 'MANUAL_REVIEW',
    PROCESSING = 'PROCESSING',
    PROCESSED = 'PROCESSED',
    DISCARDED = 'DISCARDED',
}

export { InvoiceReimbursementState }
