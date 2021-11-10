'use strict';


class SubscriptionProductVersionRetirementCreate {

        /**
        * 
        */
    'productVersion': number;

        /**
        * 
        */
    'respectTerminiationPeriodsEnabled'?: boolean;

        /**
        * When a target product is not chosen, all customers with the retired product will be terminated.
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
        "name": "respectTerminiationPeriodsEnabled",
        "baseName": "respectTerminiationPeriodsEnabled",
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
