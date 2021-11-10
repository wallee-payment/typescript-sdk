'use strict';


class PaymentAppProcessorCreationRequest {

        /**
        * The documentation URL has to point to a description of how to configure and use the processor.
        */
    'documentationUrl': string;

        /**
        * The external ID identifies the processor within the external system. It has to be unique per space and for any subsequent update the same ID must be sent.
        */
    'externalId': string;

        /**
        * The name of the processor will be displayed within the user interfaces that the merchant is interacting with.
        */
    'name': string;

        /**
        * The production mode URL has to point to a site on which the merchant can set up the production mode for the processor.
        */
    'productionModeUrl'?: string;

        /**
        * The SVG icon will be displayed to the user to represent this processor.
        */
    'svgIcon': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "documentationUrl",
        "baseName": "documentationUrl",
        "type": "string"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "productionModeUrl",
        "baseName": "productionModeUrl",
        "type": "string"
        },
        
        {
        "name": "svgIcon",
        "baseName": "svgIcon",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentAppProcessorCreationRequest.attributeTypeMap;
    }
}

export { PaymentAppProcessorCreationRequest }
