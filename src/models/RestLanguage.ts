'use strict';


class RestLanguage {

        /**
        * The two-letter code of the language's region (ISO 3166-1 alpha-2 format).
        */
    'countryCode'?: string;

        /**
        * The language's IETF tag consisting of the two-letter ISO code and region e.g. en-US, de-CH.
        */
    'ietfCode'?: string;

        /**
        * The language's two-letter code (ISO 639-1 format).
        */
    'iso2Code'?: string;

        /**
        * The language's three-letter code (ISO 639-2/T format).
        */
    'iso3Code'?: string;

        /**
        * The name of the language.
        */
    'name'?: string;

        /**
        * The expression to determine the plural index for a given number of items used to find the proper plural form for translations.
        */
    'pluralExpression'?: string;

        /**
        * Whether this is the primary language in a group of languages.
        */
    'primaryOfGroup'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
        },
        
        {
        "name": "ietfCode",
        "baseName": "ietfCode",
        "type": "string"
        },
        
        {
        "name": "iso2Code",
        "baseName": "iso2Code",
        "type": "string"
        },
        
        {
        "name": "iso3Code",
        "baseName": "iso3Code",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "pluralExpression",
        "baseName": "pluralExpression",
        "type": "string"
        },
        
        {
        "name": "primaryOfGroup",
        "baseName": "primaryOfGroup",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return RestLanguage.attributeTypeMap;
    }
}

export { RestLanguage }
