'use strict';


class PaymentAppCompletionConfigurationCreate {

        /**
        * The URL that the payment service provider will invoke to process a completion request. This endpoint handles communication with the provider for initiating and managing completions.
        */
    'completionEndpoint'?: string;

        /**
        * The maximum time (in minutes) to wait for a response from the payment service provider after a completion request is triggered. If no feedback or final status is received within this period, the completion is considered failed.
        */
    'completionTimeoutInMinutes'?: number;

        /**
        * The maximum number of days after a transaction's authorization during which a completion or void action can be triggered. Once this period has passed, neither action can be executed.
        */
    'maximalCompletionDelayInDays'?: number;

        /**
        * Whether the payment connector can process multiple completions for a single transaction.
        */
    'multipleCompletionsSupported'?: boolean;

        /**
        * The URL that the payment service provider will invoke to process a void request. This endpoint handles communication with the provider for initiating and managing voids.
        */
    'voidEndpoint'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "completionEndpoint",
        "baseName": "completionEndpoint",
        "type": "string"
        },
        
        {
        "name": "completionTimeoutInMinutes",
        "baseName": "completionTimeoutInMinutes",
        "type": "number"
        },
        
        {
        "name": "maximalCompletionDelayInDays",
        "baseName": "maximalCompletionDelayInDays",
        "type": "number"
        },
        
        {
        "name": "multipleCompletionsSupported",
        "baseName": "multipleCompletionsSupported",
        "type": "boolean"
        },
        
        {
        "name": "voidEndpoint",
        "baseName": "voidEndpoint",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppCompletionConfigurationCreate.attributeTypeMap;
    }
}

export { PaymentAppCompletionConfigurationCreate }
