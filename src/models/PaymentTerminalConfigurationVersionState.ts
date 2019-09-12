'use strict';

enum PaymentTerminalConfigurationVersionState{

    PENDING = 'PENDING',
    SCHEDULING = 'SCHEDULING',
    ACTIVE = 'ACTIVE',
    DELETING = 'DELETING',
    DELETED = 'DELETED',
}

export { PaymentTerminalConfigurationVersionState }
