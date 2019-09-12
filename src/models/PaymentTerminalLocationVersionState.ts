'use strict';

enum PaymentTerminalLocationVersionState{

    PENDING = 'PENDING',
    SCHEDULING = 'SCHEDULING',
    ACTIVE = 'ACTIVE',
    DELETING = 'DELETING',
    DELETED = 'DELETED',
}

export { PaymentTerminalLocationVersionState }
