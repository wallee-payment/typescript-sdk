'use strict';
import { PaymentAppCompletionTargetState } from "./PaymentAppCompletionTargetState";


class PaymentAppCompletionUpdateRequest {

        /**
        * This is the ID of the completion that should be updated.
        */
    'completionId'?: number;

        /**
        * The failure reason indicates why the completion failed. It is required when the target state is FAILED.
        */
    'failureReasonId'?: number;

        /**
        * The reference identifies the completion within the systems of the external service provider. It is required when the target state is SUCCESSFUL.
        */
    'reference'?: string;

        /**
        * The target state defines the state into which the completion should be switched into. Once the completion changed the state it will not be possible to change it again.
        */
    'targetState'?: PaymentAppCompletionTargetState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "completionId",
        "baseName": "completionId",
        "type": "number"
        },
        
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
        "name": "targetState",
        "baseName": "targetState",
        "type": "PaymentAppCompletionTargetState"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppCompletionUpdateRequest.attributeTypeMap;
    }
}

export { PaymentAppCompletionUpdateRequest }
