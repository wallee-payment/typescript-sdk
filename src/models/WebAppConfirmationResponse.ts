'use strict';
import { Space } from "./Space";


class WebAppConfirmationResponse {

        /**
        * The access code granting permissions to the web service API according to the OAuth standard.
        */
    'accessToken'?: string;

        /**
        * The list of the permissions granted to the web app within the space.
        */
    'scope'?: string;

        /**
        * The space that the web app was installed in.
        */
    'space'?: Space;

        /**
        * The state parameter that was provided in the authorization request.
        */
    'state'?: string;

        /**
        * The type of the access token that determines the authentication mechanism to use for accessing the web service API.
        */
    'tokenType'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
        },
        
        {
        "name": "scope",
        "baseName": "scope",
        "type": "string"
        },
        
        {
        "name": "space",
        "baseName": "space",
        "type": "Space"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "string"
        },
        
        {
        "name": "tokenType",
        "baseName": "token_type",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return WebAppConfirmationResponse.attributeTypeMap;
    }
}

export { WebAppConfirmationResponse }
