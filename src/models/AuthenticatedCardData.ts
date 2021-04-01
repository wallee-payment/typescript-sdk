'use strict';
import { CardholderAuthentication } from "./CardholderAuthentication";
import { TokenizedCardData } from "./TokenizedCardData";


class AuthenticatedCardData extends TokenizedCardData {

        /**
        * The cardholder authentication information. The authentication is optional and can be provided if the cardholder has been already authenticated (e.g. in 3-D Secure system).
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
