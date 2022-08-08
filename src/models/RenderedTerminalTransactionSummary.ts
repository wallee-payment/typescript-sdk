'use strict';


class RenderedTerminalTransactionSummary {

        /**
        * The data property contains the binary data of the receipt document encoded as base 64 encoded string.
        */
    'data'?: Array<string>;

        /**
        * The mime type indicates the format of the receipt document. The mime type depends on the requested receipt format.
        */
    'mimeType'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
        },
        
        {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return RenderedTerminalTransactionSummary.attributeTypeMap;
    }
}

export { RenderedTerminalTransactionSummary }
