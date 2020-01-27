'use strict';
import { AbstractCustomerActive } from "./AbstractCustomerActive";


class CustomerCreate extends AbstractCustomerActive {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerCreate.attributeTypeMap);
    }
}

export { CustomerCreate }
