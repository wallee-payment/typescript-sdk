'use strict';
import { Tax } from "./Tax";


class PaymentAdjustment {

        /**
        * 
        */
    'amountExcludingTax'?: number;

        /**
        * The total amount of this adjustment including taxes.
        */
    'amountIncludingTax'?: number;

        /**
        * The rate in percentage is the rate on which the adjustment amount was calculated with.
        */
    'rateInPercentage'?: number;

        /**
        * 
        */
    'tax'?: Tax;

        /**
        * 
        */
    'type'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "rateInPercentage",
        "baseName": "rateInPercentage",
        "type": "number"
        },
        
        {
        "name": "tax",
        "baseName": "tax",
        "type": "Tax"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAdjustment.attributeTypeMap;
    }
}

export { PaymentAdjustment }
