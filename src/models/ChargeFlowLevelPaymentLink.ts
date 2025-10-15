'use strict';
import { ChargeFlowLevel } from "./ChargeFlowLevel";


class ChargeFlowLevelPaymentLink {

        /**
        * The charge flow level that the payment link belongs to.
        */
    'chargeFlowLevel'?: ChargeFlowLevel;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The URL provided to the customer for entering their payment details and completing the transaction.
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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "paymentLink",
        "baseName": "paymentLink",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return ChargeFlowLevelPaymentLink.attributeTypeMap;
    }
}

export { ChargeFlowLevelPaymentLink }
