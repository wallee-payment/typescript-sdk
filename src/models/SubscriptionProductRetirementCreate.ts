'use strict';


class SubscriptionProductRetirementCreate {

        /**
        * The product that is to be retired.
        */
    'product': number;

        /**
        * Whether the subscriptions' termination periods should be respected.
        */
    'respectTerminationPeriods'?: boolean;

        /**
        * The product to which the subscriptions with the retiring product are to be migrated. If none is defined, the subscriptions are terminated.
        */
    'targetProduct'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "product",
        "baseName": "product",
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
        return SubscriptionProductRetirementCreate.attributeTypeMap;
    }
}

export { SubscriptionProductRetirementCreate }
