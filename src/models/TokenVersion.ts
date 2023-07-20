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
        * The date and time when the object was created.
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
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
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
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
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
        * The object's current state.
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
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
