'use strict';
import { LineItemReductionCreate } from "./LineItemReductionCreate";
import { RefundType } from "./RefundType";


class RefundCreate {

        /**
        * 
        */
    'amount'?: number;

        /**
        * 
        */
    'completion'?: number;

        /**
        * The external id helps to identify duplicate calls to the refund service. As such the external ID has to be unique per transaction.
        */
    'externalId': string;

        /**
        * 
        */
    'merchantReference'?: string;

        /**
        * 
        */
    'reductions'?: Array<LineItemReductionCreate>;

        /**
        * 
        */
    'transaction'?: number;

        /**
        * 
        */
    'type': RefundType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "reductions",
        "baseName": "reductions",
        "type": "Array<LineItemReductionCreate>"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "RefundType"
        }        
    ];

    static getAttributeTypeMap() {
        return RefundCreate.attributeTypeMap;
    }
}

export { RefundCreate }
