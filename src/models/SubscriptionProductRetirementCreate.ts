'use strict';


class SubscriptionProductRetirementCreate {

        /**
        * 
        */
    'product': number;

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
        "name": "product",
        "baseName": "product",
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
        return SubscriptionProductRetirementCreate.attributeTypeMap;
    }
}

export { SubscriptionProductRetirementCreate }
