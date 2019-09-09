'use strict';
import { AbstractPaymentLinkUpdate } from "./AbstractPaymentLinkUpdate";
import { CreationEntityState } from "./CreationEntityState";
import { PaymentLinkProtectionMode } from "./PaymentLinkProtectionMode";


class PaymentLinkCreate extends AbstractPaymentLinkUpdate {

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
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
