'use strict';
import { PaymentTerminalAddress } from "./PaymentTerminalAddress";


class PaymentTerminalContactAddress extends PaymentTerminalAddress {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentTerminalContactAddress.attributeTypeMap);
    }
}

export { PaymentTerminalContactAddress }
