'use strict';


class CompletionLineItem {

        /**
        * The total amount of the line item including any tax.
        */
    'amount'?: number;

        /**
        * The quantity of the line item which should be completed.
        */
    'quantity'?: number;

        /**
        * The unique id identifies the line item on which the capture is applied on.
        */
    'uniqueId'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return CompletionLineItem.attributeTypeMap;
    }
}

export { CompletionLineItem }
