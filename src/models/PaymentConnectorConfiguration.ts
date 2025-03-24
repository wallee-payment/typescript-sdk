'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";
import { PaymentProcessorConfiguration } from "./PaymentProcessorConfiguration";
import { SalesChannel } from "./SalesChannel";


class PaymentConnectorConfiguration {

        /**
        * Whether this connector configuration is enabled for processing payments, taking into account the state of the processor and payment method configurations.
        */
    'applicableForTransactionProcessing'?: boolean;

        /**
        * Conditions allow to define criteria that a transaction must fulfill in order for the connector configuration to be considered for processing the payment.
        */
    'conditions'?: Array<number>;

        /**
        * The connector that the configuration is for.
        */
    'connector'?: number;

        /**
        * The sales channels for which the connector configuration is enabled. If empty, it is enabled for all sales channels.
        */
    'enabledSalesChannels'?: Array<SalesChannel>;

        /**
        * The space views for which the connector configuration is enabled. If empty, it is enabled for all space views.
        */
    'enabledSpaceViews'?: Array<number>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The URL to the connector's image.
        */
    'imagePath'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name used to identify the connector configuration.
        */
    'name'?: string;

        /**
        * The payment method configuration that the connector configuration belongs to.
        */
    'paymentMethodConfiguration'?: PaymentMethodConfiguration;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority that determines the order in which connector configurations are taken into account when processing a payment. Low values are considered first.
        */
    'priority'?: number;

        /**
        * The processor configuration that the connector configuration belongs to.
        */
    'processorConfiguration'?: PaymentProcessorConfiguration;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "applicableForTransactionProcessing",
        "baseName": "applicableForTransactionProcessing",
        "type": "boolean"
        },
        
        {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<number>"
        },
        
        {
        "name": "connector",
        "baseName": "connector",
        "type": "number"
        },
        
        {
        "name": "enabledSalesChannels",
        "baseName": "enabledSalesChannels",
        "type": "Array<SalesChannel>"
        },
        
        {
        "name": "enabledSpaceViews",
        "baseName": "enabledSpaceViews",
        "type": "Array<number>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "imagePath",
        "baseName": "imagePath",
        "type": "string"
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
        "name": "paymentMethodConfiguration",
        "baseName": "paymentMethodConfiguration",
        "type": "PaymentMethodConfiguration"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "priority",
        "baseName": "priority",
        "type": "number"
        },
        
        {
        "name": "processorConfiguration",
        "baseName": "processorConfiguration",
        "type": "PaymentProcessorConfiguration"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentConnectorConfiguration.attributeTypeMap;
    }
}

export { PaymentConnectorConfiguration }
