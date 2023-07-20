'use strict';
import { Customer } from "./Customer";
import { CustomerAddressType } from "./CustomerAddressType";
import { CustomerPostalAddress } from "./CustomerPostalAddress";


class CustomerAddress {

        /**
        * The actual postal address.
        */
    'address'?: CustomerPostalAddress;

        /**
        * Whether the address is for billing or shipping or both.
        */
    'addressType'?: CustomerAddressType;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The customer that the object belongs to.
        */
    'customer'?: Customer;

        /**
        * Whether this is the customer's default address.
        */
    'defaultAddress'?: boolean;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "address",
        "baseName": "address",
        "type": "CustomerPostalAddress"
        },
        
        {
        "name": "addressType",
        "baseName": "addressType",
        "type": "CustomerAddressType"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "customer",
        "baseName": "customer",
        "type": "Customer"
        },
        
        {
        "name": "defaultAddress",
        "baseName": "defaultAddress",
        "type": "boolean"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return CustomerAddress.attributeTypeMap;
    }
}

export { CustomerAddress }
