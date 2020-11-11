'use strict';

enum TransactionCompletionBehavior{

    COMPLETE_IMMEDIATELY = 'COMPLETE_IMMEDIATELY',
    COMPLETE_DEFERRED = 'COMPLETE_DEFERRED',
    USE_CONFIGURATION = 'USE_CONFIGURATION',
}

export { TransactionCompletionBehavior }
