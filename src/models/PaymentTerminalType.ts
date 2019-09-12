'use strict';
import { PaymentConnector } from "./PaymentConnector";


class PaymentTerminalType {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'supportedConnectors'?: Array<PaymentConnector>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "supportedConnectors",
        "baseName": "supportedConnectors",
        "type": "Array<PaymentConnector>"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalType.attributeTypeMap;
    }
}

export { PaymentTerminalType }
