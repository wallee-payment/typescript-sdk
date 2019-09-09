'use strict';
import { AbstractRefundCommentActive } from "./AbstractRefundCommentActive";


class RefundCommentCreate extends AbstractRefundCommentActive {

        /**
        * 
        */
    'refund': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "refund",
        "baseName": "refund",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RefundCommentCreate.attributeTypeMap);
    }
}

export { RefundCommentCreate }
