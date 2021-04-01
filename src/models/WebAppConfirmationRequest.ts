'use strict';


class WebAppConfirmationRequest {

        /**
        * The user returns to the web app after granting the permission. The HTTP request contains the code. Provide it here to confirm the web app installation.
        */
    'code'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "code",
        "baseName": "code",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return WebAppConfirmationRequest.attributeTypeMap;
    }
}

export { WebAppConfirmationRequest }
