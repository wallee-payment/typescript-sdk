'use strict';
import { LineItem } from "./LineItem";


class InstallmentCalculatedSlice {

        /**
        * 
        */
    'amountIncludingTax'?: number;

        /**
        * 
        */
    'dueOn'?: Date;

        /**
        * 
        */
    'lineItems'?: Array<LineItem>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "dueOn",
        "baseName": "dueOn",
        "type": "Date"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        }        
    ];

    static getAttributeTypeMap() {
        return InstallmentCalculatedSlice.attributeTypeMap;
    }
}

export { InstallmentCalculatedSlice }
