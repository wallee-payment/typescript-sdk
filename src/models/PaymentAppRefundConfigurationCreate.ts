'use strict';


class PaymentAppRefundConfigurationCreate {

        /**
        * Whether the payment connector can process multiple refunds for a single transaction.
        */
    'multipleRefundsSupported'?: boolean;

        /**
        * The URL that the payment service provider will invoke to process a refund request. This endpoint handles communication with the provider for initiating and managing refunds.
        */
    'refundEndpoint'?: string;

        /**
        * The maximum time (in minutes) to wait for a response from the payment service provider after a refund request is triggered. If no feedback or final status is received within this period, the refund is considered failed.
        */
    'refundTimeoutInMinutes'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "multipleRefundsSupported",
        "baseName": "multipleRefundsSupported",
        "type": "boolean"
        },
        
        {
        "name": "refundEndpoint",
        "baseName": "refundEndpoint",
        "type": "string"
        },
        
        {
        "name": "refundTimeoutInMinutes",
        "baseName": "refundTimeoutInMinutes",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppRefundConfigurationCreate.attributeTypeMap;
    }
}

export { PaymentAppRefundConfigurationCreate }
