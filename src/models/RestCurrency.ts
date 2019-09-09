'use strict';


class RestCurrency {

        /**
        * The currency code identifies the currency with the three char long ISO 4217 code (e.g. USD, CHF, EUR).
        */
    'currencyCode'?: string;

        /**
        * The fraction digits indicates how many places the currency has. This also indicates with which precision we calculate internally when we do calculations with this currency.
        */
    'fractionDigits'?: number;

        /**
        * The numeric code identifies the currency with the three digit long ISO 4217 code (e.g. 978, 756, 840).
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
