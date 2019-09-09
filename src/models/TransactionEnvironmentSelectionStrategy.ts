'use strict';

enum TransactionEnvironmentSelectionStrategy{

    FORCE_TEST_ENVIRONMENT = 'FORCE_TEST_ENVIRONMENT',
    FORCE_PRODUCTION_ENVIRONMENT = 'FORCE_PRODUCTION_ENVIRONMENT',
    USE_CONFIGURATION = 'USE_CONFIGURATION',
}

export { TransactionEnvironmentSelectionStrategy }
