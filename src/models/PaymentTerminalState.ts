'use strict';

enum PaymentTerminalState{

    PREPARING = 'PREPARING',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DECOMMISSIONING = 'DECOMMISSIONING',
    DECOMMISSIONED = 'DECOMMISSIONED',
}

export { PaymentTerminalState }
