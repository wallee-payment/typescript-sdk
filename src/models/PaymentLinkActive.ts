'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { PaymentLinkUpdate } from "./PaymentLinkUpdate";


class PaymentLinkActive extends PaymentLinkUpdate {

        /**
        * 
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentLinkActive.attributeTypeMap);
    }
}

export { PaymentLinkActive }
