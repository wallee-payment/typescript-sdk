'use strict';


class LineItemReductionCreate {

        /**
        * The unique id identifies the line item on which the reduction is applied on.
        */
    'lineItemUniqueId': string;

        /**
        * 
        */
    'quantityReduction': number;

        /**
        * 
        */
    'unitPriceReduction': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "lineItemUniqueId",
        "baseName": "lineItemUniqueId",
        "type": "string"
        },
        
        {
        "name": "quantityReduction",
        "baseName": "quantityReduction",
        "type": "number"
        },
        
        {
        "name": "unitPriceReduction",
        "baseName": "unitPriceReduction",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return LineItemReductionCreate.attributeTypeMap;
    }
}

export { LineItemReductionCreate }
