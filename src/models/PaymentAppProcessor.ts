'use strict';
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { PaymentAppProcessorState } from "./PaymentAppProcessorState";
import { PaymentProcessorConfiguration } from "./PaymentProcessorConfiguration";


class PaymentAppProcessor {

        /**
        * The environment (e.g., test or production) currently configured for the processor.
        */
    'configuredEnvironment'?: ChargeAttemptEnvironment;

        /**
        * The date and time when the processor was created.
        */
    'createdOn'?: Date;

        /**
        * A URL pointing to the documentation that explains how to configure and use the processor.
        */
    'documentationUrl'?: string;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
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
        * The name used to identify the processor.
        */
    'name'?: string;

        /**
        * The processor configuration created alongside the process within its designated space. This configuration is used in transactions created using this processor.
        */
    'processorConfiguration'?: PaymentProcessorConfiguration;

        /**
        * A URL pointing to the site where merchants can set up production mode for the processor.
        */
    'productionModeUrl'?: string;

        /**
        * The object's current state.
        */
    'state'?: PaymentAppProcessorState;

        /**
        * An SVG icon representing the processor, displayed to the user in the interface.
        */
    'svgIcon'?: string;

        /**
        * The date and time when the processor was last updated.
        */
    'updatedOn'?: Date;

        /**
        * Whether the processor is fully prepared and available for handling transactions in a production environment.
        */
    'usableInProduction'?: boolean;

        /**
        * the date and time when the processor became fully usable and available for handling transactions in a production environment.
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
