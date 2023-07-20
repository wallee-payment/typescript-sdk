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
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * The protection mode determines if the payment link is protected against tampering and in what way.
        */
    'protectionMode'?: PaymentLinkProtectionMode;


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
