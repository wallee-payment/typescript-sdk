'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";
import { PaymentProcessorConfiguration } from "./PaymentProcessorConfiguration";
import { SalesChannel } from "./SalesChannel";


class PaymentConnectorConfiguration {

        /**
        * This property indicates if the connector is currently used for processing transactions. In case either the payment method configuration or the processor configuration is not active the connector will not be used even though the connector state is active.
        */
    'applicableForTransactionProcessing'?: boolean;

        /**
        * If a transaction meet all selected conditions the connector configuration will be used to process the transaction otherwise the next connector configuration in line will be chosen according to the priorities.
        */
    'conditions'?: Array<number>;

        /**
        * 
        */
    'connector'?: number;

        /**
        * Defines the sales channels the connector configuration is enabled for. In case the set is empty, the connector configuration is enabled for all sales channels.
        */
    'enabledSalesChannels'?: Array<SalesChannel>;

        /**
        * The connector configuration is only enabled for the selected space views. In case the set is empty the connector configuration is enabled for all space views.
        */
    'enabledSpaceViews'?: Array<number>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The connector configuration name is used internally to identify the configuration in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * 
        */
    'paymentMethodConfiguration'?: PaymentMethodConfiguration;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority will define the order of choice of the connector configurations. The lower the value, the higher the priority is going to be. This value can also be a negative number in case you are adding a new configuration that you want to have a high priority and you dont want to change the priority of all the other configurations.
        */
    'priority'?: number;

        /**
        * 
        */
    'processorConfiguration'?: PaymentProcessorConfiguration;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
