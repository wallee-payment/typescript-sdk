'use strict';
import { RestAddressFormat } from "./RestAddressFormat";


class RestCountry {

        /**
        * Specifies the country's way of formatting addresses.
        */
    'addressFormat'?: RestAddressFormat;

        /**
        * The country's two-letter code (ISO 3166-1 alpha-2 format).
        */
    'isoCode2'?: string;

        /**
        * The country's three-letter code (ISO 3166-1 alpha-3 format).
        */
    'isoCode3'?: string;

        /**
        * The name of the country.
        */
    'name'?: string;

        /**
        * The country's three-digit code (ISO 3166-1 numeric format).
        */
    'numericCode'?: string;

        /**
        * The codes of all regions (e.g. states, provinces) of the country (ISO 3166-2 format).
        */
    'stateCodes'?: Array<string>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "addressFormat",
        "baseName": "addressFormat",
        "type": "RestAddressFormat"
        },
        
        {
        "name": "isoCode2",
        "baseName": "isoCode2",
        "type": "string"
        },
        
        {
        "name": "isoCode3",
        "baseName": "isoCode3",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "numericCode",
        "baseName": "numericCode",
        "type": "string"
        },
        
        {
        "name": "stateCodes",
        "baseName": "stateCodes",
        "type": "Array<string>"
        }        
    ];

    static getAttributeTypeMap() {
        return RestCountry.attributeTypeMap;
    }
}

export { RestCountry }
