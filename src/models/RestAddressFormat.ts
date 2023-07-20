'use strict';
import { RestAddressFormatField } from "./RestAddressFormatField";


class RestAddressFormat {

        /**
        * A list of sample post codes.
        */
    'postCodeExamples'?: Array<string>;

        /**
        * The regular expression to validate post codes.
        */
    'postCodeRegex'?: string;

        /**
        * The fields that are required in the address format.
        */
    'requiredFields'?: Array<RestAddressFormatField>;

        /**
        * The fields that are used in the address format.
        */
    'usedFields'?: Array<RestAddressFormatField>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "postCodeExamples",
        "baseName": "postCodeExamples",
        "type": "Array<string>"
        },
        
        {
        "name": "postCodeRegex",
        "baseName": "postCodeRegex",
        "type": "string"
        },
        
        {
        "name": "requiredFields",
        "baseName": "requiredFields",
        "type": "Array<RestAddressFormatField>"
        },
        
        {
        "name": "usedFields",
        "baseName": "usedFields",
        "type": "Array<RestAddressFormatField>"
        }        
    ];

    static getAttributeTypeMap() {
        return RestAddressFormat.attributeTypeMap;
    }
}

export { RestAddressFormat }
