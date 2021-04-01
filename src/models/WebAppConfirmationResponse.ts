'use strict';
import { Space } from "./Space";


class WebAppConfirmationResponse {

        /**
        * The access code grants permissions to the web service API according to the OAuth standard.
        */
    'accessToken'?: string;

        /**
        * The scope contains the permissions granted to the web app within the space.
        */
    'scope'?: string;

        /**
        * This is the space into which the web app is installed into.
        */
    'space'?: Space;

        /**
        * The state contains the state parameter content provided when initiating the app installation.
        */
    'state'?: string;

        /**
        * The token type indicates the type of the access token. The type determines the authentication mechanism to use for accessing the web service API.
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
