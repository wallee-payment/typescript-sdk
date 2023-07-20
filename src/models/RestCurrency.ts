'use strict';


class RestCurrency {

        /**
        * The currency's three-letter code (ISO 4217 format).
        */
    'currencyCode'?: string;

        /**
        * The currency's number of decimals. When calculating amounts in this currency, the fraction digits determine the accuracy.
        */
    'fractionDigits'?: number;

        /**
        * The name of the currency.
        */
    'name'?: string;

        /**
        * The currency's three-digit code (ISO 4217 format).
        */
    'numericCode'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "string"
        },
        
        {
        "name": "fractionDigits",
        "baseName": "fractionDigits",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "numericCode",
        "baseName": "numericCode",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return RestCurrency.attributeTypeMap;
    }
}

export { RestCurrency }
