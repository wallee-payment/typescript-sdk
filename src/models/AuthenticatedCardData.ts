'use strict';
import { CardholderAuthentication } from "./CardholderAuthentication";
import { TokenizedCardData } from "./TokenizedCardData";


class AuthenticatedCardData extends TokenizedCardData {

        /**
        * Optional authentication details for the cardholder, such as 3D Secure authentication, used when the cardholder has already been verified during the transaction for added security.
        */
    'cardholderAuthentication'?: CardholderAuthentication;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "cardholderAuthentication",
        "baseName": "cardholderAuthentication",
        "type": "CardholderAuthentication"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AuthenticatedCardData.attributeTypeMap);
    }
}

export { AuthenticatedCardData }
