'use strict';

enum CardAuthenticationResponse{

    ENROLLMENT_VERIFICATION_ERROR = 'ENROLLMENT_VERIFICATION_ERROR',
    NOT_ENROLLED = 'NOT_ENROLLED',
    AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
    AUTHENTICATION_NOT_REQUIRED = 'AUTHENTICATION_NOT_REQUIRED',
    FULLY_AUTHENTICATED = 'FULLY_AUTHENTICATED',
}

export { CardAuthenticationResponse }
