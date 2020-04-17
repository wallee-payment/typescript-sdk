'use strict';
import { Address } from "./Address";
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { Label } from "./Label";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentInformationHash } from "./PaymentInformationHash";
import { Token } from "./Token";
import { TokenVersionState } from "./TokenVersionState";
import { TokenVersionType } from "./TokenVersionType";


class TokenVersion {

        /**
        * 
        */
    'activatedOn'?: Date;

        /**
        * 
        */
    'billingAddress'?: Address;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'environment'?: ChargeAttemptEnvironment;

        /**
        * The expires on date indicates when token version expires. Once this date is reached the token version is marked as obsolete.
        */
    'expiresOn'?: Date;

        /**
        * 
        */
    'iconUrl'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * 
        */
    'language'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'name'?: string;

        /**
        * 
        */
    'obsoletedOn'?: Date;

        /**
        * 
        */
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The payment information hash set contains hashes of the payment information represented by this token version.
        */
    'paymentInformationHashes'?: Array<PaymentInformationHash>;

        /**
        * 
        */
    'paymentMethod'?: number;

        /**
        * 
        */
    'paymentMethodBrand'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'processorToken'?: string;

        /**
        * 
        */
    'shippingAddress'?: Address;

        /**
        * 
        */
    'state'?: TokenVersionState;

        /**
        * 
        */
    'token'?: Token;

        /**
        * The token version type determines what kind of token it is and by which payment connector the token can be processed by.
        */
    'type'?: TokenVersionType;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "activatedOn",
        "baseName": "activatedOn",
        "type": "Date"
        },
        
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "Address"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
        },
        
        {
        "name": "expiresOn",
        "baseName": "expiresOn",
        "type": "Date"
        },
        
        {
        "name": "iconUrl",
        "baseName": "iconUrl",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
        },
        
        {
        "name": "language",
        "baseName": "language",
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
        "name": "obsoletedOn",
        "baseName": "obsoletedOn",
        "type": "Date"
        },
        
        {
        "name": "paymentConnectorConfiguration",
        "baseName": "paymentConnectorConfiguration",
        "type": "PaymentConnectorConfiguration"
        },
        
        {
        "name": "paymentInformationHashes",
        "baseName": "paymentInformationHashes",
        "type": "Array<PaymentInformationHash>"
        },
        
        {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
        },
        
        {
        "name": "paymentMethodBrand",
        "baseName": "paymentMethodBrand",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processorToken",
        "baseName": "processorToken",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "Address"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "TokenVersionState"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "Token"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "TokenVersionType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TokenVersion.attributeTypeMap;
    }
}

export { TokenVersion }
