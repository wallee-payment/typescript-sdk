'use strict';


class ServerError {

        /**
        * Date when an error has occurred.
        */
    'date'?: string;

        /**
        * Unique identifier of an error.
        */
    'id'?: string;

        /**
        * This message describes an error.
        */
    'message'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "date",
        "baseName": "date",
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
        }        
    ];

    static getAttributeTypeMap() {
        return ServerError.attributeTypeMap;
    }
}

export { ServerError }
