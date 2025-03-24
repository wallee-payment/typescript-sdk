'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DataCollectionType } from "./DataCollectionType";
import { OneClickPaymentMode } from "./OneClickPaymentMode";
import { ResourcePath } from "./ResourcePath";


class PaymentMethodConfiguration {

        /**
        * The data collection type specifies how the payment information is collected.
        */
    'dataCollectionType'?: DataCollectionType;

        /**
        * A custom description for the payment method which is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The resource path to a custom image for the payment method which is displayed to the customer.
        */
    'imageResourcePath'?: ResourcePath;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name used to identify the payment method configuration.
        */
    'name'?: string;

        /**
        * The one-click payment mode determines whether the customer can save their payment details for later payments.
        */
    'oneClickPaymentMode'?: OneClickPaymentMode;

        /**
        * The payment method that the configuration is for.
        */
    'paymentMethod'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The description for the payment method that is actually displayed to the customer. This is either the custom description, if defined, or otherwise the payment method's default one.
        */
    'resolvedDescription'?: { [key: string]: string; };

        /**
        * The image URL for the payment method that is actually displayed to the customer. This is either the custom image, if defined, or otherwise the payment method's default one.
        */
    'resolvedImageUrl'?: string;

        /**
        * The title for the payment method that is actually displayed to the customer. This is either the custom title, if defined, or otherwise the payment method's default one.
        */
    'resolvedTitle'?: { [key: string]: string; };

        /**
        * When listing payment methods, they can be sorted by this number.
        */
    'sortOrder'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'spaceId'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * A custom title for the payment method which is displayed to the customer.
        */
    'title'?: { [key: string]: string; };

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "dataCollectionType",
        "baseName": "dataCollectionType",
        "type": "DataCollectionType"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "imageResourcePath",
        "baseName": "imageResourcePath",
        "type": "ResourcePath"
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
        "name": "oneClickPaymentMode",
        "baseName": "oneClickPaymentMode",
        "type": "OneClickPaymentMode"
        },
        
        {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "resolvedDescription",
        "baseName": "resolvedDescription",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "resolvedImageUrl",
        "baseName": "resolvedImageUrl",
        "type": "string"
        },
        
        {
        "name": "resolvedTitle",
        "baseName": "resolvedTitle",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentMethodConfiguration.attributeTypeMap;
    }
}

export { PaymentMethodConfiguration }
