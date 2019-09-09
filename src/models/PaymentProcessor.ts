'use strict';


class PaymentProcessor {

        /**
        * 
        */
    'companyName'?: { [key: string]: string; };

        /**
        * 
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
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'logoPath'?: string;

        /**
        * 
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
