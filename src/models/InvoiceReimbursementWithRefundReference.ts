'use strict';
import { InvoiceReimbursement } from "./InvoiceReimbursement";


class InvoiceReimbursementWithRefundReference extends InvoiceReimbursement {

        /**
        * 
        */
    'refundMerchantReference'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "refundMerchantReference",
        "baseName": "refundMerchantReference",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InvoiceReimbursementWithRefundReference.attributeTypeMap);
    }
}

export { InvoiceReimbursementWithRefundReference }
