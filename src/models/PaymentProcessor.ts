'use strict';


class PaymentProcessor {

        /**
        * 
        */
    'companyName'?: { [key: string]: string; };

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'feature'?: number;

        /**
        * 
        */
    'headquartersLocation'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'logoPath'?: string;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'productName'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "companyName",
        "baseName": "companyName",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
        },
        
        {
        "name": "headquartersLocation",
        "baseName": "headquartersLocation",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "logoPath",
        "baseName": "logoPath",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "productName",
        "baseName": "productName",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentProcessor.attributeTypeMap;
    }
}

export { PaymentProcessor }
