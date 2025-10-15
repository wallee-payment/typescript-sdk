'use strict';


class CompletionLineItemCreate {

        /**
        * The total amount of the line item to be captured, including taxes.
        */
    'amount': number;

        /**
        * The number of items to be captured.
        */
    'quantity': number;

        /**
        * The unique identifier of the line item within the set of line items.
        */
    'uniqueId': string;


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
        return CompletionLineItemCreate.attributeTypeMap;
    }
}

export { CompletionLineItemCreate }
