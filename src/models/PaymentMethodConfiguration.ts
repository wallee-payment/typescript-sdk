'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DataCollectionType } from "./DataCollectionType";
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { OneClickPaymentMode } from "./OneClickPaymentMode";
import { ResourcePath } from "./ResourcePath";


class PaymentMethodConfiguration {

        /**
        * The data collection type determines who is collecting the payment information. This can be done either by the processor (offsite) or by our application (onsite).
        */
    'dataCollectionType'?: DataCollectionType;

        /**
        * The payment method configuration description can be used to show a text during the payment process. Choose an appropriate description as it will be displayed to your customer.
        */
    'description'?: DatabaseTranslatedString;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The image of the payment method configuration overrides the default image of the payment method.
        */
    'imageResourcePath'?: ResourcePath;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment method configuration name is used internally to identify the payment method configuration. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * When the buyer is present on the payment page or within the iFrame the payment details can be stored automatically. The buyer will be able to use the stored payment details for subsequent transactions. When the transaction already contains a token one-click payments are disabled anyway
        */
    'oneClickPaymentMode'?: OneClickPaymentMode;

        /**
        * 
        */
    'paymentMethod'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The resolved description uses the specified description or the default one when it is not overridden.
        */
    'resolvedDescription'?: { [key: string]: string; };

        /**
        * The resolved URL of the image to use with this payment method.
        */
    'resolvedImageUrl'?: string;

        /**
        * The resolved title uses the specified title or the default one when it is not overridden.
        */
    'resolvedTitle'?: { [key: string]: string; };

        /**
        * The sort order of the payment method determines the ordering of the methods shown to the user during the payment process.
        */
    'sortOrder'?: number;

        /**
        * 
        */
    'spaceId'?: number;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The title of the payment method configuration is used within the payment process. The title is visible to the customer.
        */
    'title'?: DatabaseTranslatedString;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
        "type": "DatabaseTranslatedString"
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
        "type": "DatabaseTranslatedString"
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
