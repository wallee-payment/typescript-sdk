'use strict';

enum DunningCaseState{

    RUNNING = 'RUNNING',
    SUSPENDED = 'SUSPENDED',
    CANCELED = 'CANCELED',
    DERECOGNIZED = 'DERECOGNIZED',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED',
}

export { DunningCaseState }
