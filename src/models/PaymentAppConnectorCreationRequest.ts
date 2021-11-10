'use strict';
import { PaymentAppCompletionConfigurationCreate } from "./PaymentAppCompletionConfigurationCreate";
import { PaymentAppRefundConfigurationCreate } from "./PaymentAppRefundConfigurationCreate";


class PaymentAppConnectorCreationRequest {

        /**
        * When the transaction is not authorized within this timeout the transaction is considered as failed.
        */
    'authorizationTimeoutInMinutes': number;

        /**
        * The completion configuration allows the connector to support deferred completions on a transaction. If it is not provided the connector will not process transactions in deferred mode.
        */
    'completionConfiguration'?: PaymentAppCompletionConfigurationCreate;

        /**
        * The ID of the connector identifies which connector that should be linked with this web app connector. The connector defines the payment method.
        */
    'connector': number;

        /**
        * The external ID identifies the connector within the external system. It has to be unique per processor external ID and for any subsequent update the same ID must be sent.
        */
    'externalId': string;

        /**
        * The name of the connector will be displayed within the user interfaces that the merchant is interacting with.
        */
    'name': string;

        /**
        * The payment page endpoint URL will be invoked by the buyer to carry out the authorization of the payment.
        */
    'paymentPageEndpoint': string;

        /**
        * The external ID of the processor identifies the processor to which this connector belongs to. The processor cannot be changed once it has been set on a connector.
        */
    'processorExternalId': string;

        /**
        * The refund configuration allows the connector to support refunds on transactions. In case no refund configuration is provided the connector will not support refunds.
        */
    'refundConfiguration'?: PaymentAppRefundConfigurationCreate;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "authorizationTimeoutInMinutes",
        "baseName": "authorizationTimeoutInMinutes",
        "type": "number"
        },
        
        {
        "name": "completionConfiguration",
        "baseName": "completionConfiguration",
        "type": "PaymentAppCompletionConfigurationCreate"
        },
        
        {
        "name": "connector",
        "baseName": "connector",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
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
        "name": "processorExternalId",
        "baseName": "processorExternalId",
        "type": "string"
        },
        
        {
        "name": "refundConfiguration",
        "baseName": "refundConfiguration",
        "type": "PaymentAppRefundConfigurationCreate"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppConnectorCreationRequest.attributeTypeMap;
    }
}

export { PaymentAppConnectorCreationRequest }
