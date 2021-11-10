'use strict';
import { PaymentAppRefundTargetState } from "./PaymentAppRefundTargetState";


class PaymentAppRefundUpdateRequest {

        /**
        * The failure reason indicates why the refund failed. It is required when the target state is FAILED.
        */
    'failureReasonId'?: number;

        /**
        * The reference identifies the refund within the systems of the external service provider. It is required when the target state is SUCCESSFUL.
        */
    'reference'?: string;

        /**
        * This is the ID of the refund that should be updated.
        */
    'refundId'?: number;

        /**
        * The target state defines the state into which the refund should be switched into. Once the refund changed the state it will not be possible to change it again.
        */
    'targetState'?: PaymentAppRefundTargetState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "failureReasonId",
        "baseName": "failureReasonId",
        "type": "number"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "refundId",
        "baseName": "refundId",
        "type": "number"
        },
        
        {
        "name": "targetState",
        "baseName": "targetState",
        "type": "PaymentAppRefundTargetState"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppRefundUpdateRequest.attributeTypeMap;
    }
}

export { PaymentAppRefundUpdateRequest }
