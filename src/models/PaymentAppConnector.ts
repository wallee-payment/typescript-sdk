'use strict';
import { PaymentAppCompletionConfiguration } from "./PaymentAppCompletionConfiguration";
import { PaymentAppConnectorState } from "./PaymentAppConnectorState";
import { PaymentAppProcessor } from "./PaymentAppProcessor";
import { PaymentAppRefundConfiguration } from "./PaymentAppRefundConfiguration";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";


class PaymentAppConnector {

        /**
        * 
        */
    'authorizationTimeout'?: string;

        /**
        * The completion configuration defines how the deferred completion is processed. If it is not present it means that deferred completion is not supported by this connector.
        */
    'completionConfiguration'?: PaymentAppCompletionConfiguration;

        /**
        * The connector configuration references the configuration that was created as part of this connector within the space. The connector configuration is referenced within transactions created with this connector.
        */
    'connectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The created on date indicates when the connector was added.
        */
    'createdOn'?: Date;

        /**
        * The external ID corresponds to the ID provided during inserting of the processor.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name of the connector will be displayed within the user interfaces that the merchant is interacting with.
        */
    'name'?: string;

        /**
        * The payment page endpoint is invoked to process the transaction. The endpoint is defined by the external service provider.
        */
    'paymentPageEndpoint'?: string;

        /**
        * The processor references the app processor to which this connector belongs to. The relationship is established during the creation of the connector.
        */
    'processor'?: PaymentAppProcessor;

        /**
        * The refund configuration defines how refunds are processed. If it is not present it means that refunds are not supported by this connector.
        */
    'refundConfiguration'?: PaymentAppRefundConfiguration;

        /**
        * The object's current state.
        */
    'state'?: PaymentAppConnectorState;

        /**
        * The updated on date indicates when the last time the connector was updated on.
        */
    'updatedOn'?: Date;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "authorizationTimeout",
        "baseName": "authorizationTimeout",
        "type": "string"
        },
        
        {
        "name": "completionConfiguration",
        "baseName": "completionConfiguration",
        "type": "PaymentAppCompletionConfiguration"
        },
        
        {
        "name": "connectorConfiguration",
        "baseName": "connectorConfiguration",
        "type": "PaymentConnectorConfiguration"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "paymentPageEndpoint",
        "baseName": "paymentPageEndpoint",
        "type": "string"
        },
        
        {
        "name": "processor",
        "baseName": "processor",
        "type": "PaymentAppProcessor"
        },
        
        {
        "name": "refundConfiguration",
        "baseName": "refundConfiguration",
        "type": "PaymentAppRefundConfiguration"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentAppConnectorState"
        },
        
        {
        "name": "updatedOn",
        "baseName": "updatedOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppConnector.attributeTypeMap;
    }
}

export { PaymentAppConnector }
