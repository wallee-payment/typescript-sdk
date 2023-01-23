'use strict';

enum PaymentInitiationAdviceFileState{

    CREATING = 'CREATING',
    FAILED = 'FAILED',
    CREATED = 'CREATED',
    OVERDUE = 'OVERDUE',
    UPLOADED = 'UPLOADED',
    DOWNLOADED = 'DOWNLOADED',
    PROCESSED = 'PROCESSED',
}

export { PaymentInitiationAdviceFileState }
