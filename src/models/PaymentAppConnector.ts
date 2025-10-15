'use strict';
import { PaymentAppCompletionConfiguration } from "./PaymentAppCompletionConfiguration";
import { PaymentAppConnectorState } from "./PaymentAppConnectorState";
import { PaymentAppProcessor } from "./PaymentAppProcessor";
import { PaymentAppRefundConfiguration } from "./PaymentAppRefundConfiguration";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";


class PaymentAppConnector {

        /**
        * The duration within which the authorization process for a payment should complete.
        */
    'authorizationTimeout'?: string;

        /**
        * The completion configuration controlling how deferred completion is processed. If not present, deferred completion is not supported for this connector.
        */
    'completionConfiguration'?: PaymentAppCompletionConfiguration;

        /**
        * The connector configuration created alongside the connector within its designated space. This configuration is used in transactions created using this connector.
        */
    'connectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The date and time when the connector was created.
        */
    'createdOn'?: Date;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
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
        * The name used to identify the connector.
        */
    'name'?: string;

        /**
        * The URL where the user is redirected to process a payment. This endpoint is provided by the external service provider.
        */
    'paymentPageEndpoint'?: string;

        /**
        * The payment app processor that the connector belongs to. This relationship is defined when the connector is created.
        */
    'processor'?: PaymentAppProcessor;

        /**
        * The refund configuration controlling the behavior for processing refunds. If not present, refunds are not supported for this connector.
        */
    'refundConfiguration'?: PaymentAppRefundConfiguration;

        /**
        * The object's current state.
        */
    'state'?: PaymentAppConnectorState;

        /**
        * The date and time when the connector was last updated.
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
