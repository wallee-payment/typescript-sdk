'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractWebhookUrlUpdate {

        /**
        * The URL name is used internally to identify the URL in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The URL to which the HTTP requests are sent to. An example URL could look like https://www.example.com/some/path?some-query-parameter=value.
        */
    'url'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractWebhookUrlUpdate.attributeTypeMap;
    }
}

export { AbstractWebhookUrlUpdate }
