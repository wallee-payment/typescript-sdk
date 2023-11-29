'use strict';


class WebhookEncryptionPublicKey {

        /**
        * The ID of encryption key
        */
    'id'?: string;

        /**
        * The BASE64 encoded public key
        */
    'publicKey'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "string"
        },
        
        {
        "name": "publicKey",
        "baseName": "publicKey",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return WebhookEncryptionPublicKey.attributeTypeMap;
    }
}

export { WebhookEncryptionPublicKey }
