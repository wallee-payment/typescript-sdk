'use strict';
import { LineItemReductionCreate } from "./LineItemReductionCreate";
import { RefundType } from "./RefundType";


class RefundCreate {

        /**
        * The total monetary amount of the refund, representing the exact credit issued to the customer.
        */
    'amount'?: number;

        /**
        * The transaction completion that the refund belongs to.
        */
    'completion'?: number;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The merchant's reference used to identify the refund.
        */
    'merchantReference'?: string;

        /**
        * The reductions applied on the original transaction items, detailing specific adjustments associated with the refund.
        */
    'reductions'?: Array<LineItemReductionCreate>;

        /**
        * The transaction that the refund belongs to.
        */
    'transaction'?: number;

        /**
        * The type specifying the method and origin of the refund (e.g., initiated by the customer or merchant).
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
