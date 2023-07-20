'use strict';
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { PaymentAppProcessorState } from "./PaymentAppProcessorState";
import { PaymentProcessorConfiguration } from "./PaymentProcessorConfiguration";


class PaymentAppProcessor {

        /**
        * 
        */
    'configuredEnvironment'?: ChargeAttemptEnvironment;

        /**
        * The created on date is the date when this processor has been added.
        */
    'createdOn'?: Date;

        /**
        * The documentation URL points to a web site that describes how to configure and use the processor.
        */
    'documentationUrl'?: string;

        /**
        * The external ID corresponds to the ID that was provided during creation of the processor.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The installation ID identifies the Web App installation.
        */
    'installationId'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name of the processor will be displayed within the user interfaces that the merchant is interacting with.
        */
    'name'?: string;

        /**
        * This processor configuration is created as part of the app processor. Any transaction created with the processor is linked with this processor configuration.
        */
    'processorConfiguration'?: PaymentProcessorConfiguration;

        /**
        * When the user sets the processor into the production mode the user will be forwarded to this URL to configure the production environment. When no URL is provided no redirection will happen.
        */
    'productionModeUrl'?: string;

        /**
        * The object's current state.
        */
    'state'?: PaymentAppProcessorState;

        /**
        * 
        */
    'svgIcon'?: string;

        /**
        * The updated on date indicates when the last update on the processor occurred.
        */
    'updatedOn'?: Date;

        /**
        * When the processor is ready to be used for transactions in the production environment this flag is set to true.
        */
    'usableInProduction'?: boolean;

        /**
        * 
        */
    'usableInProductionSince'?: Date;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "configuredEnvironment",
        "baseName": "configuredEnvironment",
        "type": "ChargeAttemptEnvironment"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "documentationUrl",
        "baseName": "documentationUrl",
        "type": "string"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "installationId",
        "baseName": "installationId",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "processorConfiguration",
        "baseName": "processorConfiguration",
        "type": "PaymentProcessorConfiguration"
        },
        
        {
        "name": "productionModeUrl",
        "baseName": "productionModeUrl",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentAppProcessorState"
        },
        
        {
        "name": "svgIcon",
        "baseName": "svgIcon",
        "type": "string"
        },
        
        {
        "name": "updatedOn",
        "baseName": "updatedOn",
        "type": "Date"
        },
        
        {
        "name": "usableInProduction",
        "baseName": "usableInProduction",
        "type": "boolean"
        },
        
        {
        "name": "usableInProductionSince",
        "baseName": "usableInProductionSince",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppProcessor.attributeTypeMap;
    }
}

export { PaymentAppProcessor }
