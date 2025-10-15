'use strict';
import { AbstractPaymentLinkUpdate } from "./AbstractPaymentLinkUpdate";
import { CreationEntityState } from "./CreationEntityState";
import { PaymentLinkProtectionMode } from "./PaymentLinkProtectionMode";


class PaymentLinkCreate extends AbstractPaymentLinkUpdate {

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The protection mode defines whether the payment link is protected against tampering and specifies the protection method.
        */
    'protectionMode': PaymentLinkProtectionMode;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "protectionMode",
        "baseName": "protectionMode",
        "type": "PaymentLinkProtectionMode"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentLinkCreate.attributeTypeMap);
    }
}

export { PaymentLinkCreate }
