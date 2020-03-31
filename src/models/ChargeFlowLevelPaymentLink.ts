'use strict';
import { ChargeFlowLevel } from "./ChargeFlowLevel";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ChargeFlowLevelPaymentLink extends TransactionAwareEntity {

        /**
        * 
        */
    'chargeFlowLevel'?: ChargeFlowLevel;

        /**
        * 
        */
    'paymentLink'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "chargeFlowLevel",
        "baseName": "chargeFlowLevel",
        "type": "ChargeFlowLevel"
        },
        
        {
        "name": "paymentLink",
        "baseName": "paymentLink",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeFlowLevelPaymentLink.attributeTypeMap);
    }
}

export { ChargeFlowLevelPaymentLink }
