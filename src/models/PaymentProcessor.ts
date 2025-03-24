'use strict';


class PaymentProcessor {

        /**
        * The name of the company to which the processor belongs.
        */
    'companyName'?: { [key: string]: string; };

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * Where the processor's headquarters are located.
        */
    'headquartersLocation'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The path to the logo image of the processor.
        */
    'logoPath'?: string;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The name of the processor's product.
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
