'use strict';


class SubscriptionProductVersionRetirementCreate {

        /**
        * The product version that is to be retired.
        */
    'productVersion': number;

        /**
        * Whether the subscriptions' termination periods should be respected.
        */
    'respectTerminationPeriods'?: boolean;

        /**
        * The product to which the subscriptions with the retiring product version are to be migrated. If none is defined, the subscriptions are terminated.
        */
    'targetProduct'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "productVersion",
        "baseName": "productVersion",
        "type": "number"
        },
        
        {
        "name": "respectTerminationPeriods",
        "baseName": "respectTerminationPeriods",
        "type": "boolean"
        },
        
        {
        "name": "targetProduct",
        "baseName": "targetProduct",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductVersionRetirementCreate.attributeTypeMap;
    }
}

export { SubscriptionProductVersionRetirementCreate }
