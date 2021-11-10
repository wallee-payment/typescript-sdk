'use strict';


class PaymentAppRefundConfigurationCreate {

        /**
        * This flag indicates whether the connector supports multiple refunds for a single transaction or not.
        */
    'multipleRefundsSupported'?: boolean;

        /**
        * The refund endpoint is invoked to request the payment service provider to execute a refund.
        */
    'refundEndpoint'?: string;

        /**
        * When the refund is triggered we expect a feedback about the state of it. This timeout defines after how long we consider the refund as failed without receiving a final state update.
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
