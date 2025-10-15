'use strict';


class PaymentTerminalTransactionSummaryReference {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The unique identifier of the terminal.
        */
    'terminalId'?: number;

        /**
        * The unique identifier of the terminal, that is displayed on the device.
        */
    'terminalIdentifier'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "terminalId",
        "baseName": "terminalId",
        "type": "number"
        },
        
        {
        "name": "terminalIdentifier",
        "baseName": "terminalIdentifier",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSummaryReference.attributeTypeMap;
    }
}

export { PaymentTerminalTransactionSummaryReference }
