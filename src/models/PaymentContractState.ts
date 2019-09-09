'use strict';

enum PaymentContractState{

    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED',
    REJECTED = 'REJECTED',
}

export { PaymentContractState }
