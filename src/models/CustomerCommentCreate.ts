'use strict';
import { AbstractCustomerCommentActive } from "./AbstractCustomerCommentActive";


class CustomerCommentCreate extends AbstractCustomerCommentActive {

        /**
        * 
        */
    'customer': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "customer",
        "baseName": "customer",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerCommentCreate.attributeTypeMap);
    }
}

export { CustomerCommentCreate }
