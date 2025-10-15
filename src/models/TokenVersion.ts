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
        * The date and time when the token version was activated.
        */
    'activatedOn'?: Date;

        /**
        * The billing address to be used for the transaction if no explicit billing address is provided during payment processing.
        */
    'billingAddress'?: Address;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The environment in which the token version was created.
        */
    'environment'?: ChargeAttemptEnvironment;

        /**
        * The date and time when the token version is set to expire, after which it will be marked as obsolete.
        */
    'expiresOn'?: Date;

        /**
        * The URL to the token's icon displayed to the customer.
        */
    'iconUrl'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The labels providing additional information about the object.
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
        * The name used to identify the token.
        */
    'name'?: string;

        /**
        * The date and time when the token version was marked obsolete.
        */
    'obsoletedOn'?: Date;

        /**
        * The payment connector configuration that initialized the token version.
        */
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The hashed payment information that the token version represents.
        */
    'paymentInformationHashes'?: Array<PaymentInformationHash>;

        /**
        * The payment method that initialized the token version.
        */
    'paymentMethod'?: number;

        /**
        * The payment method brand that initialized the token version.
        */
    'paymentMethodBrand'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The token name as specified by the processor.
        */
    'processorToken'?: string;

        /**
        * The shipping address to be used for the transaction if no explicit shipping address is provided during payment processing.
        */
    'shippingAddress'?: Address;

        /**
        * The object's current state.
        */
    'state'?: TokenVersionState;

        /**
        * The token that the token version belongs to.
        */
    'token'?: Token;

        /**
        * The type specifies the nature of the token and identifies the payment connector capable of processing it.
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
