'use strict';
import { LineItemAttribute } from "./LineItemAttribute";
import { LineItemType } from "./LineItemType";
import { Tax } from "./Tax";


class LineItem {

        /**
        * The aggregated tax rate is the sum of all tax rates of the line item.
        */
    'aggregatedTaxRate'?: number;

        /**
        * 
        */
    'amountExcludingTax'?: number;

        /**
        * 
        */
    'amountIncludingTax'?: number;

        /**
        * 
        */
    'attributes'?: { [key: string]: LineItemAttribute; };

        /**
        * 
        */
    'discountExcludingTax'?: number;

        /**
        * 
        */
    'discountIncludingTax'?: number;

        /**
        * 
        */
    'name'?: string;

        /**
        * 
        */
    'quantity'?: number;

        /**
        * 
        */
    'shippingRequired'?: boolean;

        /**
        * 
        */
    'sku'?: string;

        /**
        * 
        */
    'taxAmount'?: number;

        /**
        * 
        */
    'taxAmountPerUnit'?: number;

        /**
        * 
        */
    'taxes'?: Array<Tax>;

        /**
        * 
        */
    'type'?: LineItemType;

        /**
        * 
        */
    'undiscountedAmountExcludingTax'?: number;

        /**
        * 
        */
    'undiscountedAmountIncludingTax'?: number;

        /**
        * 
        */
    'undiscountedUnitPriceExcludingTax'?: number;

        /**
        * 
        */
    'undiscountedUnitPriceIncludingTax'?: number;

        /**
        * The unique id identifies the line item within the set of line items associated with the transaction.
        */
    'uniqueId'?: string;

        /**
        * 
        */
    'unitPriceExcludingTax'?: number;

        /**
        * 
        */
    'unitPriceIncludingTax'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "aggregatedTaxRate",
        "baseName": "aggregatedTaxRate",
        "type": "number"
        },
        
        {
        "name": "amountExcludingTax",
        "baseName": "amountExcludingTax",
        "type": "number"
        },
        
        {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "attributes",
        "baseName": "attributes",
        "type": "{ [key: string]: LineItemAttribute; }"
        },
        
        {
        "name": "discountExcludingTax",
        "baseName": "discountExcludingTax",
        "type": "number"
        },
        
        {
        "name": "discountIncludingTax",
        "baseName": "discountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "shippingRequired",
        "baseName": "shippingRequired",
        "type": "boolean"
        },
        
        {
        "name": "sku",
        "baseName": "sku",
        "type": "string"
        },
        
        {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
        },
        
        {
        "name": "taxAmountPerUnit",
        "baseName": "taxAmountPerUnit",
        "type": "number"
        },
        
        {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<Tax>"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "LineItemType"
        },
        
        {
        "name": "undiscountedAmountExcludingTax",
        "baseName": "undiscountedAmountExcludingTax",
        "type": "number"
        },
        
        {
        "name": "undiscountedAmountIncludingTax",
        "baseName": "undiscountedAmountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "undiscountedUnitPriceExcludingTax",
        "baseName": "undiscountedUnitPriceExcludingTax",
        "type": "number"
        },
        
        {
        "name": "undiscountedUnitPriceIncludingTax",
        "baseName": "undiscountedUnitPriceIncludingTax",
        "type": "number"
        },
        
        {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
        },
        
        {
        "name": "unitPriceExcludingTax",
        "baseName": "unitPriceExcludingTax",
        "type": "number"
        },
        
        {
        "name": "unitPriceIncludingTax",
        "baseName": "unitPriceIncludingTax",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return LineItem.attributeTypeMap;
    }
}

export { LineItem }
