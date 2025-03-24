'use strict';
import { SubscriptionChargeProcessingType } from "./SubscriptionChargeProcessingType";


class SubscriptionChargeCreate {

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
        */
    'failedUrl'?: string;

        /**
        * The date and time when the execution of the charge is planned.
        */
    'plannedExecutionDate'?: Date;

        /**
        * The processing type specifies how the charge is to be processed.
        */
    'processingType': SubscriptionChargeProcessingType;

        /**
        * The merchant's reference used to identify the charge.
        */
    'reference'?: string;

        /**
        * The subscription that the charge belongs to.
        */
    'subscription': number;

        /**
        * The URL to redirect the customer back to after they successfully authenticated their payment.
        */
    'successUrl'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "failedUrl",
        "baseName": "failedUrl",
        "type": "string"
        },
        
        {
        "name": "plannedExecutionDate",
        "baseName": "plannedExecutionDate",
        "type": "Date"
        },
        
        {
        "name": "processingType",
        "baseName": "processingType",
        "type": "SubscriptionChargeProcessingType"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        },
        
        {
        "name": "successUrl",
        "baseName": "successUrl",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionChargeCreate.attributeTypeMap;
    }
}

export { SubscriptionChargeCreate }
