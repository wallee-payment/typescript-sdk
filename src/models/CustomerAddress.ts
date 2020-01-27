'use strict';
import { Customer } from "./Customer";
import { CustomerAddressType } from "./CustomerAddressType";
import { CustomerPostalAddress } from "./CustomerPostalAddress";


class CustomerAddress {

        /**
        * 
        */
    'address'?: CustomerPostalAddress;

        /**
        * 
        */
    'addressType'?: CustomerAddressType;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'customer'?: Customer;

        /**
        * 
        */
    'defaultAddress'?: boolean;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
