'use strict';
import { LineItemAttribute } from "./LineItemAttribute";
import { LineItemType } from "./LineItemType";
import { Tax } from "./Tax";


class LineItem {

        /**
        * The total tax rate applied to the item, calculated from the rates of all tax lines.
        */
    'aggregatedTaxRate'?: number;

        /**
        * The line item price with discounts applied, excluding taxes.
        */
    'amountExcludingTax'?: number;

        /**
        * The line item price with discounts applied, including taxes.
        */
    'amountIncludingTax'?: number;

        /**
        * A map of custom information for the item.
        */
    'attributes'?: { [key: string]: LineItemAttribute; };

        /**
        * The discount allocated to the item, excluding taxes.
        */
    'discountExcludingTax'?: number;

        /**
        * The discount allocated to the item, including taxes.
        */
    'discountIncludingTax'?: number;

        /**
        * The name of the product, ideally in the customer's language.
        */
    'name'?: string;

        /**
        * The number of items that were purchased.
        */
    'quantity'?: number;

        /**
        * Whether the item required shipping.
        */
    'shippingRequired'?: boolean;

        /**
        * The SKU (stock-keeping unit) of the product.
        */
    'sku'?: string;

        /**
        * The sum of all taxes applied to the item.
        */
    'taxAmount'?: number;

        /**
        * The calculated tax amount per unit.
        */
    'taxAmountPerUnit'?: number;

        /**
        * A set of tax lines, each of which specifies a tax applied to the item.
        */
    'taxes'?: Array<Tax>;

        /**
        * The type of the line item.
        */
    'type'?: LineItemType;

        /**
        * The line item price with discounts not applied, excluding taxes.
        */
    'undiscountedAmountExcludingTax'?: number;

        /**
        * The line item price with discounts not applied, including taxes.
        */
    'undiscountedAmountIncludingTax'?: number;

        /**
        * The calculated price per unit with discounts not applied, excluding taxes.
        */
    'undiscountedUnitPriceExcludingTax'?: number;

        /**
        * The calculated price per unit with discounts not applied, including taxes.
        */
    'undiscountedUnitPriceIncludingTax'?: number;

        /**
        * The unique identifier of the line item within the set of line items.
        */
    'uniqueId'?: string;

        /**
        * The calculated price per unit with discounts applied, excluding taxes.
        */
    'unitPriceExcludingTax'?: number;

        /**
        * The calculated price per unit with discounts applied, including taxes.
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
