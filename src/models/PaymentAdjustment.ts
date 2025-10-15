'use strict';
import { Tax } from "./Tax";


class PaymentAdjustment {

        /**
        * The adjustment's amount, excluding taxes.
        */
    'amountExcludingTax'?: number;

        /**
        * The adjustment's amount, including taxes.
        */
    'amountIncludingTax'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The percentage rate used to calculate the adjustment amount.
        */
    'rateInPercentage'?: number;

        /**
        * The tax applied to the adjustment.
        */
    'tax'?: Tax;

        /**
        * The type of the adjustment.
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
        "name": "id",
        "baseName": "id",
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
