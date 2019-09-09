'use strict';
import { SubscriptionSuspension } from "./SubscriptionSuspension";


class SubscriptionSuspensionRunning extends SubscriptionSuspension {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionSuspensionRunning.attributeTypeMap);
    }
}

export { SubscriptionSuspensionRunning }
