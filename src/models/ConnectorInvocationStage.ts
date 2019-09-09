'use strict';

enum ConnectorInvocationStage{

    PAYMENT_METHOD_LIST = 'PAYMENT_METHOD_LIST',
    FORM_GENERATION = 'FORM_GENERATION',
    VALIDATION = 'VALIDATION',
    AUTHORIZATION = 'AUTHORIZATION',
}

export { ConnectorInvocationStage }
