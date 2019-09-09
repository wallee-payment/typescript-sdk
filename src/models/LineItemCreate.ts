'use strict';
import { LineItemAttributeCreate } from "./LineItemAttributeCreate";
import { LineItemType } from "./LineItemType";
import { TaxCreate } from "./TaxCreate";


class LineItemCreate {

        /**
        * 
        */
    'amountIncludingTax': number;

        /**
        * 
        */
    'attributes'?: { [key: string]: LineItemAttributeCreate; };

        /**
        * 
        */
    'discountIncludingTax'?: number;

        /**
        * 
        */
    'name': string;

        /**
        * 
        */
    'quantity': number;

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
    'taxes'?: Array<TaxCreate>;

        /**
        * 
        */
    'type': LineItemType;

        /**
        * The unique id identifies the line item within the set of line items associated with the transaction.
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
