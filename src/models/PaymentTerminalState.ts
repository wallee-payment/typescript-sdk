'use strict';

enum PaymentTerminalState{

    CREATE = 'CREATE',
    PREPARING = 'PREPARING',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DECOMMISSIONING = 'DECOMMISSIONING',
    DECOMMISSIONED = 'DECOMMISSIONED',
}

export { PaymentTerminalState }
