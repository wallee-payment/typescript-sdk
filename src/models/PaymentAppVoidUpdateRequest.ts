'use strict';
import { PaymentAppVoidTargetState } from "./PaymentAppVoidTargetState";


class PaymentAppVoidUpdateRequest {

        /**
        * The failure reason indicates why the void failed. It is required when the target state is FAILED.
        */
    'failureReasonId'?: number;

        /**
        * The reference identifies the void within the systems of the external service provider. It is required when the target state is SUCCESSFUL.
        */
    'reference'?: string;

        /**
        * The target state defines the state into which the void should be switched into. Once the void changed the state it will not be possible to change it again.
        */
    'targetState'?: PaymentAppVoidTargetState;

        /**
        * This is the ID of the void that should be updated.
        */
    'voidId'?: number;


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
        "name": "targetState",
        "baseName": "targetState",
        "type": "PaymentAppVoidTargetState"
        },
        
        {
        "name": "voidId",
        "baseName": "voidId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppVoidUpdateRequest.attributeTypeMap;
    }
}

export { PaymentAppVoidUpdateRequest }
