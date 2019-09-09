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
        * 
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
