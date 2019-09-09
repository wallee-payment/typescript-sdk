'use strict';

enum FailureCategory{

    TEMPORARY_ISSUE = 'TEMPORARY_ISSUE',
    INTERNAL = 'INTERNAL',
    END_USER = 'END_USER',
    CONFIGURATION = 'CONFIGURATION',
    DEVELOPER = 'DEVELOPER',
}

export { FailureCategory }
