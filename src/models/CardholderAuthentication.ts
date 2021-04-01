'use strict';
import { CardAuthenticationResponse } from "./CardAuthenticationResponse";
import { CardAuthenticationVersion } from "./CardAuthenticationVersion";


class CardholderAuthentication {

        /**
        * The authentication identifier as assigned by authentication system (e.g. XID or DSTransactionID).
        */
    'authenticationIdentifier'?: string;

        /**
        * 
        */
    'authenticationResponse'?: CardAuthenticationResponse;

        /**
        * The cardholder authentication value. Also known as Cardholder Authentication Verification Value (CAVV).
        */
    'authenticationValue'?: string;

        /**
        * The Electronic Commerce Indicator (ECI) value. The ECI is returned by authentication system and indicates the outcome/status of authentication.
        */
    'electronicCommerceIndicator'?: string;

        /**
        * 
        */
    'version'?: CardAuthenticationVersion;


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
        return CardholderAuthentication.attributeTypeMap;
    }
}

export { CardholderAuthentication }
