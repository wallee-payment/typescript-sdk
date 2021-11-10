'use strict';
import { PaymentAppChargeAttemptTargetState } from "./PaymentAppChargeAttemptTargetState";


class PaymentAppChargeAttemptUpdateRequest {

        /**
        * This is the ID of the charge attempt that should be updated.
        */
    'chargeAttemptId'?: number;

        /**
        * The end user failure message indicates to the end user (buyer) why the payment failed. The message has to be in the language of the end user. The language is provided within the payment page invocation URL.
        */
    'endUserFailureMessage'?: string;

        /**
        * The failure reason indicates why the charge attempt failed. It is required when the target state is FAILED.
        */
    'failureReasonId'?: number;

        /**
        * The reference identifies the charge attempt within the systems of the external service provider. It is required when the target state is SUCCESSFUL.
        */
    'reference'?: string;

        /**
        * The target state defines the state into which the charge attempt should be switched into. Once the charge attempt changed the state it will not be possible to change it again.
        */
    'targetState'?: PaymentAppChargeAttemptTargetState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "chargeAttemptId",
        "baseName": "chargeAttemptId",
        "type": "number"
        },
        
        {
        "name": "endUserFailureMessage",
        "baseName": "endUserFailureMessage",
        "type": "string"
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
        "type": "PaymentAppChargeAttemptTargetState"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppChargeAttemptUpdateRequest.attributeTypeMap;
    }
}

export { PaymentAppChargeAttemptUpdateRequest }
