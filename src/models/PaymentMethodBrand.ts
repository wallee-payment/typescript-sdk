'use strict';


class PaymentMethodBrand {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'grayImagePath'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'imagePath'?: string;

        /**
        * The localized name of the object.
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
