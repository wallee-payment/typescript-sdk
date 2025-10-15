'use strict';


class LineItemReduction {

        /**
        * The unique identifier of the line item to which the reduction is applied. This ID ensures the reduction is accurately associated with the correct item.
        */
    'lineItemUniqueId'?: string;

        /**
        * The quantity removed or reduced from the line item. This value reflects the decrease in the item count due to the reduction.
        */
    'quantityReduction'?: number;

        /**
        * The monetary amount by which the line item's unit price is discounted. This reduction adjusts the price without altering the quantity.
        */
    'unitPriceReduction'?: number;


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
        return LineItemReduction.attributeTypeMap;
    }
}

export { LineItemReduction }
