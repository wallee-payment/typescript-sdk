'use strict';
import { SubscriptionChargeProcessingType } from "./SubscriptionChargeProcessingType";


class SubscriptionChargeCreate {

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * The user will be redirected to failed URL when the transaction could not be authorized or completed. In case no failed URL is specified a default failed page will be displayed.
        */
    'failedUrl'?: string;

        /**
        * 
        */
    'plannedExecutionDate'?: Date;

        /**
        * 
        */
    'processingType': SubscriptionChargeProcessingType;

        /**
        * 
        */
    'reference'?: string;

        /**
        * The field subscription indicates the subscription to which the charge belongs to.
        */
    'subscription': number;

        /**
        * The user will be redirected to success URL when the transaction could be authorized or completed. In case no success URL is specified a default success page will be displayed.
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
