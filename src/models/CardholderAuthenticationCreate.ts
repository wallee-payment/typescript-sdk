'use strict';
import { CardAuthenticationResponse } from "./CardAuthenticationResponse";
import { CardAuthenticationVersion } from "./CardAuthenticationVersion";


class CardholderAuthenticationCreate {

        /**
        * The identifier (e.g., XID or DSTransactionID) assigned by the authentication system for tracking and verification.
        */
    'authenticationIdentifier'?: string;

        /**
        * The result of the authentication process.
        */
    'authenticationResponse': CardAuthenticationResponse;

        /**
        * The cryptographic token (CAVV/AAV) generated during the authentication process to validate the cardholder's identity.
        */
    'authenticationValue'?: string;

        /**
        * The Electronic Commerce Indicator (ECI) represents the authentication level and indicates liability shift during online or card-not-present transactions.
        */
    'electronicCommerceIndicator'?: string;

        /**
        * The version of the authentication protocol (e.g., 3D Secure 1.0 or 2.0) used for the transaction.
        */
    'version': CardAuthenticationVersion;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "authenticationIdentifier",
        "baseName": "authenticationIdentifier",
        "type": "string"
        },
        
        {
        "name": "authenticationResponse",
        "baseName": "authenticationResponse",
        "type": "CardAuthenticationResponse"
        },
        
        {
        "name": "authenticationValue",
        "baseName": "authenticationValue",
        "type": "string"
        },
        
        {
        "name": "electronicCommerceIndicator",
        "baseName": "electronicCommerceIndicator",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "CardAuthenticationVersion"
        }        
    ];

    static getAttributeTypeMap() {
        return CardholderAuthenticationCreate.attributeTypeMap;
    }
}

export { CardholderAuthenticationCreate }
