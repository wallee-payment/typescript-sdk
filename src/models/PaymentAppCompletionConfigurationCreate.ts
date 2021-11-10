'use strict';


class PaymentAppCompletionConfigurationCreate {

        /**
        * The completion endpoint is invoked to request the payment service provider to execute a completion.
        */
    'completionEndpoint'?: string;

        /**
        * When the completion or the void is triggered we expect a feedback about the state of it. This timeout defines after how long we consider the void resp. completion as failed without receiving a final state update.
        */
    'completionTimeoutInMinutes'?: number;

        /**
        * The completion resp. the void can be triggered a while after the authorization of the transaction has been executed. This delay defines how many days after the authorization the void resp. completion must be triggered at the latest.
        */
    'maximalCompletionDelayInDays'?: number;

        /**
        * This flag indicates whether the connector supports multiple completions for a single transaction or not.
        */
    'multipleCompletionsSupported'?: boolean;

        /**
        * The void endpoint is invoked to request the payment service provider to execute a void.
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
