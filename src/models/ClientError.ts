'use strict';
import { ClientErrorType } from "./ClientErrorType";


class ClientError {

        /**
        * Date when an error has occurred.
        */
    'date'?: string;

        /**
        * The error message which is translated into the default language (i.e. English).
        */
    'defaultMessage'?: string;

        /**
        * Unique identifier of an error.
        */
    'id'?: string;

        /**
        * The error message which is translated in into the language of the client.
        */
    'message'?: string;

        /**
        * The type of the client error.
        */
    'type'?: ClientErrorType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "date",
        "baseName": "date",
        "type": "string"
        },
        
        {
        "name": "defaultMessage",
        "baseName": "defaultMessage",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "string"
        },
        
        {
        "name": "message",
        "baseName": "message",
        "type": "string"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "ClientErrorType"
        }        
    ];

    static getAttributeTypeMap() {
        return ClientError.attributeTypeMap;
    }
}

export { ClientError }
