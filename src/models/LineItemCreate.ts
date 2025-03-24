'use strict';
import { LineItemAttributeCreate } from "./LineItemAttributeCreate";
import { LineItemType } from "./LineItemType";
import { TaxCreate } from "./TaxCreate";


class LineItemCreate {

        /**
        * The line item price with discounts applied, including taxes.
        */
    'amountIncludingTax': number;

        /**
        * A map of custom information for the item.
        */
    'attributes'?: { [key: string]: LineItemAttributeCreate; };

        /**
        * The discount allocated to the item, including taxes.
        */
    'discountIncludingTax'?: number;

        /**
        * The name of the product, ideally in the customer's language.
        */
    'name': string;

        /**
        * The number of items that were purchased.
        */
    'quantity': number;

        /**
        * Whether the item required shipping.
        */
    'shippingRequired'?: boolean;

        /**
        * The SKU (stock-keeping unit) of the product.
        */
    'sku'?: string;

        /**
        * A set of tax lines, each of which specifies a tax applied to the item.
        */
    'taxes'?: Array<TaxCreate>;

        /**
        * The type of the line item.
        */
    'type': LineItemType;

        /**
        * The unique identifier of the line item within the set of line items.
        */
    'uniqueId': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "attributes",
        "baseName": "attributes",
        "type": "{ [key: string]: LineItemAttributeCreate; }"
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
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<TaxCreate>"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "LineItemType"
        },
        
        {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return LineItemCreate.attributeTypeMap;
    }
}

export { LineItemCreate }
