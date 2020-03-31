'use strict';


class ShopifyRecurringOrderUpdateRequest {

        /**
        * 
        */
    'executionDate'?: Date;

        /**
        * 
        */
    'recurringOrderId'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "executionDate",
        "baseName": "executionDate",
        "type": "Date"
        },
        
        {
        "name": "recurringOrderId",
        "baseName": "recurringOrderId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifyRecurringOrderUpdateRequest.attributeTypeMap;
    }
}

export { ShopifyRecurringOrderUpdateRequest }
