'use strict';


class PaymentMethodBrand {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'grayImagePath'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'imagePath'?: string;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'paymentMethod'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "grayImagePath",
        "baseName": "grayImagePath",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "imagePath",
        "baseName": "imagePath",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentMethodBrand.attributeTypeMap;
    }
}

export { PaymentMethodBrand }
