'use strict';

enum PaymentTerminalDeviceState{

    CREATE = 'CREATE',
    PREPARING = 'PREPARING',
    REGISTERED = 'REGISTERED',
    DECOMMISSIONING = 'DECOMMISSIONING',
    DECOMMISSIONED = 'DECOMMISSIONED',
}

export { PaymentTerminalDeviceState }
