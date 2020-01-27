'use strict';
import { CustomerAddressType } from "./CustomerAddressType";
import { CustomerPostalAddressCreate } from "./CustomerPostalAddressCreate";


class AbstractCustomerAddressActive {

        /**
        * 
        */
    'address'?: CustomerPostalAddressCreate;

        /**
        * 
        */
    'addressType'?: CustomerAddressType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "address",
        "baseName": "address",
        "type": "CustomerPostalAddressCreate"
        },
        
        {
        "name": "addressType",
        "baseName": "addressType",
        "type": "CustomerAddressType"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractCustomerAddressActive.attributeTypeMap;
    }
}

export { AbstractCustomerAddressActive }
